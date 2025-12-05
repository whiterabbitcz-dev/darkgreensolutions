import { User, Linkedin, Mail } from "lucide-react";
import type { TeamData, TeamMember } from "@/lib/content";

interface TeamProps {
  data: TeamData;
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
        {/* Image placeholder */}
        <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-dark overflow-hidden">
          {/* Placeholder avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white/50" />
            </div>
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full" />
          </div>
        </div>

        {/* Info */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-primary font-medium">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team({ data }: TeamProps) {
  return (
    <section id="tym" className="bg-secondary py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tým
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            {data.title}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Chcete se k nám přidat?
            </h3>
            <p className="text-white/60 mb-6">
              Hledáme nové kolegy do našeho týmu.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-dark px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors"
            >
              Kariéra u nás
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

