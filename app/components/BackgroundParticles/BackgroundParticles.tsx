"use client";

import { useMemo, useState, useEffect } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function BackgroundParticles() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark';
    setIsDarkMode(currentTheme === 'dark');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const particleColor = isDarkMode ? "#ffffff" : "#000000";
  const particleOpacity = isDarkMode ? 0.15 : 0.4;
  const linkOpacity = isDarkMode ? 0.1 : 0.3;

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 125,
          enable: true,
          opacity: linkOpacity,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: particleOpacity,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.5 },
        },
      },
      detectRetina: true,
    }),
    [particleColor, particleOpacity, linkOpacity],
  );

  return (
    <ParticlesProvider init={init}>
      <Particles
        key={particleColor}
        id="tsparticles"
        options={options}
        className="fixed inset-0 -z-10 pointer-events-none"
      />
    </ParticlesProvider>
  );
}
