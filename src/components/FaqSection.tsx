/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 px-4 bg-brand-bg relative overflow-hidden">
      {/* Decorative vertical alignment red point */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-red-primary/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            Perguntas <span className="text-brand-red-primary">Respondidas</span>
          </h2>
          <p className="text-brand-text-sec text-xs md:text-sm">
            Tem alguma dúvida sobre como funciona o ViralCut 2026? Encontre as respostas rápidas abaixo.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-[#FF1F3D]/25 transition"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-brand-red-primary shrink-0">
                      <HelpCircle size={18} />
                    </span>
                    <span className="font-semibold text-sm md:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-neutral-500 shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-brand-border py-4 px-6 text-brand-text-sec text-xs md:text-sm leading-relaxed bg-brand-bg-sec/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
