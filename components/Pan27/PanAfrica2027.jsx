"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Award, Star } from "lucide-react";
import PanAfricaNavbar from "./PanAfricaNavbar";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import ChatbotModal from "../Chat/ChatbotModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { BsWhatsapp } from "react-icons/bs";
import { Dock, DockIcon } from "@/components/ui/dock";
import GuessGame from "@/components/GuessGame";
import { GrGamepad } from "react-icons/gr";
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from "@/components/Home/animations";

const calculateTimeLeft = () => {
  const targetDate = new Date("2027-10-22T00:00:00").getTime();
  const difference = targetDate - Date.now();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference % 86400000) / 3600000),
    minutes: Math.floor((difference % 3600000) / 60000),
    seconds: Math.floor((difference % 60000) / 1000),
  };
};

const generateBeers = () => {
  return Array.from({ length: 14 }).map((_, i) => {
    const left = Math.floor(8 + Math.random() * 84);
    const size = Math.random();
    const clsSize = size < 0.35 ? "sm" : size > 0.75 ? "lg" : "";
    const delay = (Math.random() * 0.6).toFixed(2);
    const duration = (3 + Math.random() * 1.2).toFixed(2);
    return {
      key: `beer-${i}-${Math.random().toString(36).slice(2)}`,
      left: `${left}%`,
      cls: `beer ${clsSize}`.trim(),
      style: { animationDelay: `${delay}s`, animationDuration: `${duration}s` },
    };
  });
};

const dockItems = [
  { src: "/sponsor/amstel.jpg", name: "Amstel Lager", href: "https://www.facebook.com/share/1LcvFmZSD7/?mibextid=wwXIfr", target: "_blank", rel: "noopener noreferrer" },
  { src: "/sponsor/np.jpg", name: "National Petroleum", href: "https://npgroup-ltd.com/sierraleone/", target: "_blank", rel: "noopener noreferrer" },
  { src: "/sponsor/orange.jpg", name: "Orange Money", href: "https://www.orange.sl/en/orange-money.html", target: "_blank", rel: "noopener noreferrer" },
  { src: "/sponsor/tourism.jpg", name: "Ministry of Tourism and Cultural Affairs", href: "https://tourism.gov.sl/", target: "_blank", rel: "noopener noreferrer" },
  { src: "/sponsor/uba.jpg", name: "United Bank of Africa", href: "https://www.ubagroup.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/sponsor/rokel.png", name: "Rokel Commercial Bank", href: "https://www.rokelbank.sl/", target: "_blank", rel: "noopener noreferrer" },
  { src: "/sponsor/monime.svg", name: "Monime", href: "https://monime.io/", target: "_blank", rel: "noopener noreferrer" },
];

const locMembers = [
  { name: "Ex GM Dr. Kondo Belleh", position: "Chairman", image: "/pan/gm.jpg", highlight: true },
  { name: "GM Fuckimbo", position: "Vice Chairman", image: "/misma/gm26.png" },
  { name: "Pucci Engineer", position: "Head of Communications", image: "/loc/pe.jpg" },
  { name: "Yap Yap Network", position: "International Coordinator / Protocol", image: "/loc/yap.jpeg" },
  { name: "I Don't Want To", position: "Head of Finance", image: "/loc/idwt.jpg" },
  { name: "RA Neneh Korraw", position: "Head of Logistics", image: "/misma/mom.png" },
  { name: "Presidential Virus", position: "Head of Transport", image: "/misma/discipline.png" },
  { name: "Little Fox", position: "Head of Sponsorship 1", image: "/loc/littlefox.jpg" },
  { name: "Put It On The Hole", position: "Head of Sponsorship 2", image: "/loc/holee.png" },
  { name: "Fuckinabae", position: "Head of Welfare", image: "/loc/fuck.jpg" },
  { name: "Toto Specialist", position: "Security Coordinator", image: "/loc/toto.jpg" },
  { name: "Used Condom", position: "Head of Medic", image: "/loc/usedcomdon.jpg" },
  { name: "Sniper", position: "Hash Cash", image: "/loc/snipe.jpg" },
  { name: "RA Sorry My Lord", position: "Liaison Officer", image: "/loc/lord.jpg" },
];

const advisoryMembers = [
  { name: "Muff Mask", location: "Accra H3", image: "/loc/muff.jpg" },
  { name: "Aint Ze Bush", location: "Malawi H3", image: "/loc/ant.jpg" },
  { name: "Short Cutter", location: "Warri H3", image: "/loc/ssc.jpg" },
  { name: "Artur-De-Lion Killer", location: "Kenya H3", image: "/loc/authr.jpg" },
  { name: "DGM Honey Tumba", location: "Sierra H4", image: "/loc/tumba.jpeg" },
  { name: "GM Slippery Comer", location: "Lagos H3", image: "/loc/slip.jpg" },
  { name: "Sir KOP", location: "Lagos H3", image: "/tourism/t20.jpg" },
  { name: "Sir DLS", location: "Apapa H3", image: "/loc/dls.jpg" },
  { name: "Mama Sarama", location: "Bamako H3", image: "/pan/mama.jpg" },
  { name: "DGM Mother Theresa", location: "Ebonyi H3", image: "/loc/md.jpg" },
  { name: "Hazukashii", location: "Vagabond H3", image: "/loc/vaga.jpg" },
];

const GmLetter = () => (
  <>
    <p>
      Distinguished Hashers, esteemed partners, fellow citizens of Sierra Leone, and friends across the Pan-African Hash community,
    </p>
    <p>
      It is with immense pride and excitement that I address you today. Our successful bid to host the Pan African Hash (PAH) 2027 in Freetown, Sierra Leone, secured with the invaluable endorsement of Sierra Leone&apos;s Ministry of Tourism and Cultural Affairs, was more than a win for Sierra H4; it was a historic triumph for our entire nation. Sierra Leone is ready to welcome the world.
    </p>
    <p><b>Forging Partnerships for a Progressive Sierra Leone</b></p>
    <p>
      Sierra Hash House Harriers and Harriettes (Sierra H4) is more than a running club; we are a catalyst for eco-tourism and community development. Our vision, strongly supported by the Government of Sierra Leone through a strategic Memorandum of Understanding (MOU) with the Ministry of Tourism, is to leverage the global Hash movement to showcase the unspoiled beauty and vast potential of our homeland.
    </p>
    <p>
      We call on forward-thinking organizations, corporations, and international investors to join us by signing strategic MOUs. These partnerships are the foundation of our success, creating a trusted, government-backed gateway for the global community of hikers, investors, and adventure tourists to explore Sierra Leone with confidence. By partnering with Sierra H4, you are investing directly in a future where sustainable tourism drives economic growth, community empowerment, and international goodwill.
    </p>
    <p><b>Our Core Mission: Camaraderie and Compassion</b></p>
    <p>
      As a non-profit, our mandate extends beyond the trail. We are committed to bridging generations, fostering an environment of camaraderie, friendship, and mutual respect. We believe in the power of unity and collective well-being.
    </p>
    <p>
      This commitment is embodied in our dedicated social responsibility initiatives. Sierra H4 is a proud collaborator with the Thinking Pink Breast Cancer Foundation. Through our annual Red Dress Run and fundraising events during Breast Cancer Awareness Month, we channel proceeds directly into their vital work &mdash; running not just for fitness, but for life-saving awareness and support.
    </p>
    <p><b>Join the Fastest-Growing Movement in West Africa</b></p>
    <p>
      As the youngest and fastest-growing kennel in West Africa, our energy is a testament to our members&apos; enthusiasm and the vibrancy of our community. We celebrate a powerful spirit of unity with the wider hashing family, including our strong bond with our brother kennel, the Freetown Hash House Harriers (FH3).
    </p>
    <p>
      To every citizen of Sierra Leone, I extend a heartfelt invitation: Join Sierra H4! Whether you seek fitness, fellowship, or a meaningful way to contribute to our nation&apos;s story, the Hash trail awaits. We need your energy, passion, and pride to make PAH 2027 the most memorable event in Pan-African Hash history.
    </p>
    <p className="pt-2"><b>On-On!</b></p>
    <p><b>Ex GM Dr. Kondo Belleh</b><br />Sierra Hash House Harriers and Harriettes (SH4)</p>
  </>
);

const CountdownBlock = ({ value, label, highlight }) => (
  <div className={`rounded-xl px-6 py-4 min-w-[100px] text-center ${highlight ? "bg-sh4-gold text-sh4-ink" : "bg-sh4-cream text-sh4-ink"}`}>
    <div className="font-display text-4xl leading-none">{value}</div>
    <div className={`text-xs tracking-widest uppercase font-bold mt-1.5 ${highlight ? "text-sh4-ink/80" : "text-sh4-amber"}`}>{label}</div>
  </div>
);

export default function PanAfricaPage() {
  const [showGame, setShowGame] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const welcomeRef = useRef(null);
  const [balloonBurstId, setBalloonBurstId] = useState(0);
  const [beers, setBeers] = useState([]);
  const [regoList, setRegoList] = useState([]);

  const fetchRegoList = async () => {
    try {
      const res = await fetch("/api/regolist", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to load");
      setRegoList(data || []);
    } catch (err) {
      console.error("Failed to fetch regoList:", err);
      setRegoList([]);
    }
  };

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    fetchRegoList();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!welcomeRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBeers(generateBeers());
            setBalloonBurstId((id) => id + 1);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(welcomeRef.current);
    return () => observer.disconnect();
  }, []);

  const p = (n) => String(n).padStart(2, "0");
  const fullyPaidCount = regoList.filter((item) => item.payment === "Fully Paid").length;

  return (
    <>
      {!showGame && <PanAfricaNavbar />}

      {/* HERO + COUNTDOWN */}
      <header className="relative bg-sh4-ink text-sh4-cream overflow-hidden pt-28">
        <Image src="/freetown.jpg" alt="Freetown coastline" fill priority className="absolute inset-0 object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-sh4-ink/50 to-sh4-ink/90" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.12, 0.1)}
          className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-16 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3.5">
            <Image src="/pahlogo.jpg" alt="Pan Africa Hash 2027 logo" width={64} height={64} className="rounded-full object-cover border-2 border-sh4-gold" />
            <Image src="/flag.png" alt="Sierra Leone flag" width={36} height={36} className="rounded-full object-cover" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-5 font-display text-[13vw] sm:text-6xl md:text-8xl leading-[0.98] uppercase">
            Pan Africa<br />Hash 2027
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold text-sh4-gold tracking-widest uppercase">
            Freetown, Sierra Leone &middot; 22 to 24 October 2027
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center gap-3.5 mt-9 flex-wrap">
            <CountdownBlock value={mounted ? timeLeft.days : "···"} label="Days" />
            <CountdownBlock value={mounted ? p(timeLeft.hours) : "··"} label="Hours" />
            <CountdownBlock value={mounted ? p(timeLeft.minutes) : "··"} label="Minutes" />
            <CountdownBlock value={mounted ? p(timeLeft.seconds) : "··"} label="Seconds" highlight />
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center gap-3.5 mt-9 flex-wrap">
            <a
              href="https://pay.monime.io/069165304?amount=20600&checkout=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Pay rego via Monime
            </a>
            <Link
              href="/whoiscoming"
              className="border-2 border-sh4-cream/60 hover:border-sh4-gold hover:text-sh4-gold text-sh4-cream font-bold text-[15px] px-7 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Who is coming
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* GM WELCOME */}
      <section id="welcome" ref={welcomeRef} className="relative bg-sh4-cream px-6 md:px-10 py-20 md:py-24 overflow-hidden">
        {balloonBurstId > 0 && (
          <div key={balloonBurstId} className="beers">
            {beers.map((b) => (
              <div key={b.key} className={b.cls} style={{ left: b.left, ...b.style }} />
            ))}
          </div>
        )}
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-14 items-center relative">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <Image
              src="/loc/GM.jpg"
              alt="Sierra H4 Grand Master"
              width={480}
              height={600}
              className="w-full rounded-xl object-cover aspect-[4/5]"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
            <p className="text-sh4-amber font-bold text-sm tracking-[0.18em] uppercase mb-2">A message from the Sierra H4 Grand Master</p>
            <h2 className="font-display text-4xl leading-tight uppercase text-sh4-ink">On on to PAH 2027</h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-sh4-body">
              <p>
                Distinguished hashers, esteemed partners, fellow citizens of Sierra Leone. Our successful bid to host the Pan Africa Hash 2027, secured with the invaluable endorsement of Sierra Leone&apos;s Ministry of Tourism and Cultural Affairs, was more than a win for Sierra H4. It was a historic triumph for our entire nation. Sierra Leone is ready to welcome the world.
              </p>
              <p>
                Sierra H4 is more than a running club. We are a catalyst for eco-tourism and community development, backed by a strategic MOU with the Ministry of Tourism to showcase the unspoiled beauty and vast potential of our homeland.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsMessageModalOpen(true)}
              className="mt-6 bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Read the full letter
            </button>
          </motion.div>
        </div>
      </section>

      {/* REGISTRATION WIDGETS */}
      <section className="bg-white border-y-2 border-sh4-ink px-6 md:px-10 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.08)}
          className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <motion.div variants={fadeUp} className="bg-sh4-cream border border-sh4-line rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg text-sh4-ink">1. Pay your rego</h3>
                <p className="text-sh4-body text-sm mt-1">Registration Fee: $200.00<br />Processing Fee: $6.00</p>
              </div>
              <Award className="text-sh4-amber shrink-0" size={26} />
            </div>
            <div className="mt-4">
              <div className="text-xs uppercase tracking-wide text-sh4-muted font-bold">Rego hashers</div>
              <div className="font-display text-3xl text-sh4-ink">{regoList.length}</div>
            </div>
            <a
              href="https://pay.monime.io/069165304?amount=20600&checkout=true"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block text-center bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink text-sm font-bold rounded-lg py-2.5 transition-colors"
            >
              Pay rego
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-sh4-cream border border-sh4-line rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg text-sh4-ink">2. Fill the form</h3>
                <p className="text-sh4-body text-sm mt-1">Provide details and upload your payment receipt.</p>
              </div>
              <Users className="text-sh4-amber shrink-0" size={26} />
            </div>
            <div className="mt-4 text-sm text-sh4-body">Make sure your name matches your receipt.</div>
            <a
              href="https://prettyform.addxt.com/a/form/vf/1FAIpQLSe7T8tpAQAiZAk6AtQOp62Fqj5VzHSUkOMf1X5O18-RjNRRew"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block text-center border-2 border-sh4-ink hover:bg-sh4-ink hover:text-sh4-cream text-sh4-ink text-sm font-bold rounded-lg py-2.5 transition-colors"
            >
              Fill registration form
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-sh4-cream border border-sh4-line rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg text-sh4-ink">Hotels &amp; bookings</h3>
                <p className="text-sh4-body text-sm mt-1">Find stay options near the main venue.</p>
              </div>
              <Star className="text-sh4-amber shrink-0" size={26} />
            </div>
            <div className="mt-4 text-sm text-sh4-body">Contact: +232 80 668 590</div>
            <Link
              href="/pan-africa-2027/hotels"
              className="mt-5 block text-center border-2 border-sh4-ink hover:bg-sh4-ink hover:text-sh4-cream text-sh4-ink text-sm font-bold rounded-lg py-2.5 transition-colors"
            >
              Book hotel
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-sh4-cream border border-sh4-line rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg text-sh4-ink">Approval &amp; attendees</h3>
                <p className="text-sh4-body text-sm mt-1">Wait for confirmation, then view who&apos;s coming.</p>
              </div>
              <Clock className="text-sh4-amber shrink-0" size={26} />
            </div>
            <div className="mt-4">
              <div className="text-xs uppercase tracking-wide text-sh4-muted font-bold">Paid up hashers</div>
              <div className="font-display text-3xl text-sh4-ink">{fullyPaidCount}</div>
            </div>
            <Link
              href="/whoiscoming"
              className="mt-5 block text-center bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink text-sm font-bold rounded-lg py-2.5 transition-colors"
            >
              Who is coming
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* THE WEEKEND */}
      <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger(0.1)} className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl uppercase text-sh4-ink mb-11">The weekend</motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-white border border-sh4-line rounded-xl p-7">
              <div className="font-display text-4xl text-sh4-gold">FRI</div>
              <div className="font-bold text-lg mt-2.5 text-sh4-ink">Red Dress Run</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-sh4-body">The classic charity run. Everyone in red, everyone in a dress, no exceptions.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white border-2 border-sh4-gold rounded-xl p-7">
              <div className="font-display text-4xl text-sh4-gold">SAT</div>
              <div className="font-bold text-lg mt-2.5 text-sh4-ink">Main Event</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-sh4-body">The big trail: beaches, hills, and the biggest circle on the continent, followed by the gala night.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white border border-sh4-line rounded-xl p-7">
              <div className="font-display text-4xl text-sh4-gold">SUN</div>
              <div className="font-bold text-lg mt-2.5 text-sh4-ink">Recovery Run</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-sh4-body">A gentle hangover trail and farewell circle. Down downs optional. Sort of.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* VISA / PROTOCOL */}
      <section id="visa" className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <p className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase mb-2">Getting here</p>
            <h2 className="font-display text-4xl uppercase">Visa / Protocol</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-sh4-cream/85 text-pretty">
              Hashers travelling to Pan Africa Hash 2027 in Sierra Leone may need to apply for a visa. Use the official portal below to begin your application, and reach out to our protocol team for anything else.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              <a
                href="https://www.visitsierraleone.org/online-visa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-[14.5px] px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Apply for visa online
              </a>
              <Link
                href="/contact"
                className="border-2 border-sh4-cream/60 hover:border-sh4-gold hover:text-sh4-gold text-sh4-cream font-bold text-[14.5px] px-6 py-2.5 rounded-xl transition-colors"
              >
                Contact protocol team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="bg-sh4-cream/[0.06] border border-sh4-cream/15 rounded-xl p-8"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/loc/yapyap.jpg"
                alt="Yap Yap Network, Head of Protocol"
                width={72}
                height={72}
                className="rounded-full object-cover border-2 border-sh4-gold"
              />
              <div>
                <div className="font-bold text-lg">Yap Yap Network</div>
                <div className="text-[13.5px] text-sh4-cream/70">International Coordinator &amp; Head of Protocol</div>
              </div>
            </div>
            <p className="mt-[18px] text-[14.5px] leading-relaxed text-sh4-cream/80">
              For all visa and protocol related inquiries, message the protocol desk and we&apos;ll walk you through entry requirements, airport pickup, and hotel transfer arrangements.
            </p>
            <div className="mt-4 space-y-2 text-[14.5px]">
              <a href="mailto:contactyapyapnetwork@gmail.com" className="block hover:text-sh4-gold transition-colors break-all">contactyapyapnetwork@gmail.com</a>
              <a href="tel:+23273928927" className="block hover:text-sh4-gold transition-colors">+232 73 928 927</a>
              <a
                href="https://wa.me/23273928927"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sh4-gold transition-colors"
              >
                <BsWhatsapp className="text-lg" /> WhatsApp the protocol desk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsor" className="bg-sh4-gold border-b-2 border-sh4-ink px-6 md:px-10 py-16 md:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Our sponsors</h2>
          <p className="mt-2.5 text-[15.5px] text-sh4-ink/75">Backing the biggest hash Africa has ever seen.</p>
          <div className="flex justify-center mt-8">
            <Dock iconSize={72} className="gap-3 lg:gap-5">
              {dockItems.map((item) => (
                <DockIcon key={item.name} src={item.src} name={item.name} href={item.href} target={item.target} rel={item.rel} />
              ))}
            </Dock>
          </div>
        </motion.div>
      </section>

      {/* LOC & ADVISORY COUNCIL */}
      <section id="loc" className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <p className="text-sh4-amber font-bold text-sm tracking-[0.18em] uppercase mb-2">The people making it happen</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Local Organizing Committee</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger(0.03)}
            className="grid gap-4 mt-9"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
          >
            {locMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className={`bg-white rounded-xl px-3.5 py-[22px] text-center transition-all duration-300 hover:-translate-y-1 ${member.highlight ? "border-2 border-sh4-gold" : "border border-sh4-line hover:border-sh4-gold"}`}
              >
                <Image src={member.image} alt={member.name} width={84} height={84} className="rounded-full object-cover bg-sh4-cream mx-auto" />
                <div className="text-[11px] tracking-widest uppercase text-sh4-amber font-bold mt-3">{member.position}</div>
                <div className="font-bold text-[15px] mt-0.5 text-sh4-ink">{member.name}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h3 initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="font-display text-2xl md:text-3xl uppercase text-sh4-ink mt-16 mb-9">
            Advisory Council
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger(0.03)}
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
          >
            {advisoryMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="bg-white border border-sh4-line hover:border-sh4-gold rounded-xl px-3.5 py-[22px] text-center transition-all duration-300 hover:-translate-y-1"
              >
                <Image src={member.image} alt={member.name} width={84} height={84} className="rounded-full object-cover bg-sh4-cream mx-auto" />
                <div className="font-bold text-[15px] mt-3 text-sh4-ink">{member.name}</div>
                <div className="text-[12.5px] text-sh4-muted mt-0.5">{member.location}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOURISM */}
      <section id="tourism" className="bg-white border-t-2 border-sh4-ink px-6 md:px-10 py-20 md:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="max-w-6xl mx-auto text-center mb-11">
          <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Make it a holiday</h2>
          <p className="mt-2.5 text-[15.5px] text-sh4-body max-w-lg mx-auto">Beaches, rainforest, and the friendliest city in West Africa. Come early, stay late.</p>
          <a
            href="https://tourismsierraleone.com/where-to-go/freetown"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Take a tour
          </a>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            modules={[Pagination, Navigation, Autoplay]}
            className="tourism-swiper !pb-2"
          >
            {Array.from({ length: 31 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image src={`/tourism/t${i + 1}.jpg`} fill alt={`Sierra Leone tourism, image ${i + 1}`} className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* HASH GAME */}
      <section id="game" className="bg-sh4-cream border-t-2 border-sh4-ink px-6 md:px-10 py-20 md:py-24 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="max-w-xl mx-auto">
          <p className="text-sh4-amber font-bold text-sm tracking-[0.18em] uppercase mb-2">The ultimate hash game</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Are you on?</h2>
          <p className="mt-3 text-sh4-body italic">How well do you know the hash? Press play to find out.</p>
          <button
            onClick={() => setShowGame(true)}
            className="mt-6 inline-flex items-center gap-2 bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Press play <GrGamepad className="text-xl" />
          </button>
        </motion.div>

        {showGame && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-sh4-ink/80 backdrop-blur-md px-4">
            <div className="relative w-full md:w-[500px] max-h-[85vh] overflow-y-auto bg-sh4-ink text-sh4-cream rounded-2xl p-4 shadow-xl">
              <button
                onClick={() => setShowGame(false)}
                className="absolute top-3 right-4 text-sh4-cream/70 hover:text-sh4-cream text-xl z-10"
                aria-label="Close game"
              >
                &#10005;
              </button>
              <GuessGame onClose={() => setShowGame(false)} />
            </div>
          </div>
        )}
      </section>

      <Footer />
      <ChatbotModal />

      {/* Full-letter modal */}
      {isMessageModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-sh4-ink/75 backdrop-blur-sm"
          onClick={() => setIsMessageModalOpen(false)}
        >
          <div
            className="relative bg-sh4-cream rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMessageModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-sh4-ink/10 hover:bg-sh4-ink/20 text-sh4-ink transition-colors"
              aria-label="Close"
            >
              &#10005;
            </button>
            <div className="bg-sh4-gold px-6 py-5 border-b-2 border-sh4-ink">
              <h2 className="font-display text-2xl uppercase text-sh4-ink text-center pr-8">A message from the Sierra H4 Grand Master</h2>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 text-sh4-body text-[15px] leading-relaxed">
              <GmLetter />
            </div>
            <div className="bg-white px-6 py-4 border-t border-sh4-line flex justify-end">
              <button
                onClick={() => setIsMessageModalOpen(false)}
                className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
