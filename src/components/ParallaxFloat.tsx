"use client";

import { useEffect, useState } from "react";

interface ParallaxFloatProps {
  children: React.ReactNode;
  speed?: number;
  depth?: number;
  rotateOnScroll?: boolean;
  className?: string;
}

export default function ParallaxFloat({
  children,
  speed = 0.3,
  depth = 0,
  rotateOnScroll = false,
  className = "",
}: ParallaxFloatProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = offset * speed;
  const rotateX = rotateOnScroll ? offset * speed * 0.03 : 0;
  const rotateY = rotateOnScroll ? offset * speed * 0.02 : 0;

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(0, ${translateY}px, ${depth}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
