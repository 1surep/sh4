"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { MdInstallMobile } from "react-icons/md";

/*
 * Dismissible "install this app" banner.
 *
 * Rules:
 *  - It shows whenever the app is NOT installed.
 *  - Closing it ("x" / "Not now") hides it for this page view only. It comes
 *    back on the next refresh. Nothing is written to storage.
 *  - Only a genuine install suppresses it for good.
 *
 * The storage key is versioned. Anyone left with a stale "installed" flag from
 * the previous key gets a clean slate rather than a permanently hidden banner.
 */

const INSTALLED_KEY = "sh4-pwa-installed-v2";
const SHOW_DELAY_MS = 4000;

const readInstalledFlag = () => {
  try {
    return localStorage.getItem(INSTALLED_KEY) === "1";
  } catch (err) {
    return false;
  }
};

const writeInstalledFlag = () => {
  try {
    localStorage.setItem(INSTALLED_KEY, "1");
  } catch (err) {
    /* private mode / blocked storage - ignore */
  }
};

const clearInstalledFlag = () => {
  try {
    localStorage.removeItem(INSTALLED_KEY);
  } catch (err) {
    /* private mode / blocked storage - ignore */
  }
};

const isStandalone = () => {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
};

const detectIOS = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const iOSDevice = /iPad|iPhone|iPod/.test(ua);
  // iPadOS 13+ reports a Macintosh user agent
  const iPadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  return iOSDevice || iPadOS;
};

export default function InstallBanner() {
  const [visible, setVisible] = useState(false);
  const [ios, setIos] = useState(false);
  const [canPrompt, setCanPrompt] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Running inside the installed app - never nag.
    if (isStandalone()) {
      writeInstalledFlag();
      return;
    }

    setIos(detectIOS());

    let scheduled = false;
    let timer = null;

    const show = () => {
      if (scheduled) return;
      scheduled = true;
      timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    };

    /*
     * Chrome only fires beforeinstallprompt when the app is NOT currently
     * installed, so receiving it is proof the flag is stale - clear it.
     * This self-heals anyone stuck after uninstalling.
     */
    const promptAvailable = () => {
      clearInstalledFlag();
      setCanPrompt(true);
      show();
    };

    if (window.__pwaInstallPrompt) {
      promptAvailable();
    } else if (!readInstalledFlag()) {
      // No prompt yet (Chrome may never fire it, and iOS never does).
      // Still show the banner with manual instructions.
      show();
    }

    const onAvailable = () => promptAvailable();
    const onBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.__pwaInstallPrompt = e;
      promptAvailable();
    };
    const onInstalled = () => {
      writeInstalledFlag();
      setVisible(false);
    };

    window.addEventListener("pwa-install-available", onAvailable);
    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("pwa-install-available", onAvailable);
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const handleInstall = async () => {
    const promptEvent = window.__pwaInstallPrompt;

    /*
     * No native prompt available - iOS never provides one, and Chrome only
     * does so for a production build with an active service worker. Show the
     * manual steps instead of leaving the button dead.
     */
    if (!promptEvent) {
      setShowHelp(true);
      return;
    }

    // A captured prompt can only be used once.
    window.__pwaInstallPrompt = null;
    setCanPrompt(false);

    try {
      promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice && choice.outcome === "accepted") {
        writeInstalledFlag();
      }
    } catch (err) {
      /* prompt already consumed - ignore */
    } finally {
      setVisible(false);
    }
  };

  // Dismissal is for this page view only - nothing is written to storage,
  // so the banner returns on the next refresh.
  const handleClose = () => setVisible(false);

  const instructions = ios
    ? "Tap Share then Add to Home Screen to install."
    : "Open your browser menu and choose Install app.";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-28 left-4 right-4 sm:bottom-24 sm:left-8 sm:right-auto sm:w-[380px] z-[9990]"
        >
          <div className="relative rounded-2xl bg-green-900 shadow-2xl ring-4 ring-yellow-500/60 px-4 py-4 sm:px-5 sm:py-5">
            <button
              onClick={handleClose}
              aria-label="Dismiss install prompt"
              className="absolute top-2 right-2 p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
            >
              <IoClose size={20} />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <Image
                src="/icons/icon-192.png"
                alt="Sierra H4"
                width={48}
                height={48}
                priority
                className="rounded-xl shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                  Install Sierra H4
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Add us to your phone or desktop for quick access. ON ON 👣🍺
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={handleInstall}
                    className="flex items-center gap-2 px-5 py-2 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition-all text-sm cursor-pointer"
                  >
                    <MdInstallMobile size={18} />
                    Install
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 text-gray-300 hover:text-white font-medium text-sm cursor-pointer"
                  >
                    Not now
                  </button>
                </div>

                {!canPrompt && showHelp && (
                  <p className="text-yellow-400 text-sm mt-2 font-medium">
                    {instructions}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
