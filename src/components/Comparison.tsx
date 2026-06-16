/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { X, Check, Flame, HelpCircle } from "lucide-react";
import { COMP_DO_ZERO, COMP_VIRAL_CUT } from "../data";

export default function Comparison() {
  return (
    <section id="comparativo" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20"
        >
          O Atalho para Criadores em 2026
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight"
        >
          Enquanto algumas pessoas apenas assistem, outras <span className="text-brand-red-primary">transformam atenção</span> em oportunidade.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-text-sec text-sm md:text-md max-w-2xl mx-auto"
        >
          Vídeos verticais fazem parte da rotina diária de milhões de pessoas. O problema é que a maioria não sabe o que publicar, não sabe editar ou perde horas valiosas procurando e cortando materiais. O Método Corte Magnético™ foi desenvolvido do zero para eliminar essa barreira.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
        {/* Card 1 - Hard Way */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-card/60 backdrop-blur-sm border border-brand-border rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 hover:border-[#FF1F3D]/20 transition"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-brand-border flex items-center justify-center text-red-400">
                <X size={20} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide text-neutral-500 font-mono">Processo Lento</span>
                <h3 className="text-white font-bold text-lg">Fazendo tudo do zero</h3>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              O método tradicional que consome seu bem mais precioso: o tempo. Exige habilidades técnicas avançadas de edição e horas de pesquisa cansativa na internet.
            </p>

            <ul className="space-y-4">
              {COMP_DO_ZERO.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                  <span className="mt-0.5 text-neutral-600 shrink-0">
                    <X size={16} />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-800/40 text-xs text-neutral-500 text-center italic">
            Sem previsibilidade de formato ou retorno de atenção
          </div>
        </motion.div>

        {/* Card 2 - Premium ViralCut Way */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-brand-card border-2 border-brand-red-primary rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 shadow-[0_0_40px_rgba(255,31,61,0.06)]"
        >
          {/* Badge "CAMINHO MAIS RÁPIDO" */}
          <div className="absolute -top-4 right-6 md:right-8 bg-brand-red-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-brand-red-primary/20">
            <Flame size={12} className="animate-pulse fill-white" />
            CAMINHO MAIS RÁPIDO
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red-primary/10 border border-brand-red-primary/30 flex items-center justify-center text-brand-red-primary">
                <Check size={20} className="stroke-[3px]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide text-brand-red-primary font-mono font-bold">Estrutura Pronta</span>
                <h3 className="text-white font-bold text-lg">Com o ViralCut 2026</h3>
              </div>
            </div>

            <p className="text-xs text-brand-text-sec leading-relaxed mb-6">
              Acesso instantâneo a milhares de arquivos em alta definição, já lapidados por profissionais para reter o público nos ganchos cruciais.
            </p>

            <ul className="space-y-4">
              {COMP_VIRAL_CUT.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white text-sm">
                  <span className="mt-0.5 text-brand-red-primary shrink-0">
                    <Check size={16} className="stroke-[3px]" />
                  </span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-brand-red-primary/10 text-xs text-brand-red-primary/80 font-mono text-center font-bold">
            Consistência imediata e escala de publicação em minutos
          </div>
        </motion.div>
      </div>
    </section>
  );
}
