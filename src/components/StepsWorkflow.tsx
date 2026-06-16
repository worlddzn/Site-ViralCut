/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Smartphone, Share2, TrendingUp, Sparkles } from "lucide-react";
import { TIMELINE_STEPS } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={22} />,
  Share2: <Share2 size={22} />,
  TrendingUp: <TrendingUp size={22} />
};

export default function StepsWorkflow() {
  return (
    <section id="como-funciona" className="py-20 bg-brand-bg-sec px-4 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red-primary/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20">
            Passo a Passo Simples
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Você pode começar em <span className="text-brand-red-primary">apenas três passos</span>.
          </h2>
          <p className="text-brand-text-sec text-xs md:text-sm max-w-xl mx-auto">
            Esqueça as dificuldades da folha em branco ou as horas perdidas na edição de vídeos complexos. Siga o fluxo validado e pragmático.
          </p>
        </div>

        {/* Steps Layout Grid / Row with central line */}
        <div className="relative md:pt-10">
          {/* Timeline continuous connecting line */}
          <div className="absolute left-[29px] md:left-1/2 top-4 bottom-4 w-1 bg-neutral-800/80 transform md:-translate-x-1/2 rounded-full hidden sm:block">
            {/* Glowing red accent progress line */}
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-brand-red-primary via-red-500 to-brand-red-primary-dark rounded-full shadow-[0_0_15px_rgba(255,31,61,0.5)]"
            ></motion.div>
          </div>

          <div className="space-y-12 md:space-y-24 relative">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.number} 
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } md:gap-16 relative pl-12 md:pl-0`}
                >
                  {/* Step Bubble Indicator */}
                  <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="w-[60px] h-[60px] rounded-full bg-brand-card border-2 border-brand-red-primary flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(255,31,61,0.2)]"
                    >
                      <span className="text-brand-red-primary">0{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Left Content Column (Empty/Offset spacer on Desktop depending on index) */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-brand-card/70 border border-brand-border hover:border-brand-red-primary/40 rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-[0_0_30px_rgba(255,31,61,0.03)] transition duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-red-primary/10 border border-brand-red-primary/20 text-brand-red-primary flex items-center justify-center">
                          {iconMap[step.iconName] || <Sparkles size={18} />}
                        </div>
                        <h3 className="text-white font-extrabold text-base md:text-lg tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-brand-text-sec text-xs md:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Column spacer */}
                  <div className="hidden md:block w-1/2 md:px-8 self-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 0.25, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-center"
                    >
                      <span className="text-8xl font-black font-mono tracking-widest text-neutral-800 selection:bg-transparent uppercase">
                        PASSO {step.number}
                      </span>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
