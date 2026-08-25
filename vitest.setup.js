import "@testing-library/jest-dom/vitest";

// jsdom does not implement matchMedia; framer-motion's useReducedMotion() calls it.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom does not implement IntersectionObserver/ResizeObserver, which
// framer-motion's `whileInView` viewport tracking relies on.
class ObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = ObserverStub;
}
if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = ObserverStub;
}
