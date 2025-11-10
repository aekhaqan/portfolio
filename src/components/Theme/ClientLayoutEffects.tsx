"use client";

import { useEffect } from "react";
import initGlobalScrollAnimation from "./ScrollAnimation";

export default function ClientLayoutEffects({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cleanup = initGlobalScrollAnimation({
      selector: "section",
      threshold: 0.05,
      delayStep: 40,
      baseDelay: 0,
    });
    return cleanup;
  }, []);

  return <>{children}</>;
}
