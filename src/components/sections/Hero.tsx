import { ArrowRight, Sparkles } from "lucide-react";
import type { HeroData } from "@/lib/content";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(159, 246, 24, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(159, 246, 24, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-white/90 text-sm font-medium">
              ESG & Udržitelnost
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
            {data.title.split(" ").map((word, index) => (
              <span key={index}>
                {word.toLowerCase() === "námi" ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {data.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={data.ctaLink}
              className="inline-flex items-center justify-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light hover:scale-105 transition-all shadow-lg shadow-primary/30"
            >
              {data.ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#sluzby"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Naše služby
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { value: "150+", label: "Klientů" },
              { value: "500+", label: "Projektů" },
              { value: "98%", label: "Spokojenost" },
              { value: "10+", label: "Let zkušeností" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}

