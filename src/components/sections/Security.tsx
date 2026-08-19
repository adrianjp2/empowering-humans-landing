"use client";

import { motion } from "framer-motion";
import { Lock, Scale, Shield, TrendingUp } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "Protección RGPD",
    description: "Encriptación, accesos por roles y copias de seguridad automáticas.",
  },
  {
    icon: Scale,
    iconColor: "text-slate-200 bg-slate-500/10 border-slate-500/20",
    title: "Legislación española",
    description: "Fichajes adaptados a la normativa vigente. Sin lagunas.",
  },
  {
    icon: Shield,
    iconColor: "text-[#ff4d6d] bg-rose-500/10 border-rose-500/20",
    title: "Accesos seguros",
    description: "Cada usuario ve solo lo que necesita. Tú decides quién accede a qué.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-[#ff4d6d] bg-rose-500/10 border-rose-500/20",
    title: "Escalabilidad",
    description: "De 10 a 1.000 empleados sin fricción. Crece sin límites.",
  },
];

export default function Security() {
  return (
    <section id="seguridad" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor enmarcado exactamente igual a la propuesta PDF */}
        <div className="relative rounded-3xl bg-[#1e202a]/80 border border-zinc-800 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl">
          
          {/* Encabezado Centrado */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Eficiencia sin seguridad no sirve.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-normal">
              Cumplimiento normativo y protección de datos integrados en cada proceso.
            </p>
          </div>

          {/* Grid de 4 Bloques Técnicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#181a24]/90 border border-zinc-800/90 text-center flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center">
                    {/* Contenedor del Icono */}
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${item.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Título */}
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
