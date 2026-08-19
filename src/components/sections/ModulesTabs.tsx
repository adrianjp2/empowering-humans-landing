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
      "Fichaje legal español. Entrada, salida, pausas, horas extra y exportación.",
  },
  {
    id: "vacaciones",
    category: "operativos",
    icon: Palmtree,
    title: "Vacaciones",
    description:
      "Solicitudes, aprobaciones, bajas, teletrabajo y visibilidad por depto.",
  },
  {
    id: "portal-empleado",
    category: "operativos",
    icon: Users,
    title: "Portal Empleado",
    description:
      "Nóminas, contratos, turnos e incidencias. Autogestión sin molestar a RRHH.",
  },
  // Administrativos
  {
    id: "expediente-digital",
    category: "administrativos",
    icon: FolderInput,
    title: "Expediente Digital",
    description:
      "Organigrama, historial salarial, centro de trabajo y alertas.",
  },
  {
    id: "firma-electronica",
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
    title: "Gestión de Documentos",
    description:
      "Distribución de nóminas y certificados con acuse de lectura.",
  },
  // Estratégicos
  {
    id: "dashboard-directivos",
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
    <section id="modulos" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-left max-w-3xl mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-[#ff4d6d] tracking-wider uppercase mb-4">
            Módulos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            10 herramientas. Una plataforma.
          </h2>
        </div>

        {/* Navegación de Pestañas (Tabs) */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab("operativos")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "operativos"
                ? "bg-[#ff4d6d] text-white shadow-accent-glow"
                : "bg-[#222532] text-zinc-400 hover:text-white hover:bg-[#2c3040] border border-zinc-800"
            }`}
          >
            Operativos
          </button>
          <button
            onClick={() => setActiveTab("administrativos")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "administrativos"
                ? "bg-[#ff4d6d] text-white shadow-accent-glow"
                : "bg-[#222532] text-zinc-400 hover:text-white hover:bg-[#2c3040] border border-zinc-800"
            }`}
          >
            Administrativos
          </button>
          <button
            onClick={() => setActiveTab("estrategicos")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "estrategicos"
                ? "bg-[#ff4d6d] text-white shadow-accent-glow"
                : "bg-[#222532] text-zinc-400 hover:text-white hover:bg-[#2c3040] border border-zinc-800"
            }`}
          >
            Estratégicos
          </button>
        </div>

        {/* Grid Animado de Tarjetas de Módulos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#1c1e28]/70 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    {/* Icono en contenedor circular/redondeado */}
                    <div className="w-10 h-10 rounded-xl bg-[#262836] border border-zinc-700/60 flex items-center justify-center text-[#ff4d6d] mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {module.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
