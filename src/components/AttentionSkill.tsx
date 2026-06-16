/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, Pocket, Eye, Sparkles, Star } from "lucide-react";
import { FLOATING_WORDS } from "../data";

export default function AttentionSkill() {
  return (
    <section id="habilidade-digital" className="py-20 px-4 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-brand-red-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left copy explanation column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20 inline-block">
            Habilidade Moeda de 2026
          </span>
          
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            O mercado não precisa apenas de mais criadores. <span className="text-brand-red-primary font-black">Precisa de pessoas que saibam prender atenção.</span>
          </h2>

          <div className="space-y-4 text-brand-text-sec text-xs md:text-sm leading-relaxed">
            <p>
              Criar, selecionar, adaptar e distribuir vídeos curtos de alta retenção está se consolidando como a habilidade digital mais lucrativa e demandada de 2026 para criadores de conteúdo, marcas, canais temáticos sem aparecer, lançadores de infoprodutos e especialistas em tráfego orgânico.
            </p>
            <p className="font-semibold text-white/90">
              O Método Corte Magnético™ foi desenhado para atuar como seu motor principal de tração.
            </p>
            <p>
              Você não inicia do completo zero travando em roteiros e edições. Você começa testando ganchos consolidados e formatos que já provaram reter as pessoas na tela, economizando meses de tentativas amadoras.
            </p>
          </div>

          {/* Transparent Warning block */}
          <div className="bg-neutral-900/60 rounded-2xl p-4 md:p-5 border border-brand-border flex gap-4 items-start shadow-inner">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
            <div className="space-y-1">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Aviso de Transparência</h5>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                Programas de monetização e recompensas das redes sociais possuem requisitos e políticas estritas. Os resultados variam conforme a sua consistência, região, originalidade dos conteúdos adaptados e as regras periódicas estabelecidas de forma autônoma por cada plataforma.
              </p>
            </div>
          </div>
        </div>

        {/* Right orbital interactive graphic canvas of floating words */}
        <div className="lg:col-span-6 relative aspect-square max-w-[460px] mx-auto w-full border border-brand-border rounded-[40px] bg-neutral-950/40 backdrop-blur-sm shadow-inner flex items-center justify-center overflow-hidden">
          {/* Concentric subtle circular target lines */}
          <div className="absolute w-[80%] h-[80%] border border-neutral-900 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[55%] h-[55%] border border-[dashed] border-neutral-900 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          
          {/* Glowing central indicator */}
          <div className="absolute w-16 h-16 rounded-full bg-brand-red-primary/10 blur-xl"></div>

          {/* Center Simulator Device View */}
          <div className="relative z-10 w-[140px] h-[256px] bg-neutral-900 rounded-3xl p-2 border-2 border-brand-red-primary/40 shadow-2xl shadow-black flex flex-col justify-between overflow-hidden">
            <div className="w-full h-1 bg-neutral-950 rounded-full mx-auto max-w-[40px] mb-2"></div>
            
            <div className="flex-grow bg-black rounded-xl flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
              <Eye size={24} className="text-brand-red-primary animate-pulse mb-2" />
              <span className="text-[11px] font-mono tracking-widest text-brand-red-primary font-bold">ATENÇÃO</span>
              <span className="text-[9px] text-neutral-500 font-mono mt-1">EM REPRODUÇÃO</span>
              <div className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-brand-red-primary/30 mx-3">
                <div className="w-2/3 h-full bg-brand-red-primary rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Floating and orbiting words around the phone */}
          {FLOATING_WORDS.map((item, idx) => {
            // Distribute them custom coordinates using inline math coordinates to avoid overlaps and feel aesthetic
            const angles = [0, 45, 90, 135, 180, 225, 270, 315];
            const distance = idx % 2 === 0 ? 140 : 155; // Radii
            const rad = (angles[idx] * Math.PI) / 180;
            const x = Math.round(Math.cos(rad) * distance);
            const y = Math.round(Math.sin(rad) * distance);

            return (
              <motion.div
                key={item.label}
                animate={{
                  y: [y, y - 8, y + 4, y],
                  x: [x, x + 5, x - 5, x],
                }}
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                style={{
                  position: "absolute",
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-border hover:border-brand-red-primary/40 shadow-md ${item.color} ${item.size} cursor-default font-extrabold select-none transition`}
              >
                {idx % 2 === 0 ? (
                  <Star size={10} className="text-brand-red-primary animate-spin" style={{ animationDuration: "8s" }} />
                ) : (
                  <Sparkles size={10} className="text-neutral-400" />
                )}
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
