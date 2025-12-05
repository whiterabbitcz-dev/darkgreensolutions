import { getHomePageContent } from "@/lib/content";
import Image from "next/image";

export default function Home() {
  const content = getHomePageContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#9EF01A" />
                <path
                  d="M16 8c-3 0-5 2.5-5.5 5-.3 1.5 0 3 .5 4.5 1 2.5 3 4.5 5 5.5 2-1 4-3 5-5.5.5-1.5.8-3 .5-4.5-.5-2.5-2.5-5-5.5-5z"
                  fill="#0D0D0D"
                />
              </svg>
              <div className="leading-tight">
                <span className="text-white font-semibold text-sm block">DarkGreen</span>
                <span className="text-white/60 font-normal text-[10px] block -mt-0.5">Solutions</span>
              </div>
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {["Služby", "Tým", "Blog", "Kontakt"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-dark pt-14 overflow-hidden">
        {/* Gradient overlay - positioned to match screenshot */}
        <div
          className="absolute top-0 left-0 w-[60%] h-full"
          style={{
            background: "linear-gradient(160deg, rgba(124, 58, 237, 0.9) 0%, rgba(158, 240, 26, 0.7) 70%, transparent 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.15] max-w-lg">
            {content.hero.title}
          </h1>
        </div>
      </section>

      {/* Naše Témata Section */}
      <section className="bg-gray-100 py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Label */}
          <p className="text-brand-purple text-[11px] font-semibold tracking-[0.2em] uppercase mb-8">
            {content.themes.sectionLabel}
          </p>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {content.themes.items.map((item, index) => (
              <div key={index} className="relative">
                {/* Purple/Green gradient bar on left for first item */}
                {index === 0 && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #7C3AED 0%, #9EF01A 100%)",
                    }}
                  />
                )}
                <div className={index === 0 ? "pl-5" : ""}>
                  <h3 className="text-[26px] md:text-[30px] font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O DarkGreen Solutions Section */}
      <section className="bg-white py-14 lg:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Label */}
          <p className="text-gray-400 text-[11px] font-medium tracking-[0.15em] uppercase mb-5">
            {content.about.sectionLabel}
          </p>

          {/* Main Heading */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-brand-dark leading-tight mb-6 max-w-2xl">
            {content.about.title}
          </h2>

          {/* Paragraphs */}
          <div className="max-w-3xl">
            <p className="text-gray-700 text-[15px] leading-[1.7] mb-4">
              <span className="font-semibold">Máme nadhled, zkušenosti a tah na branku.</span>{" "}
              Naše práce je nejen o reportech, ale především o strategii, která vám přinese
              měřitelné výsledky a zajistí, že ESG nebude jen povinností, ale konkurenční výhodou.
            </p>
            <p className="text-gray-700 text-[15px] leading-[1.7]">
              <span className="font-semibold underline decoration-brand-purple decoration-2 underline-offset-4">
                Hledáme rovnováhu mezi inovacemi a pragmatickým přístupem.
              </span>{" "}
              Chceme, aby ESG a dekarbonizace dávaly{" "}
              <span className="font-semibold">smysl byznysově, environmentálně i společensky</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Konzultanti Section */}
      <section className="bg-brand-purple py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-10 text-center">
            {content.consultants.title}
          </h2>

          {/* Consultants */}
          <div className="space-y-14">
            {content.consultants.members.map((member, index) => (
              <div key={index}>
                {/* Name */}
                <h3 className="text-brand-lime text-[22px] md:text-[26px] font-bold mb-4">
                  {member.name}
                </h3>

                {/* Photo */}
                <div className="mb-5">
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-xl overflow-hidden bg-gray-400">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={208}
                      height={208}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Bio */}
                <p className="text-white/90 text-[14px] leading-[1.7] max-w-3xl">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 pb-10">
            {/* Logo */}
            <div>
              <a href="/" className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#9EF01A" />
                  <path
                    d="M16 8c-3 0-5 2.5-5.5 5-.3 1.5 0 3 .5 4.5 1 2.5 3 4.5 5 5.5 2-1 4-3 5-5.5.5-1.5.8-3 .5-4.5-.5-2.5-2.5-5-5.5-5z"
                    fill="#0D0D0D"
                  />
                </svg>
                <div className="leading-tight">
                  <span className="text-white font-semibold text-sm block">DarkGreen</span>
                  <span className="text-white/60 font-normal text-[10px] block -mt-0.5">Solutions</span>
                </div>
              </a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-brand-lime font-semibold text-[13px] mb-3">
                {content.footer.contact.title}
              </h4>
              <div className="text-white/60 text-[13px] space-y-0.5">
                <p>{content.footer.contact.company}</p>
                <p>{content.footer.contact.street}</p>
                <p>{content.footer.contact.city}</p>
              </div>
            </div>

            {/* Billing */}
            <div>
              <h4 className="text-brand-lime font-semibold text-[13px] mb-3">
                {content.footer.billing.title}
              </h4>
              <div className="text-white/60 text-[13px] space-y-0.5">
                <p>{content.footer.billing.company}</p>
                <p>{content.footer.billing.street}</p>
                <p>{content.footer.billing.city}</p>
                <p>{content.footer.billing.ico}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar with purple accent */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-purple" />
          <div className="bg-brand-dark py-3">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <p className="text-white/40 text-[11px] text-center">{content.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
