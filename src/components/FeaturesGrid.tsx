/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  Sparkles, 
  Flame, 
  Layers, 
  Folder, 
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { LIBRARY_FEATURES } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={22} className="text-brand-red-primary" />,
  Sparkles: <Sparkles size={22} className="text-brand-red-primary" />,
  Flame: <Flame size={22} className="text-brand-red-primary" />,
  Layers: <Layers size={22} className="text-brand-red-primary" />,
  Folder: <Folder size={22} className="text-brand-red-primary" />,
  Smartphone: <Smartphone size={22} className="text-brand-red-primary" />
};

export default function FeaturesGrid() {
  return (
    <section id="recursos" className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-red-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20"
        >
          Estrutura do Kit ViralCut
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight"
        >
          Mais de <span className="text-brand-red-primary">5.000 possibilidades</span> de conteúdo em um único acesso.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-text-sec text-sm max-w-2xl mx-auto"
        >
          Todo material que você precisa para alavancar sua presença digital nas redes mais quentes do momento, já cortado, filtrado e empacotado.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LIBRARY_FEATURES.map((feature, idx) => {
          const formattedNum = String(idx + 1).padStart(2, "0");
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-brand-card border border-brand-border hover:border-brand-red-primary/40 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all duration-300 relative group overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,31,61,0.04)]"
            >
              {/* Subtle grid background accent */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              {/* Subtle glow filter inside card corner on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {idx === 1 && (
                <div className="absolute top-3 right-3 bg-brand-red-primary text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded text-white z-10 shadow-lg">
                  EXCLUSIVO
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-brand-border flex items-center justify-center text-brand-red-primary">
                    {iconMap[feature.iconName] || <CheckCircle2 size={20} />}
                  </div>
                  <span className="text-brand-red-primary font-mono text-sm tracking-tighter font-bold">
                    {formattedNum}
                  </span>
                </div>
                
                <h3 className="text-white font-extrabold text-base md:text-lg tracking-tight group-hover:text-brand-red-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-brand-text-sec text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/40 text-[10px] text-neutral-500 font-mono flex items-center gap-1.5 group-hover:text-brand-red-primary/60 transition-colors">
                <CheckCircle2 size={10} className="text-brand-red-primary" /> Liberação imediata no painel
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
