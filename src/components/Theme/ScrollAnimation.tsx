"use client";

export default function initGlobalScrollAnimation({
  selector = "section, div",
  threshold = 0.15,
  delayStep = 120, // time between each element’s reveal
  baseDelay = 0, // initial delay before first element
} = {}) {
  // Helper to apply base transition style
  const initAnimation = (el: Element | HTMLElement) => {
    if (!(el instanceof HTMLElement)) return;
    el.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-1000",
      "ease-[cubic-bezier(0.19,1,0.22,1)]"
    );
  };

  const allTargets = document.querySelectorAll<HTMLElement>(selector);
  allTargets.forEach(initAnimation);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          setTimeout(() => {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-8");
          }, baseDelay + idx * delayStep); // staggered reveal
          observer.unobserve(el);
        }
      });
    },
    { threshold }
  );

  allTargets.forEach((el) => observer.observe(el));

  // --- Watch for dynamically added elements (e.g. on route change) ---
  const mutation = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          if (node.matches(selector)) {
            initAnimation(node);
            observer.observe(node);
          }

          node.querySelectorAll(selector).forEach((child) => {
            const el = child as HTMLElement;
            initAnimation(el);
            observer.observe(el);
          });
        }
      });
    });
  });

  mutation.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutation.disconnect();
  };
}
