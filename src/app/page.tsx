import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import TickerBanner from "@/components/shared/TickerBanner";
import Problems from "@/components/sections/Problems";
import Benefits from "@/components/sections/Benefits";
import ModulesTabs from "@/components/sections/ModulesTabs";
import Security from "@/components/sections/Security";
import CTAForm from "@/components/sections/CTAForm";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0b0f] text-zinc-50 flex flex-col selection:bg-[#ff4d6d] selection:text-white overflow-hidden">
      
      {/* ========================================================================= */}
      {/* LIENZO ATMOSFÉRICO DUAL COMPLETO: ROJO A LA IZQUIERDA, AZUL A LA DERECHA */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* --- COLUMNA IZQUIERDA CONTINUA: AURA ROJA / CARMESÍ DE ARRIBA A ABAJO --- */}
        {/* Resplandor general izquierdo que cubre toda la altura */}
        <div className="absolute top-0 left-0 w-[55vw] h-full bg-[radial-gradient(ellipse_60vw_100%_at_-5%_50%,rgba(225,29,72,0.20)_0%,rgba(159,18,57,0.12)_45%,transparent_80%)]" />

        {/* Nodos de intensidad específicos en la columna izquierda */}
        <div className="absolute top-[2%] -left-[10%] w-[60vw] max-w-[850px] h-[900px] bg-[#ff4d6d]/24 rounded-full blur-[170px]" />
        <div className="absolute top-[24%] -left-[15%] w-[60vw] max-w-[850px] h-[900px] bg-rose-600/22 rounded-full blur-[170px]" />
        <div className="absolute top-[42%] -left-[12%] w-[60vw] max-w-[850px] h-[900px] bg-[#ff4d6d]/22 rounded-full blur-[170px]" />
        <div className="absolute top-[62%] -left-[15%] w-[60vw] max-w-[850px] h-[900px] bg-rose-600/24 rounded-full blur-[170px]" />
        <div className="absolute bottom-[4%] -left-[10%] w-[60vw] max-w-[850px] h-[900px] bg-[#ff4d6d]/26 rounded-full blur-[170px]" />


        {/* --- COLUMNA DERECHA CONTINUA: AURA AZUL / ÍNDIGO DE ARRIBA A ABAJO --- */}
        {/* Resplandor general derecho que cubre toda la altura */}
        <div className="absolute top-0 right-0 w-[55vw] h-full bg-[radial-gradient(ellipse_60vw_100%_at_105%_50%,rgba(30,58,138,0.32)_0%,rgba(15,23,42,0.22)_50%,transparent_80%)]" />

        {/* Nodos de intensidad específicos en la columna derecha */}
        <div className="absolute top-[4%] -right-[15%] w-[65vw] max-w-[900px] h-[950px] bg-blue-900/32 rounded-full blur-[180px]" />
        <div className="absolute top-[26%] -right-[12%] w-[65vw] max-w-[900px] h-[950px] bg-indigo-950/45 rounded-full blur-[180px]" />
        <div className="absolute top-[44%] -right-[15%] w-[65vw] max-w-[900px] h-[950px] bg-blue-900/30 rounded-full blur-[180px]" />
        <div className="absolute top-[66%] -right-[12%] w-[65vw] max-w-[900px] h-[950px] bg-indigo-950/45 rounded-full blur-[180px]" />
        <div className="absolute bottom-[2%] -right-[15%] w-[65vw] max-w-[900px] h-[950px] bg-blue-900/35 rounded-full blur-[180px]" />

        {/* Resplandor focal central para el CTA de cierre */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[800px] h-[600px] bg-[#ff4d6d]/22 rounded-full blur-[160px]" />

      </div>

      {/* ========================================================================= */}
      {/* CONTENIDO PRINCIPAL DE LA LANDING                                         */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <Hero />
        <TickerBanner />
        <Problems />
        <Benefits />
        <ModulesTabs />
        <Security />
        <CTAForm />
        <Footer />
      </div>

    </main>
  );
}
