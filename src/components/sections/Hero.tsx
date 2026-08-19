"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Texto y CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#29171e]/80 border border-[#ff4d6d]/30 text-xs font-medium text-[#ff4d6d] mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff4d6d] animate-pulse" />
              <span>Nuevo: automatización inteligente</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              El <span className="text-[#ff4d6d]">80%</span> del tiempo de RRHH se va en tareas que un software hace en segundos.
            </h1>

            {/* Párrafo Descriptivo */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-8 max-w-xl font-normal">
              Automatiza fichajes, vacaciones, contratos y expedientes en una
              única plataforma. Sin papeleo. Sin Excel. Sin perder horas.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-[0_0_35px_rgba(255,77,109,0.5)] hover:shadow-[0_0_45px_rgba(255,77,109,0.7)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Solicitar demostración →
              </Link>
              <Link
                href="#precios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-white bg-[#26242c]/80 hover:bg-[#312f38] border border-zinc-700/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md"
              >
                Ver precios
              </Link>
            </div>
          </motion.div>

          {/* Columna Derecha: Widget Interactivo UI con Perspectiva 3D y Alta Transparencia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full [perspective:1200px]"
          >
            {/* Sombra y resplandor traslúcido en perspectiva */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-[#ff4d6d]/15 via-indigo-500/10 to-blue-900/20 rounded-[36px] blur-3xl opacity-70 pointer-events-none"
              style={{
                transform: "rotateY(-7deg) rotateX(3deg) rotate(-1.5deg) scale(0.95)",
              }}
            />

            {/* Contenedor del Dashboard Simulado estilo Libreta 3D Flotante */}
            <div
              className="relative rounded-[32px] bg-[#161824]/40 border border-white/10 shadow-2xl p-7 sm:p-8 backdrop-blur-2xl space-y-6 transition-all duration-500 hover:[transform:rotateY(0deg)_rotateX(0deg)_rotate(0deg)]"
              style={{
                transform: "rotateY(-7deg) rotateX(3deg) rotate(-1.5deg)",
                transformStyle: "preserve-3d",
                boxShadow: "-20px 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              
              {/* Tres Puntos Superior Estilo macOS */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* 2 Métricas Superiores */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Tarjeta 1: Tiempo Ahorrado */}
                <div className="p-4 rounded-2xl bg-[#1e202e]/40 border border-white/[0.08] backdrop-blur-md space-y-2">
                  <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase block">
                    TIEMPO AHORRADO
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#00e676] tracking-tight">
                    -70%
                  </div>
                  {/* Barra de progreso verde */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-800/80 overflow-hidden mt-2">
                    <div className="h-full bg-[#00e676] rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Tarjeta 2: Tareas Pendientes */}
                <div className="p-4 rounded-2xl bg-[#1e202e]/40 border border-white/[0.08] backdrop-blur-md space-y-2">
                  <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase block">
                    TAREAS PENDIENTES
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#ff4d6d] tracking-tight">
                    12
                  </div>
                  {/* Barra de progreso roja */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-800/80 overflow-hidden mt-2">
                    <div className="h-full bg-[#ff4d6d] rounded-full w-[45%]" />
                  </div>
                </div>

              </div>

              {/* Tabla de Actividad Reciente */}
              <div className="p-5 rounded-2xl bg-[#1e202e]/40 border border-white/[0.08] backdrop-blur-md space-y-4">
                <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase block">
                  ACTIVIDAD RECIENTE
                </span>

                <div className="w-full text-xs space-y-3.5">
                  
                  {/* Encabezados de Columna */}
                  <div className="grid grid-cols-3 text-zinc-400 font-bold uppercase text-[10px] tracking-wider pb-2 border-b border-white/[0.08]">
                    <span>EMPLEADO</span>
                    <span>ACCIÓN</span>
                    <span className="text-right">ESTADO</span>
                  </div>

                  {/* Fila 1: Ana G. */}
                  <div className="grid grid-cols-3 items-center py-0.5">
                    <span className="font-semibold text-zinc-200">Ana G.</span>
                    <span className="text-zinc-400">Fichaje entrada</span>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold bg-[#0d3326]/70 text-[#00e676] border border-[#00e676]/30">
                        OK
                      </span>
                    </div>
                  </div>

                  {/* Fila 2: Carlos R. */}
                  <div className="grid grid-cols-3 items-center py-0.5">
                    <span className="font-semibold text-zinc-200">Carlos R.</span>
                    <span className="text-zinc-400">Solicitud vacaciones</span>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold bg-[#0d3326]/70 text-[#00e676] border border-[#00e676]/30">
                        Aprobado
                      </span>
                    </div>
                  </div>

                  {/* Fila 3: Laura M. */}
                  <div className="grid grid-cols-3 items-center py-0.5">
                    <span className="font-semibold text-zinc-200">Laura M.</span>
                    <span className="text-zinc-400">Firma contrato</span>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold bg-[#3b151f]/70 text-[#ff4d6d] border border-[#ff4d6d]/30">
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
