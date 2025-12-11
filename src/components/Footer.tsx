import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.jpg"
                alt="DarkGreen Solutions"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Kontakt */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p>Dark Green Solutions s.r.o.</p>
              <p>Salvátorská 931/8</p>
              <p>110 00 Praha 1</p>
            </div>
          </div>
          
          {/* Fakturační údaje */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Fakturační údaje</h3>
            <div className="space-y-2 text-gray-300">
              <p>Dark Green Solutions s.r.o.</p>
              <p>Ametystová 285/4</p>
              <p>153 00 Praha 5</p>
              <p>IČ: 22375902</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © DarkGreen Solutions s.r.o. 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

