"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Palmtree,
  Users,
  FolderInput,
  PenTool,
  BarChart3,
  FileCheck2,
  Building2,
  PieChart,
} from "lucide-react";

type Category = "operativos" | "administrativos" | "estrategicos";

interface ModuleItem {
  id: string;
  category: Category;
  icon: React.ElementType;
  title: string;
  description: string;
}

const allModules: ModuleItem[] = [
  // Operativos
  {
    id: "control-horario",
    category: "operativos",
    icon: Clock,
    title: "Control Horario",
    description:
      "Fichaje legal español. Entrada, salida, pausas y horas extra.",
  },
  {
    id: "vacaciones",
    category: "operativos",
    icon: Palmtree,
    title: "Vacaciones",
    description:
      "Solicitudes, aprobaciones, bajas y visibilidad por equipo.",
  },
  {
    id: "portal-empleado",
    category: "operativos",
    icon: Users,
    title: "Portal Empleado",
    description:
      "Nóminas, turnos e incidencias. Autogestión sin molestar a RRHH.",
  },
  {
    id: "expediente-digital",
    category: "operativos",
    icon: FolderInput,
    title: "Expediente Digital",
    description:
      "Organigrama, historial salarial, centro de trabajo y alertas.",
  },
  {
    id: "firma-electronica",
    category: "operativos",
    icon: PenTool,
    title: "Firma Electrónica",
    description:
      "Contratos, anexos y PRL firmados en minutos con seguimiento.",
  },
  {
    id: "dashboard-directivos",
    category: "operativos",
    icon: BarChart3,
    title: "Dashboard Directivos",
    description:
      "Plantilla activa, absentismo, rotación y costes en vivo.",
  },
  // Administrativos
  {
    id: "expediente-admin",
    category: "administrativos",
    icon: FolderInput,
    title: "Expediente Digital",
    description:
      "Organigrama, historial salarial, centro de trabajo y alertas.",
  },
  {
    id: "firma-admin",
    category: "administrativos",
    icon: PenTool,
    title: "Firma Electrónica",
    description:
      "Contratos, anexos y PRL firmados en minutos con seguimiento.",
  },
  {
    id: "gestion-documental",
    category: "administrativos",
    icon: FileCheck2,
    title: "Gestión Documental",
    description:
      "Distribución de nóminas y certificados con acuse de lectura.",
  },
  // Estratégicos
  {
    id: "dashboard-strat",
    category: "estrategicos",
    icon: BarChart3,
    title: "Dashboard Directivos",
    description:
      "Plantilla activa, absentismo, rotación, costes y vencimientos.",
  },
  {
    id: "organigrama",
    category: "estrategicos",
    icon: Building2,
    title: "Organigrama",
    description:
      "Estructura jerárquica y de equipos en tiempo real.",
  },
  {
    id: "costes-salariales",
    category: "estrategicos",
    icon: PieChart,
    title: "Costes Salariales",
    description:
      "Control de horas extra y presupuestos de personal.",
  },
];

export default function ModulesTabs() {
  const [activeTab, setActiveTab] = useState<Category>("operativos");

  const filteredModules = allModules.filter(
    (mod) => mod.category === activeTab
  );

  return (
    <section id="modulos" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-[#ff4d6d] tracking-wider uppercase mb-3.5 sm:mb-4">
            Módulos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            10 herramientas. Una plataforma.
          </h2>
        </div>

        {/* Navegación de Pestañas (Tabs) */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("operativos")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "operativos"
                ? "bg-[#ff4d6d] text-white shadow-accent-glow"
                : "bg-[#1e202c]/80 text-zinc-400 hover:text-white hover:bg-[#282a3a] border border-white/[0.06]"
            }`}
          >
            Operativos
          </button>
          <button
            onClick={() => setActiveTab("administrativos")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "administrativos"
                ? "bg-[#ff4d6d] text-white shadow-accent-glow"
                : "bg-[#1e202c]/80 text-zinc-400 hover:text-white hover:bg-[#282a3a] border border-white/[0.06]"
            }`}
          >
            Administrativos
          </button>
          <button
            onClick={() => setActiveTab("estrategicos")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "estrategicos"
                ? "bg-[#ff4d6d] text-white shadow-accent-glow"
                : "bg-[#1e202c]/80 text-zinc-400 hover:text-white hover:bg-[#282a3a] border border-white/[0.06]"
            }`}
          >
            Estratégicos
          </button>
        </div>

        {/* Grid Animado de Módulos (2 Columnas en Móvil / 3 en Desktop como en el Mockup) */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <AnimatePresence mode="wait">
            {filteredModules.map((module) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="group relative p-4 sm:p-7 rounded-2xl bg-[#1c1e28]/70 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    {/* Icono */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#262836] border border-zinc-700/60 flex items-center justify-center text-[#ff4d6d] mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Título */}
                    <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">
                      {module.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
