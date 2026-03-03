"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);
  const pathname = usePathname();

  // 3D parallax state
  const navRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [entryComplete, setEntryComplete] = useState(false);

  // Touch detection + entry animation trigger
  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    setIsTouchDevice(isTouch);
    requestAnimationFrame(() => setMounted(true));
  }, []);

  // Mark entry animation complete so mouse-tracking uses fast transitions
  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => setEntryComplete(true), 900);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  // Scroll handler — boolean + continuous depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setScrollDepth(Math.min(window.scrollY / 200, 1));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Mouse handlers (adapted from GlowCard, intensity 3 instead of 8)
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!navRef.current || isTouchDevice) return;
      const rect = navRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 3;
      const rotateX = ((centerY - y) / centerY) * 3;
      setTilt({ rotateX, rotateY });
    },
    [isTouchDevice]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setIsHovered(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  // Attach mouse listeners with passive option
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || isTouchDevice) return;

    nav.addEventListener("mousemove", handleMouseMove, { passive: true });
    nav.addEventListener("mouseenter", handleMouseEnter);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseenter", handleMouseEnter);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, isTouchDevice]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Build nav transform
  const navTransform = !mounted
    ? "translateY(-20px) rotateX(8deg) scale(0.95)"
    : isTouchDevice
      ? "none"
      : `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`;

  // Build transition string
  const navTransition = !entryComplete
    ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease-out, background 0.5s ease-out, border-color 0.5s ease-out"
    : `transform ${isHovered ? "0.1s" : "0.4s"} ease-out, box-shadow 0.5s ease-out, background 0.5s ease-out, border-color 0.5s ease-out`;

  // Dynamic shadow based on scroll depth
  const navShadow = `
    0 ${4 + scrollDepth * 12}px ${12 + scrollDepth * 24}px rgba(108, 60, 225, ${0.03 + scrollDepth * 0.05}),
    0 ${1 + scrollDepth * 4}px ${3 + scrollDepth * 8}px rgba(108, 60, 225, ${0.02 + scrollDepth * 0.04})
  `;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6 pt-4"
      style={{ perspective: "1200px" }}
    >
      <nav
        ref={navRef}
        className={`
          pointer-events-auto w-full max-w-5xl
          rounded-full border
          ${!isOpen ? "overflow-hidden" : ""}
          ${
            scrolled
              ? "bg-white/60 backdrop-blur-xl border-purple-200/40"
              : "bg-white/30 backdrop-blur-md border-white/50"
          }
        `}
        style={{
          transform: navTransform,
          transformStyle: "preserve-3d",
          transition: navTransition,
          willChange: "transform",
          boxShadow: navShadow,
          opacity: mounted ? 1 : 0,
        }}
      >
        {/* Cursor-following glow spotlight */}
        {!isTouchDevice && (
          <div
            className="absolute rounded-full navbar-glow transition-opacity duration-300"
            style={{
              width: 250,
              height: 250,
              left: mousePos.x - 125,
              top: mousePos.y - 125,
              opacity: isHovered ? 1 : 0,
              zIndex: 0,
            }}
          />
        )}

        <div className="relative z-10 px-3 sm:px-5 lg:px-7">
          <div className="flex justify-between h-14 items-center">
            {/* Logo — depth layer 1 (10px) */}
            <Link
              href="/"
              className="flex items-center shrink-0"
              style={{
                transform: isTouchDevice
                  ? "none"
                  : `translateZ(${isHovered ? 10 : 0}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Shadow Learning"
                width={150}
                height={34}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav — depth layer 2 (20px) */}
            <div
              className="hidden md:flex items-center gap-1"
              style={{
                transform: isTouchDevice
                  ? "none"
                  : `translateZ(${isHovered ? 20 : 0}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-1.5 rounded-full text-sm font-medium nav-link-3d
                    ${
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-purple-50/60"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}

              {/* Get Started — depth layer 3 (30px) */}
              <div
                className="ml-2 p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 via-primary to-emerald-400"
                style={{
                  transform: isTouchDevice
                    ? "none"
                    : `translateZ(${isHovered ? 30 : 0}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <Link
                  href="/contact"
                  className="block bg-primary text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-purple-50/60 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-4 pb-4 pt-1 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200
                  ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-purple-50/60"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-1 p-[1.5px] rounded-2xl bg-gradient-to-r from-purple-500 via-primary to-emerald-400">
              <Link
                href="/contact"
                className="block bg-primary text-white px-5 py-2.5 rounded-2xl text-sm font-medium text-center hover:bg-primary-dark transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
