"use client";

import { motion } from "framer-motion";
import { Mail, FileSpreadsheet, FolderOpen, Clock } from "lucide-react";

const problems = [
  {
    icon: Mail,
    title: "Llevo media mañana gestionando vacaciones por email",
    description:
      "Solicitudes dispersas, hojas de cálculo desactualizadas y ausencias sin control. Pierdes productividad antes de empezar el día.",
    tag: "3-4 horas/semana perdidas",
  },
  {
    icon: FileSpreadsheet,
    title: "Cada fin de mes es una odisea de fichajes y Excel",
    description:
      "Recopilar datos de múltiples fuentes, corregir errores manuales y cuadrar horarios consume días de trabajo valioso.",
    tag: "1-2 días/mes perdidos",
  },
  {
    icon: FolderOpen,
    title: "Tengo expedientes en 5 sitios distintos",
    description:
      "Documentos en papel, archivos en el ordenador, emails en la bandeja. La información fragmentada retrasa cada decisión.",
    tag: "Búsqueda promedio: 15 min",
  },
  {
    icon: Clock,
    title: "Mis responsables pierden tiempo administrativo",
    description:
      "Aprobar permisos, firmar documentos, gestionar incidencias. Tareas que deberían ser instantáneas se convierten en cuellos de botella.",
    tag: "2-3 horas/semana por responsable",
  },
];

export default function Problems() {
  return (
    <section id="problemas" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-left max-w-3xl mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-[#ff4d6d] tracking-wider uppercase mb-3.5 sm:mb-4">
            El Problema
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
            Así pierdes horas cada día.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 font-normal leading-relaxed">
            Cuatro escenarios que se repiten en la mayoría de departamentos de RRHH.
          </p>
        </div>

        {/* Grid de 4 Tarjetas de Problemas (1 Columna en Móvil / 2 en Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#1a1c26]/60 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-xl shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Comilla de cita en color acento */}
                  <div className="mb-2 sm:mb-3">
                    <span className="text-3xl sm:text-4xl font-serif text-[#ff4d6d] leading-none block">
                      ”
                    </span>
                  </div>

                  {/* Título de la tarjeta */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 leading-snug">
                    {problem.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {problem.description}
                  </p>
                </div>

                {/* Badge de Impacto en Tiempo */}
                <div className="pt-2 flex items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36151d]/90 border border-rose-500/30 text-[11px] sm:text-xs font-medium text-rose-300">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff4d6d] flex-shrink-0" />
                    <span>{problem.tag}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
