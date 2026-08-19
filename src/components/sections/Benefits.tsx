"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-left max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-[#ff4d6d] tracking-wider uppercase mb-4">
            La Solución
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Beneficios que transforman tu operativa.
          </h2>
        </div>

        {/* Grid de Beneficios (Estructura exacta: Columna izquierda grande, Columna derecha 2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Tarjeta 01: Todo en una plataforma (Columna Izquierda 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-[#1a1c26]/60 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl sm:text-5xl font-extrabold text-zinc-600 font-mono block mb-6">
                01
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Todo en una plataforma
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Un único login. Toda la gestión de personas centralizada desde el primer día del empleado hasta su último fichaje.
              </p>
            </div>

            {/* Barras de progreso idénticas a la imagen */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-zinc-400">
                  <span>Centralizado</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800/80 overflow-hidden">
                  <div className="h-full bg-[#ff4d6d] rounded-full w-[90%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-zinc-400">
                  <span>Sin papel</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800/80 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[95%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-zinc-400">
                  <span>Automatizado</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800/80 overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full w-[80%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha (7 cols): Tarjeta 02, Tarjeta 03 y Tarjeta 04 */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 justify-between">
            
            {/* Fila Superior Derecha: 02 y 03 en grid de 2 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Tarjeta 02: -70% tiempo admin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-3xl bg-[#1a1c26]/60 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-zinc-600 font-mono block mb-6">
                    02
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    -70% tiempo admin
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Automatiza lo repetitivo y recupera horas para tu equipo.
                  </p>
                </div>
              </motion.div>

              {/* Tarjeta 03: Acceso 24/7 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-3xl bg-[#1a1c26]/60 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-zinc-600 font-mono block mb-6">
                    03
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Acceso 24/7
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    PC, tablet o móvil. Gestión desde cualquier lugar.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Fila Inferior Derecha: Tarjeta 04 (Datos en tiempo real) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-3xl bg-[#1a1c26]/60 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-zinc-600 font-mono block mb-6">
                  04
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Datos en tiempo real
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Consulta métricas sin esperar a que te pasen un Excel.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
