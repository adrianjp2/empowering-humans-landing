"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  tamanoEmpresa: string;
  aceptaPolitica: boolean;
}

export default function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Formulario de lead enviado:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="demo" className="relative py-28 bg-transparent overflow-hidden text-center">
      {/* Línea roja vertical decorativa superior como en la propuesta PDF */}
      <div className="w-[2px] h-16 bg-gradient-to-b from-transparent to-[#ff4d6d] mx-auto mb-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal Centrado */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Tu próximo lunes, todo estará{" "}
          <span className="text-[#ff4d6d]">hecho</span> antes de llegar.
        </h2>

        {/* Subtítulo Centrado */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Vacaciones aprobadas, fichajes cuadrados, contratos firmados. Tu equipo se dedicará a lo que importa: las personas.
        </p>

        {/* Botón Principal CTA Solicitud Demostración */}
        {!showFormModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => setShowFormModal(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-accent-glow hover:shadow-accent-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Solicitar demostración gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-zinc-400">
              ⚡ Sin compromiso. Instalación asistida en 48 horas.
            </p>
          </motion.div>
        )}

        {/* Formulario Interactivo para capturar Lead (Fase 4 B2B) */}
        {showFormModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl mx-auto mt-6 text-left rounded-2xl bg-[#1c1e28]/95 border border-zinc-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                Solicita tu demostración gratuita
              </h3>
              <button
                onClick={() => setShowFormModal(false)}
                className="text-xs text-zinc-400 hover:text-white"
              >
                ✕ Cerrar
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">¡Solicitud enviada!</h4>
                <p className="text-sm text-zinc-300">
                  Un especialista de RRHH te contactará en menos de 2 horas laborables.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Ana García"
                    {...register("nombre", { required: "El nombre es obligatorio" })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff4d6d]"
                  />
                  {errors.nombre && (
                    <span className="text-xs text-rose-400 mt-1 block">
                      {errors.nombre.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Correo corporativo *
                  </label>
                  <input
                    type="email"
                    placeholder="ana@tuempresa.es"
                    {...register("email", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Introduce un correo válido",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff4d6d]"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Tamaño de la empresa *
                  </label>
                  <select
                    {...register("tamanoEmpresa", {
                      required: "Selecciona el tamaño de empresa",
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#ff4d6d]"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="1-10">1 - 10 empleados</option>
                    <option value="11-50">11 - 50 empleados</option>
                    <option value="51-200">51 - 200 empleados</option>
                    <option value="200+">Más de 200 empleados</option>
                  </select>
                  {errors.tamanoEmpresa && (
                    <span className="text-xs text-rose-400 mt-1 block">
                      {errors.tamanoEmpresa.message}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="aceptaPolitica"
                    {...register("aceptaPolitica", {
                      required: "Debes aceptar la política de privacidad",
                    })}
                    className="mt-1 w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-[#ff4d6d] focus:ring-[#ff4d6d] accent-[#ff4d6d]"
                  />
                  <label htmlFor="aceptaPolitica" className="text-xs text-zinc-400 leading-normal cursor-pointer">
                    Acepto la Política de Privacidad para agendar la demo.
                  </label>
                </div>
                {errors.aceptaPolitica && (
                  <span className="text-xs text-rose-400 block">
                    {errors.aceptaPolitica.message}
                  </span>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-base font-semibold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-accent-glow cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Confirmar solicitud de demo"}
                </button>
              </form>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
}
