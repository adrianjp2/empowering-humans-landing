"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0e12]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl"
          : "bg-[#0d0e12]/60 backdrop-blur-sm border-b border-white/5 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Izquierda */}
          <Link href="/" className="flex items-center group py-0.5">
            <Image
              src="/logo-dark-header.png"
              alt="Empowering Humans"
              width={200}
              height={95}
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* Enlaces de Navegación y Botón CTA - Desktop (Oculto en Móvil) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-8">
              <Link
                href="#beneficios"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200"
              >
                Beneficios
              </Link>
              <Link
                href="#modulos"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200"
              >
                Módulos
              </Link>
              <Link
                href="#seguridad"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200"
              >
                Seguridad
              </Link>
            </nav>

            <Link
              href="#demo"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-accent-glow hover:shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] ml-2"
            >
              Demo gratuita
            </Link>
          </div>

          {/* Botón Hamburguesa Limpio para Móvil (Como en la captura) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e12]/98 border-b border-zinc-800 px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-3">
            <Link
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white py-1.5 transition-colors border-b border-zinc-800/40"
            >
              Beneficios
            </Link>
            <Link
              href="#modulos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white py-1.5 transition-colors border-b border-zinc-800/40"
            >
              Módulos
            </Link>
            <Link
              href="#seguridad"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white py-1.5 transition-colors border-b border-zinc-800/40"
            >
              Seguridad
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-colors shadow-accent-glow"
            >
              <span>Demo gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
