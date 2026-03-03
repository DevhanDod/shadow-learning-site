"use client";

import { useRef, useState, useCallback } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(108, 60, 225, 0.15)",
  tiltIntensity = 8,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      // Calculate tilt: center of card = 0, edges = +/- tiltIntensity
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * tiltIntensity;
      const rotateX = ((centerY - y) / centerY) * tiltIntensity;

      setTilt({ rotateX, rotateY });
    },
    [tiltIntensity]
  );

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        className={`relative overflow-hidden rounded-xl transition-all duration-300 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.4s ease-out",
        }}
      >
        {/* Glow effect that follows cursor */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300 rounded-full blur-[60px]"
          style={{
            width: 200,
            height: 200,
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            background: glowColor,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* Subtle border glow */}
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 0 1px ${glowColor}`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* 3D depth: inner content pops forward */}
        <div
          className="relative z-10"
          style={{
            transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
            transition: "transform 0.3s ease-out",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
