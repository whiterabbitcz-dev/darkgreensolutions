"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import type { ContactData } from "@/lib/content";

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
    },
    {
      icon: Phone,
      label: "Telefon",
      value: data.phone,
      href: `tel:${data.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Adresa",
      value: data.address,
      href: "#",
    },
  ];

  return (
    <section id="kontakt" className="bg-light-gray py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4">
            {data.title}
          </h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">
                Spojte se s námi
              </h3>
              <p className="text-dark-gray leading-relaxed">
                Rádi zodpovíme vaše dotazy ohledně ESG reportingu, výpočtu
                uhlíkové stopy nebo dalších služeb. Napište nám nebo zavolejte.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-gray">{item.label}</div>
                    <div className="font-semibold text-dark group-hover:text-secondary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary/50 mx-auto mb-2" />
                  <span className="text-dark-gray text-sm">
                    Praha, Česká republika
                  </span>
                </div>
              </div>
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, #3F02B0 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-6">
                {data.formTitle}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-2">
                    Zpráva odeslána!
                  </h4>
                  <p className="text-dark-gray">
                    Děkujeme za váš zájem. Brzy se vám ozveme.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="jan@firma.cz"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Společnost
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Název společnosti"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Jak vám můžeme pomoci?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Odesílám...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Odeslat zprávu
                      </>
                    )}
                  </button>

                  <p className="text-sm text-dark-gray text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

