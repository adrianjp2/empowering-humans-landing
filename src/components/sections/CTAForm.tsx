"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, Send, AlertCircle } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  tamanoEmpresa: string;
  aceptaPolitica: boolean;
}

export default function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Hubo un error al procesar la solicitud.");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: unknown) {
      console.error("Error al enviar solicitud:", err);
      const message = err instanceof Error ? err.message : "Error inesperado al enviar los datos.";
      setSubmitError(message);
    }
  };

  return (
    <section id="demo" className="relative py-16 sm:py-28 bg-transparent overflow-hidden text-center">
      {/* Línea roja vertical decorativa superior como en la propuesta PDF */}
      <div className="w-[2px] h-12 sm:h-16 bg-gradient-to-b from-transparent to-[#ff4d6d] mx-auto mb-8 sm:mb-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal Centrado */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
          Tu próximo lunes, todo estará{" "}
          <span className="text-[#ff4d6d]">hecho</span> antes de llegar.
        </h2>

        {/* Subtítulo Centrado */}
        <p className="text-xs sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
          Vacaciones aprobadas, fichajes cuadrados, contratos firmados. Tu equipo se dedicará a lo que importa: las personas.
        </p>

        {/* Botón Principal CTA Solicitud Demostración */}
        {!showFormModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3.5 w-full"
          >
            <button
              onClick={() => setShowFormModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-full text-sm sm:text-base font-bold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-accent-glow hover:shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Solicitar demostración gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] sm:text-xs text-zinc-400">
              ⚡ Sin compromiso. Instalación asistida en 48 horas.
            </p>
          </motion.div>
        )}

        {/* Formulario Interactivo para capturar Lead y Enviar por Correo */}
        {showFormModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl mx-auto mt-6 text-left rounded-2xl sm:rounded-3xl bg-[#1c1e28]/95 border border-white/[0.1] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Solicita tu demostración gratuita
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1">
                  Recibe la información y agenda tu demo personalizada.
                </p>
              </div>
              <button
                onClick={() => setShowFormModal(false)}
                className="text-xs font-semibold text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-800"
              >
                ✕ Cerrar
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">¡Solicitud recibida con éxito!</h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Hemos enviado la notificación al equipo. Un especialista de RRHH se pondrá en contacto contigo en las próximas horas laborables.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-[#ff4d6d] hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5 sm:space-y-4">
                
                {submitError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Ana García"
                    {...register("nombre", { required: "El nombre es obligatorio" })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff4d6d] transition-colors"
                  />
                  {errors.nombre && (
                    <span className="text-xs text-rose-400 mt-1 block">
                      {errors.nombre.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
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
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff4d6d] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Tamaño de la empresa *
                  </label>
                  <select
                    {...register("tamanoEmpresa", {
                      required: "Selecciona el tamaño de empresa",
                    })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#ff4d6d] transition-colors"
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
                    className="mt-0.5 w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-[#ff4d6d] focus:ring-[#ff4d6d] accent-[#ff4d6d]"
                  />
                  <label htmlFor="aceptaPolitica" className="text-[11px] sm:text-xs text-zinc-400 leading-normal cursor-pointer">
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
                  className="w-full py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#ff4d6d] hover:bg-[#e63956] transition-all duration-200 shadow-accent-glow cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Enviando correo..."
                  ) : (
                    <>
                      <span>Confirmar solicitud de demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
}
