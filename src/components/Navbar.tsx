"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "En Acción", href: "/en-accion" },
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        setScrolled(hero.getBoundingClientRect().bottom < window.innerHeight);
      } else {
        setScrolled(window.scrollY > 60);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only intercept anchor links for smooth scroll when already on "/"
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    const isAnchor = href.startsWith("#") || href.startsWith("/#");
    if (!isAnchor || pathname !== "/") return;
    e.preventDefault();
    const id = href.replace(/^\/?#/, "");
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fdf8ee] backdrop-blur-2xl border-b border-black/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo — mismo peso que el H1 del hero */}
        <Link
          href="/"
          className="font-black tracking-[-0.04em] group text-foreground"
          style={{ fontSize: "1.25rem" }}
        >
          Totem
          <span className="gradient-text transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(246,207,91,0.5)]">
            Robot
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="hover-underline text-sm font-medium transition-colors duration-300 text-foreground/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={(e) => handleClick(e, "/#contacto")}
            className="px-5 py-2 bg-primary text-dark-bg text-sm font-semibold rounded-full hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(246,207,91,0.4)] transition-all duration-300"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#fdfcfa]/95 backdrop-blur-2xl border-t border-black/[0.05] px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-base text-foreground/60 hover:text-foreground hover:translate-x-2 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={(e) => handleClick(e, "/#contacto")}
            className="mt-2 px-5 py-2.5 bg-primary text-dark-bg text-sm font-semibold rounded-full text-center hover:bg-primary-hover transition-all duration-300"
          >
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  );
}
