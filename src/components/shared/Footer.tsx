import Link from "next/link";
import { Users } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0b0f] border-t border-zinc-900/80 py-8 sm:py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          
          {/* Logo y Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#ff4d6d]" />
              </div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                Empowering{" "}
                <span className="text-[#ff4d6d] font-extrabold">Humans</span>
              </span>
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
