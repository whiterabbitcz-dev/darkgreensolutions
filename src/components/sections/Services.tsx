export default function Services() {
  return (
    <section id="sluzby" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm tracking-widest text-gray-400 mb-8">NAŠE TÉMATA</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-serif">Dekarbonizace</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Navrhneme a spočítáme cestu k dekarbonizaci vašeho podnikání.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-serif">ESG</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nastavíme vaše procesy a reporting dle principů esg tak, aby jste uspěli u vašich zákazníků, investorů, auditorů i ostatních stakeholderů.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
