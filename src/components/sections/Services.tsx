import {
  BarChart3,
  Leaf,
  Compass,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { ServicesData, ServiceItem } from "@/lib/content";

interface ServicesProps {
  data: ServicesData;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  "bar-chart": BarChart3,
  leaf: Leaf,
  compass: Compass,
  "shield-check": ShieldCheck,
};

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const IconComponent = iconMap[item.icon] || Leaf;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
        isEven
          ? "bg-gradient-to-br from-secondary to-secondary-dark"
          : "bg-dark-light border border-white/10"
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div
          style={{
            backgroundImage: `radial-gradient(circle, ${
              isEven ? "#9FF618" : "#3F02B0"
            } 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Icon */}
      <div
        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
          isEven ? "bg-primary/20" : "bg-primary/10"
        }`}
      >
        <IconComponent
          className={`w-8 h-8 ${isEven ? "text-primary" : "text-primary"}`}
        />
      </div>

      {/* Content */}
      <h3 className="relative text-2xl font-bold text-white mb-4">
        {item.title}
      </h3>
      <p className="relative text-white/70 leading-relaxed mb-6">{item.text}</p>

      {/* Link */}
      <a
        href="#kontakt"
        className={`relative inline-flex items-center gap-2 font-semibold transition-colors ${
          isEven
            ? "text-primary hover:text-primary-light"
            : "text-white/80 hover:text-primary"
        }`}
      >
        Více informací
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>

      {/* Decorative corner */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${
          isEven ? "bg-primary/10" : "bg-secondary/20"
        }`}
      />
    </div>
  );
}

export default function Services({ data }: ServicesProps) {
  return (
    <section id="sluzby" className="bg-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Služby
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mt-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {data.title}
            </h2>
            <p className="text-white/60 text-lg max-w-md">{data.subtitle}</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {data.items.map((item, index) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 lg:p-12 text-center border border-white/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Potřebujete individuální řešení?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Každá firma je jiná. Kontaktujte nás a společně najdeme řešení
            přesně pro vaše potřeby.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-colors"
          >
            Nezávazná konzultace
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

