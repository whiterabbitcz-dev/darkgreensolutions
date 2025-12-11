import Image from "next/image";

export default function Team() {
  return (
    <section id="tym" className="bg-purple-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-16">
          Poznejte naše konzultanty
        </h2>
        
        <div className="space-y-16">
          {/* Jaroslav Smrčka */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold font-serif">Jaroslav Smrčka</h3>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/jaroslavsmrcka.png"
                alt="Jaroslav Smrčka"
                fill
                className="object-cover"
              />
            </div>
            
            <p className="max-w-3xl text-lg leading-relaxed">
              Jaroslav se posledních 20 let věnoval rozvoji podnikání a obchodu v mezinárodních společnostech. Začínal na manažerských pozicích ve firmě Coca-cola, později ve vedoucích obchodních pozicích Fintechových společností First Data a Fiserv. Poslední rok se podílel na přípravě ESG reportingu a strategií udržitelnosti pro klienty společnosti Fair Venture. Vystudoval obor Management a Marketing na FTVS UK a studuje Hydrologii na Fakultě životního prostředí ČZU.
            </p>
          </div>
          
          {/* Jan Baláč */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold font-serif">Jan Baláč</h3>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/janbalac.png"
                alt="Jan Baláč"
                fill
                className="object-cover"
              />
            </div>
            
            <p className="max-w-3xl text-lg leading-relaxed">
              Má přes 15 let zkušeností v poradenství, rozvoji podnikání a řízení organizací. Dlouhodobě se věnuje tématům obnovitelných zdrojů energie, energetických úspor a zavádění čistých technologií. Pracoval na manažerských pozicích ve Skupině ČEZ, neziskovém sektoru i státní správě a v poradenské roli pro velké energetické i výrobní společnosti, investiční fondy, neziskové organizace a obce. Přes dva roky se věnoval přípravě na ESG reporting a strategiím udržitelnosti pro přední české společnosti jako seniorní konzultant ve firmě Fair Venture. Vystudoval obor ekonomie a politologie na London School of Economics a obor Technology Policy na University of Cambridge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

