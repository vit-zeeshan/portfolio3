"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { useTheme } from "next-themes";

export function ThemeSparkles() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.8}
        maxSize={1.8}
        particleDensity={200}
        className="w-full h-full"
        particleColor={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"}
      />
    </div>
  );
} 