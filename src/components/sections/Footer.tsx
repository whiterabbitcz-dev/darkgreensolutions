"use client";

import { Leaf, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import type { FooterData } from "@/lib/content";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-dark" />
              </div>
              <span className="text-xl font-bold text-white">
                Dark<span className="text-primary">Green</span>
              </span>
            </a>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Pomáháme firmám na cestě k udržitelnosti. Od ESG reportingu po
              strategické poradenství - jsme váš partner pro zelenou
              transformaci.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-primary hover:text-dark hover:border-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-3">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#tym"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Tým
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href="mailto:info@darkgreensolutions.cz"
                  className="hover:text-primary transition-colors"
                >
                  info@darkgreensolutions.cz
                </a>
              </li>
              <li>
                <a
                  href="tel:+420123456789"
                  className="hover:text-primary transition-colors"
                >
                  +420 123 456 789
                </a>
              </li>
              <li>Praha, Česká republika</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">{data.copyright}</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Ochrana soukromí
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Podmínky použití
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all"
              aria-label="Zpět nahoru"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

