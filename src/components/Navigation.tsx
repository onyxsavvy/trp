"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Location", href: "#location" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const waMessage = encodeURIComponent("Hi TRP - The Rooftop Project! I'd like to reserve a table.\nName:\nDate & Time:\nNumber of Guests:");

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-cream-50/95 backdrop-blur-sm border-b border-cream-border/50 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative block w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image src="/images/logo.png" alt="TRP Logo [NEEDED FROM CLIENT]" fill className="object-cover scale-[1.15]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-wide uppercase transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-terracotta"
                    : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>


          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-ink-900 p-2 -mr-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-cream-50 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-2xl text-ink-900">TRP</span>
              <button
                className="text-ink-900 p-2 -mr-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-2xl font-display">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-ink-900 font-bold hover:text-terracotta transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <Link
                href={`https://wa.me/919607384000?text=${waMessage}`}
                target="_blank"
                className="bg-terracotta text-cream-50 py-4 px-6 rounded-lg text-center font-medium uppercase tracking-wide text-sm"
              >
                Reserve a Table
              </Link>
              <div className="flex justify-center gap-6 mt-4 text-ink-600">
                <a href="tel:+919607384000" className="p-2 hover:text-terracotta">
                  <Phone size={24} />
                </a>
                <a href="https://wa.me/919607384000" target="_blank" className="p-2 hover:text-terracotta">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Mobile Bottom Right Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
        <a
          href="tel:+919607384000"
          className="w-12 h-12 bg-cream-50 text-terracotta rounded-full flex items-center justify-center shadow-md border border-cream-border"
          aria-label="Call Now"
        >
          <Phone size={20} />
        </a>
        <a
          href={`https://wa.me/919607384000?text=${waMessage}`}
          target="_blank"
          className="w-14 h-14 bg-terracotta text-cream-50 rounded-full flex items-center justify-center shadow-lg"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </>
  );
}
