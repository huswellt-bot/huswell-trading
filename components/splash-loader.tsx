"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MINIMUM_DISPLAY_MS = 3000;
const EXIT_DURATION_MS = 350;

export default function SplashLoader() {
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let pageLoaded = document.readyState === "complete";
    let minimumDisplayComplete = false;
    let exitTimer: number | undefined;

    const dismiss = () => {
      if (!pageLoaded || !minimumDisplayComplete) return;

      setLeaving(true);
      exitTimer = window.setTimeout(() => setHidden(true), EXIT_DURATION_MS);
    };

    const onLoad = () => {
      pageLoaded = true;
      dismiss();
    };

    const minimumDisplayTimer = window.setTimeout(() => {
      minimumDisplayComplete = true;
      dismiss();
    }, MINIMUM_DISPLAY_MS);

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(minimumDisplayTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-surface px-5 transition-opacity duration-300 motion-reduce:transition-none ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading Huswell Trading"
    >
      <div className="flex flex-col items-center">
        <Image
          src="/logo/huswell-logo.png"
          alt="Huswell Trading"
          width={1536}
          height={712}
          className="h-auto w-56 sm:w-72 lg:w-[30rem] 2xl:w-[34rem]"
          priority
        />
        <div className="mt-7 h-px w-12 overflow-hidden bg-line">
          <span className="block h-full w-full origin-left bg-accent-hover animate-[splash-line_1.1s_ease-in-out_infinite] motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  );
}
