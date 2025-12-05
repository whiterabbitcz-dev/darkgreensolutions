import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";
import type { AboutData } from "@/lib/content";

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  const features = [
    {
      icon: TrendingUp,
      title: "Data-driven přístup",
      description: "Rozhodnutí založená na datech a analýze",
    },
    {
      icon: Users,
      title: "Zkušený tým",
      description: "Odborníci s mnohaletými zkušenostmi",
    },
    {
      icon: Award,
      title: "Certifikované metody",
      description: "Využíváme uznávané standardy a metodologie",
    },
  ];

  return (
    <section id="o-nas" className="bg-light-gray py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              O nás
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-6">
              {data.title}
            </h2>
            <p className="text-dark-gray text-lg leading-relaxed mb-8">
              {data.text}
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-dark-gray text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                Domluvit konzultaci
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-dark shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 border-2 border-primary/30 rounded-2xl" />
              </div>
              <div className="absolute top-8 right-8 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-dark" />
              </div>
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-white/80 text-sm">Spokojenost klientů</div>
              </div>
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(159, 246, 24, 0.5) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(159, 246, 24, 0.5) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-dark px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-bold text-2xl">10+</div>
              <div className="text-sm font-medium">Let zkušeností</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

