"use client";
import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import { useTheme } from "next-themes";

const SparklesCore = dynamic(() => import('./sparkles').then((mod) => mod.SparklesCore), {
  ssr: false,
  loading: () => null
});

export function ThemeSparkles() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Suspense fallback={null}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={1.8}
          particleDensity={100}
          className="w-full h-full"
          particleColor={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"}
        />
      </Suspense>
    </div>
  );
} 