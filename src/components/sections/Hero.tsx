"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Texto y CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#29171e]/90 border border-[#ff4d6d]/30 text-xs font-medium text-[#ff4d6d] mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff4d6d] animate-pulse flex-shrink-0" />
              <span>Nuevo: automatización inteligente</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-5">
              El <span className="text-[#ff4d6d]">80%</span> del tiempo de RRHH se va en tareas que un software hace en segundos.
            </h1>

            {/* Párrafo Descriptivo */}
            <p className="text-sm sm:text-base lg:text-xl text-zinc-400 leading-relaxed mb-7 max-w-xl font-normal">
              Automatiza fichajes, vacaciones, contratos y expedientes en una
              única plataforma. Sin papeleo. Sin Excel. Sin perder horas.
            </p>

            {/* Botones de Acción (Vertical en Móvil / Horizontal en Desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-[0_0_30px_rgba(255,77,109,0.5)] hover:shadow-[0_0_40px_rgba(255,77,109,0.7)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Solicitar demostración →
              </Link>
              <Link
                href="#precios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold text-white bg-[#26242c]/90 hover:bg-[#312f38] border border-zinc-700/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md text-center"
              >
                Ver precios
              </Link>
            </div>
          </motion.div>

          {/* Columna Derecha: Widget Interactivo UI (Mobile Friendly / 3D en Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full lg:[perspective:1200px]"
          >
            {/* Sombra y resplandor traslúcido */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-[#ff4d6d]/15 via-indigo-500/10 to-blue-900/20 rounded-3xl sm:rounded-[36px] blur-2xl sm:blur-3xl opacity-70 pointer-events-none"
            />

            {/* Contenedor del Dashboard Simulado */}
            <div
              className="relative rounded-2xl sm:rounded-[32px] bg-[#161824]/60 border border-white/10 shadow-2xl p-5 sm:p-7 backdrop-blur-2xl space-y-5 sm:space-y-6 lg:[transform:rotateY(-7deg)_rotateX(3deg)_rotate(-1.5deg)] lg:hover:[transform:rotateY(0deg)_rotateX(0deg)_rotate(0deg)] transition-all duration-500"
              style={{
                boxShadow: "-10px 15px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              
              {/* Tres Puntos Superior Estilo macOS */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* 2 Métricas Superiores */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Tarjeta 1: Tiempo Ahorrado */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#1e202e]/60 border border-white/[0.08] backdrop-blur-md space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400 tracking-wider uppercase block">
                    TIEMPO AHORRADO
                  </span>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00e676] tracking-tight">
                    -70%
                  </div>
                  {/* Barra de progreso verde */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-800/80 overflow-hidden mt-1 sm:mt-2">
                    <div className="h-full bg-[#00e676] rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Tarjeta 2: Tareas Pendientes */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#1e202e]/60 border border-white/[0.08] backdrop-blur-md space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400 tracking-wider uppercase block">
                    TAREAS PENDIENTES
                  </span>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff4d6d] tracking-tight">
                    12
                  </div>
                  {/* Barra de progreso roja */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-800/80 overflow-hidden mt-1 sm:mt-2">
                    <div className="h-full bg-[#ff4d6d] rounded-full w-[45%]" />
                  </div>
                </div>

              </div>

              {/* Tabla de Actividad Reciente */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#1e202e]/60 border border-white/[0.08] backdrop-blur-md space-y-3 sm:space-y-4">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400 tracking-wider uppercase block">
                  ACTIVIDAD RECIENTE
                </span>

                <div className="w-full text-xs space-y-3">
                  
                  {/* Encabezados de Columna */}
                  <div className="grid grid-cols-3 text-zinc-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-wider pb-2 border-b border-white/[0.08]">
                    <span>EMPLEADO</span>
                    <span>ACCIÓN</span>
                    <span className="text-right">ESTADO</span>
                  </div>

                  {/* Fila 1: Ana G. */}
                  <div className="grid grid-cols-3 items-center py-0.5 text-[11px] sm:text-xs">
                    <span className="font-semibold text-zinc-200">Ana G.</span>
                    <span className="text-zinc-400 truncate pr-1">Fichaje entrada</span>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-[11px] font-bold bg-[#0d3326]/80 text-[#00e676] border border-[#00e676]/30">
                        OK
                      </span>
                    </div>
                  </div>

                  {/* Fila 2: Carlos R. */}
                  <div className="grid grid-cols-3 items-center py-0.5 text-[11px] sm:text-xs">
                    <span className="font-semibold text-zinc-200">Carlos R.</span>
                    <span className="text-zinc-400 truncate pr-1">Solicitud vacaciones</span>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-[11px] font-bold bg-[#0d3326]/80 text-[#00e676] border border-[#00e676]/30">
                        Aprobado
                      </span>
                    </div>
                  </div>

                  {/* Fila 3: Laura M. */}
                  <div className="grid grid-cols-3 items-center py-0.5 text-[11px] sm:text-xs">
                    <span className="font-semibold text-zinc-200">Laura M.</span>
                    <span className="text-zinc-400 truncate pr-1">Firma contrato</span>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-[11px] font-bold bg-[#3b151f]/80 text-[#ff4d6d] border border-[#ff4d6d]/30">
                        Pendiente
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
