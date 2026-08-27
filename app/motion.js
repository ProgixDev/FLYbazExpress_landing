"use client";

import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    // `motion-ready` is set by the inline script in the document head, so it is
    // absent when JS is off or the visitor asked for reduced motion. In both
    // cases everything stays visible and we skip the observers entirely.
    const animate = document.documentElement.classList.contains("motion-ready");

    document.querySelectorAll("video[data-autoplay]").forEach((video) => {
      if (!animate) {
        // A looping background video is motion too: hold on the poster and let
        // the visitor start it themselves.
        video.autoplay = false;
        video.pause();
        video.controls = true;
        return;
      }
      // Safari/iOS only honour autoplay once `muted` is set as a property,
      // which React does not always reflect from the JSX attribute.
      video.muted = true;
      const played = video.play();
      if (played) played.catch(() => {});
    });

    if (!animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    const nav = document.querySelector(".nav");
    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
