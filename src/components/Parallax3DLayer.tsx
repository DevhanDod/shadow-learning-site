"use client";

import { useEffect, useRef, useState } from "react";

interface Parallax3DLayerProps {
  children: React.ReactNode;
  depth?: number;
  speed?: number;
  className?: string;
}

export default function Parallax3DLayer({
  children,
  depth = 0,
  speed = 0.1,
  className = "",
}: Parallax3DLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle rotation based on scroll for 3D feel
  const rotateX = scrollY * speed * 0.02;
  const translateY = scrollY * speed;
  const translateZ = depth;

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg)`,
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
