import {
  Search,
  Target,
  Rocket,
  FileText,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { WorkflowData, WorkflowStep } from "@/lib/content";

interface WorkflowProps {
  data: WorkflowData;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  search: Search,
  target: Target,
  rocket: Rocket,
  "file-text": FileText,
};

function WorkflowStepCard({
  step,
  index,
  total,
}: {
  step: WorkflowStep;
  index: number;
  total: number;
}) {
  const IconComponent = iconMap[step.icon] || Search;
  const isLast = index === total - 1;

  return (
    <div className="relative flex flex-col items-center">
      {/* Connection line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-primary to-primary/30" />
      )}

      {/* Step number */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-dark rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
        {index + 1}
      </div>

      {/* Card */}
      <div className="bg-dark-light border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 group">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <IconComponent className="w-10 h-10 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

        {/* Description */}
        <p className="text-white/60 leading-relaxed">{step.description}</p>
      </div>

      {/* Arrow for mobile */}
      {!isLast && (
        <div className="lg:hidden my-4">
          <ArrowRight className="w-6 h-6 text-primary rotate-90" />
        </div>
      )}
    </div>
  );
}

export default function Workflow({ data }: WorkflowProps) {
  return (
    <section className="bg-dark py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Proces
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            {data.title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {data.steps.map((step, index) => (
            <WorkflowStepCard
              key={index}
              step={step}
              index={index}
              total={data.steps.length}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light hover:scale-105 transition-all shadow-lg shadow-primary/30"
          >
            Začít spolupráci
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

