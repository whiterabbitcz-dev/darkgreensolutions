import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="DarkGreen Solutions"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="#sluzby" className="hover:text-green-400 transition-colors">
              Služby
            </Link>
            <Link href="#tym" className="hover:text-green-400 transition-colors">
              Tým
            </Link>
            <Link href="#kontakt" className="hover:text-green-400 transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

