/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, MessageCircle, Share2, Play, Users, Eye, Sparkles } from "lucide-react";

interface SimulatedVideo {
  id: number;
  author: string;
  category: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  colorGrad: string;
  subtitleWords: string[];
}

const SIMULATED_VIDEOS: SimulatedVideo[] = [
  {
    id: 1,
    author: "@mentes_valiosas",
    category: "Mentalidade",
    title: "O maior erro dos iniciantes é desistir na primeira semana.",
    views: "182K",
    likes: "45.1K",
    comments: "348",
    colorGrad: "from-red-950 via-slate-900 to-black",
    subtitleWords: ["O SEGREDO", "PARA VENCER", "É REPETIR", "TODO SANTO DIA", "ATÉ DAR CERTO!"]
  },
  {
    id: 2,
    author: "@negocios_modernos",
    category: "Finanças & Carreira",
    title: "Como criar relevância em 2026 sem saber programar.",
    views: "245K",
    likes: "59.2K",
    comments: "512",
    colorGrad: "from-blue-950 via-stone-900 to-black",
    subtitleWords: ["A MAIOR", "HABILIDADE", "BEM PAGA", "DE 2026", "É PRENDER ATENÇÃO!"]
  },
  {
    id: 3,
    author: "@curiosidades_curtas",
    category: "Histórias & Fatos",
    title: "A curiosa razão pela qual este segredo ficou oculto por séculos.",
    views: "410K",
    likes: "98.7K",
    comments: "1.2K",
    colorGrad: "from-purple-950 via-zinc-900 to-black",
    subtitleWords: ["NINGUÉM", "TE CONTOU", "MAS ESTE", "FATO MUDOU", "O MUNDO INTEIRO!"]
  }
];

export default function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; left: number }[]>([]);

  const activeVideo = SIMULATED_VIDEOS[currentIndex];

  // Rotate videos every 5.5 seconds
  useEffect(() => {
    const videoTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SIMULATED_VIDEOS.length);
      setWordIndex(0);
    }, 5500);
    return () => clearInterval(videoTimer);
  }, []);

  // Rotate word highlights every 700ms inside the selected video
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => {
        const wordsCount = activeVideo.subtitleWords.length;
        return (prev + 1) % wordsCount;
      });
    }, 850);
    return () => clearInterval(wordTimer);
  }, [currentIndex, activeVideo.subtitleWords.length]);

  // Spawn floating hearts
  useEffect(() => {
    const heartTimer = setInterval(() => {
      setFloatingHearts((prev) => [
        ...prev.slice(-15), // keep last 15
        { id: Math.random(), left: Math.floor(Math.random() * 80) + 10 }
      ]);
    }, 1200);
    return () => clearInterval(heartTimer);
  }, []);

  return (
    <div id="phone-preview-container" className="relative mx-auto w-[290px] h-[580px] md:w-[320px] md:h-[640px] bg-neutral-900 rounded-[50px] p-[10px] shadow-[0_0_50px_rgba(255,31,61,0.15)] border-4 border-neutral-800 flex flex-col overflow-hidden">
      {/* Speaker and Camera Notch */}
      <div className="absolute top-[18px] left-1/2 transform -translate-x-1/2 w-32 h-[18px] bg-neutral-950 rounded-full z-30 flex items-center justify-around px-3">
        <div className="w-12 h-[3px] bg-neutral-800 rounded"></div>
        <div className="w-[8px] h-[8px] bg-brand-red-primary/40 rounded-full"></div>
      </div>

      {/* Screen area */}
      <div className="relative w-full h-full bg-black rounded-[38px] overflow-hidden flex flex-col justify-between z-10 selection:bg-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVideo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-b ${activeVideo.colorGrad} flex flex-col justify-between p-5 pt-12`}
          >
            {/* Top Info Bar */}
            <div className="flex justify-between items-center text-xs text-white/70">
              <span className="font-mono text-[10px] tracking-widest bg-red-950/80 border border-brand-red-primary/30 px-2.5 py-0.5 rounded-full text-brand-red-primary flex items-center gap-1">
                <Sparkles size={10} className="animate-pulse" /> {activeVideo.category}
              </span>
              <span className="flex items-center gap-1"><Eye size={12} /> {activeVideo.views}</span>
            </div>

            {/* Glowing sound wave simulator in center */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="absolute w-36 h-36 rounded-full bg-brand-red-primary/5 blur-3xl"></div>
              
              {/* Fake video play icon & audio lines */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/60 border border-neutral-700/50 flex items-center justify-center mb-4 text-white">
                  <Play size={18} className="fill-white translate-x-0.5 animate-pulse" />
                </div>
                
                {/* Simulated dynamic subtitles with highlight */}
                <div className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-xl border border-neutral-800 max-w-[240px]">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 mb-1">Legendas Dinâmicas</p>
                  <p className="flex flex-wrap justify-center gap-1.5 font-bold text-center leading-tight tracking-tight uppercase text-sm md:text-md">
                    {activeVideo.subtitleWords.map((word, index) => {
                      const isHighlighted = index === wordIndex;
                      return (
                        <span
                          key={index}
                          className={`transition-all duration-200 rounded px-1 transform ${
                            isHighlighted
                              ? "bg-brand-red-primary text-white scale-110 shadow-lg shadow-brand-red-primary/30"
                              : "text-neutral-300"
                          }`}
                        >
                          {word}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>

              {/* Floating hearts animation */}
              <div className="absolute left-0 right-0 bottom-4 top-0 overflow-hidden pointer-events-none">
                <AnimatePresence>
                  {floatingHearts.map((heart) => (
                    <motion.div
                      key={heart.id}
                      initial={{ opacity: 0, y: 150, scale: 0.6 }}
                      animate={{ opacity: [0, 0.9, 0], y: [150, -10], scale: [0.6, 1.1, 0.7] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2.2, ease: "easeOut" }}
                      style={{ left: `${heart.left}%` }}
                      className="absolute bottom-4 text-brand-red-primary"
                    >
                      <Heart size={14} className="fill-current" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Feed Metadata Overlay */}
            <div className="space-y-2 z-20">
              <div className="text-white">
                <h4 className="font-bold text-xs tracking-tight">{activeVideo.author}</h4>
                <p className="text-[11px] text-white/80 line-clamp-2 mt-1 font-sans">
                  {activeVideo.title}
                </p>
              </div>

              {/* Feed progress timeline */}
              <div className="relative w-full h-[3px] bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5.5, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-brand-red-primary"
                ></motion.div>
              </div>

              {/* Fake interactions bar on feed bottom */}
              <div className="flex justify-between items-center text-white/80 pt-1 text-[11px]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-brand-red-primary transition">
                    <Heart size={14} className="fill-brand-red-primary text-brand-red-primary" /> {activeVideo.likes}
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition">
                    <MessageCircle size={14} /> {activeVideo.comments}
                  </span>
                </div>
                <span className="bg-brand-red-primary/10 text-brand-red-primary border border-brand-red-primary/20 px-2 py-0.5 rounded text-[9px] font-bold tracking-tight">
                  PRONTO PARA POSTAR
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glossy overlay effect on phone glass */}
      <div className="absolute inset-0 w-full h-full rounded-[50px] bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-40"></div>
    </div>
  );
}
