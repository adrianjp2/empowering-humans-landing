import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0b0f] border-t border-zinc-900/80 py-8 sm:py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          
          {/* Logo y Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center group py-0.5">
              <Image
                src="/logo-dark-header.png"
                alt="Empowering Humans"
                width={180}
                height={85}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </Link>

            <span className="hidden sm:inline text-zinc-700">|</span>

            <p className="text-[11px] sm:text-xs text-zinc-400">
              © {currentYear} Empowering Humans. Todos los derechos reservados.
            </p>
          </div>

          {/* Enlaces Legales */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-zinc-400">
            <Link
              href="#aviso-legal"
              className="hover:text-white transition-colors duration-200 py-1"
            >
              Aviso Legal
            </Link>
            <Link
              href="#privacidad"
              className="hover:text-white transition-colors duration-200 py-1"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#cookies"
              className="hover:text-white transition-colors duration-200 py-1"
            >
              Política de Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
