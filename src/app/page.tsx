import { getHomePageContent } from "@/lib/content";
import Image from "next/image";

export default function Home() {
  const content = getHomePageContent();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#0D0D0D" }}
      >
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
                <span className="text-white/60 font-normal text-[10px] block -mt-0.5">
                  Solutions
                </span>
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
      <section
        className="relative pt-14 overflow-hidden"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        {/* Gradient overlay - purple to lime green */}
        <div
          className="absolute top-0 left-0 w-[70%] h-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(158, 240, 26, 0.9) 70%, transparent 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <h1 
            className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.15] max-w-lg font-serif"
          >
            {content.hero.title}
          </h1>
        </div>
      </section>

      {/* Naše Témata Section */}
      <section className="py-14 lg:py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Label */}
          <p
            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-8"
            style={{ color: "#7C3AED" }}
          >
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
                  <h3
                    className="text-[26px] md:text-[30px] font-bold mb-3 font-serif"
                    style={{ color: "#0D0D0D" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "#525252" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O DarkGreen Solutions Section */}
      <section
        className="py-14 lg:py-16"
        style={{ backgroundColor: "#ffffff", borderTop: "1px solid #E5E5E5" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Label */}
          <p
            className="text-[11px] font-medium tracking-[0.15em] uppercase mb-5"
            style={{ color: "#A3A3A3" }}
          >
            {content.about.sectionLabel}
          </p>

          {/* Main Heading */}
          <h2
            className="text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-tight mb-6 max-w-2xl font-serif"
            style={{ color: "#0D0D0D" }}
          >
            {content.about.title}
          </h2>

          {/* Paragraphs */}
          <div className="max-w-3xl">
            <p className="text-[15px] leading-[1.7] mb-4" style={{ color: "#404040" }}>
              <span className="font-semibold">Máme nadhled, zkušenosti a tah na branku.</span>{" "}
              Naše práce je nejen o reportech, ale především o strategii, která vám přinese
              měřitelné výsledky a zajistí, že ESG nebude jen povinností, ale konkurenční
              výhodou.
            </p>
            <p className="text-[15px] leading-[1.7]" style={{ color: "#404040" }}>
              <span
                className="font-semibold underline underline-offset-4"
                style={{ textDecorationColor: "#7C3AED", textDecorationThickness: "2px" }}
              >
                Hledáme rovnováhu mezi inovacemi a pragmatickým přístupem.
              </span>{" "}
              Chceme, aby ESG a dekarbonizace dávaly{" "}
              <span className="font-semibold">smysl byznysově, environmentálně i společensky</span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Konzultanti Section */}
      <section className="py-14 lg:py-16" style={{ backgroundColor: "#7C3AED" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-10 text-center font-serif">
            {content.consultants.title}
          </h2>

          {/* Consultants */}
          <div className="space-y-16">
            {content.consultants.members.map((member, index) => (
              <div key={index}>
                {/* Name */}
                <h3
                  className="text-[22px] md:text-[26px] font-bold mb-4 font-serif"
                  style={{ color: "#9EF01A" }}
                >
                  {member.name}
                </h3>

                {/* Photo - larger size with proper aspect ratio */}
                <div className="mb-5">
                  <div
                    className="w-[160px] h-[200px] md:w-[180px] md:h-[225px] rounded-lg overflow-hidden relative"
                    style={{ backgroundColor: "#6D28D9" }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 160px, 180px"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[14px] leading-[1.7] max-w-3xl text-white/90">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0D0D0D" }} className="pt-10 pb-0">
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
                  <span className="text-white/60 font-normal text-[10px] block -mt-0.5">
                    Solutions
                  </span>
                </div>
              </a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[13px] mb-3" style={{ color: "#9EF01A" }}>
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
              <h4 className="font-semibold text-[13px] mb-3" style={{ color: "#9EF01A" }}>
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
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ backgroundColor: "#7C3AED" }}
          />
          <div className="py-3" style={{ backgroundColor: "#0D0D0D" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <p className="text-white/40 text-[11px] text-center">
                {content.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
