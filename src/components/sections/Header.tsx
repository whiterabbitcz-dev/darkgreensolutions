"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

interface NavLink {
  text: string;
  url: string;
}

interface HeaderProps {
  links: NavLink[];
}

export default function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6 text-dark" />
            </div>
            <span className="text-xl font-bold text-white">
              Dark<span className="text-primary">Green</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white/80 hover:text-primary transition-colors font-medium"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-primary text-dark px-6 py-2.5 rounded-full font-semibold hover:bg-primary-light transition-colors"
            >
              Kontaktujte nás
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-dark border-t border-white/10">
            <nav className="flex flex-col p-6 gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-dark px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-light transition-colors mt-2"
              >
                Kontaktujte nás
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

