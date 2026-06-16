/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, VolumeX, Eye, Flame, Clock, X, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { VIDEO_CATEGORIES } from "../data";
import { VideoCategory } from "../types";

export default function StreamingPreview() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | null>(null);
  const [isPreviewDownloading, setIsPreviewDownloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const triggerDownloadSimulation = () => {
    setIsPreviewDownloading(true);
    setTimeout(() => {
      setIsPreviewDownloading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);
    }, 2000);
  };

  return (
    <section id="previa" className="py-20 bg-brand-bg-sec px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brand-red-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-brand-red-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20">
              Catálogo Organizado
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
              Veja como sua biblioteca <span className="text-brand-red-primary">será organizada</span>.
            </h2>
            <p className="text-brand-text-sec text-sm max-w-xl">
              Navegue pelas pastas e categorias prontas. Cada arquivo é disponibilizado em formato ideal para publicação direta pelo smartphone.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-3.5 py-2 rounded-xl border border-brand-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Categorias de Alta Conversão em 2026
          </div>
        </div>

        {/* Categories Grid - Streaming Row format */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {VIDEO_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="group relative cursor-pointer aspect-[9/16] rounded-2xl overflow-hidden bg-brand-card border border-brand-border hover:border-brand-red-primary transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(255,31,61,0.1)] flex flex-col justify-between p-4"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Premium Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient} opacity-80 group-hover:opacity-60 transition-opacity z-0`}></div>
              
              {/* Tiny Grid Overlay inside card */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              {/* Card top flags */}
              <div className="flex justify-between items-center relative z-10">
                <span className="text-[9px] font-mono tracking-widest font-bold bg-black/60 border border-brand-border px-2 py-1 rounded text-neutral-300">
                  {category.duration}
                </span>
                
                <span className="text-[9px] font-mono font-bold text-brand-red-primary bg-brand-red-primary/10 border border-brand-red-primary/20 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red-primary animate-pulse"></span>
                  EDITADO
                </span>
              </div>

              {/* Play symbol with hover scale */}
              <div className="flex-1 flex items-center justify-center relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-black/50 border border-neutral-700/50 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 group-hover:bg-brand-red-primary/95 group-hover:border-brand-red-primary transition-all duration-300 shadow-xl">
                  <Play size={18} className="fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Card Title & Tag Info */}
              <div className="relative z-10 space-y-2 mt-auto">
                <span className="text-[10px] font-bold text-brand-red-primary tracking-wider uppercase font-mono block">
                  {category.tag}
                </span>
                <h3 className="text-white font-extrabold text-sm md:text-base leading-tight group-hover:text-brand-red-primary transition-colors">
                  {category.title}
                </h3>
                <div className="text-[9px] text-neutral-400 font-mono flex items-center gap-1.5">
                  <Smartphone size={10} /> Toque para prévia
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portrait Mode Video Simulation Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-brand-card border border-brand-border w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-between p-6"
            >
              {/* simulated player gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${selectedCategory.gradient} opacity-90 z-0`}></div>

              {/* Simulated scan lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none"></div>

              {/* Close Button on top right */}
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setIsPreviewDownloading(false);
                }}
                className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/60 border border-neutral-700 hover:border-brand-red-primary text-white flex items-center justify-center transition"
              >
                <X size={18} />
              </button>

              {/* Status Indicator */}
              <div className="relative z-10 flex justify-between items-center text-xs">
                <span className="font-mono text-xs tracking-wider text-brand-red-primary bg-brand-red-primary/10 border border-brand-red-primary/20 px-2 py-1 rounded-full flex items-center gap-1.5 font-bold uppercase">
                  <Sparkles size={11} className="animate-spin text-brand-red-primary" /> {selectedCategory.tag}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                  <Clock size={11} /> {selectedCategory.duration}
                </span>
              </div>

              {/* Central Audio Waves Visualizer */}
              <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative">
                  {/* Bouncing Visualizer Ring */}
                  <div className="w-16 h-16 rounded-full bg-brand-red-primary/10 flex items-center justify-center border border-brand-red-primary/40 relative">
                    <Play className="fill-brand-red-primary text-brand-red-primary stroke-[1.5px] translate-x-0.5 animate-pulse" size={24} />
                    {/* Ring layers */}
                    <div className="absolute -inset-2 rounded-full border border-brand-red-primary/20 animate-ping opacity-60"></div>
                  </div>
                </div>

                <div className="space-y-2 px-4">
                  <span className="text-[10px] tracking-widest text-brand-red-primary/90 uppercase font-mono font-bold block">
                    PASTA DE CONTEÚDO
                  </span>
                  <h4 className="text-xl font-black text-white tracking-tight">
                    {selectedCategory.title}
                  </h4>
                  <p className="text-xs text-brand-text-sec">
                    Vídeos verticais de altíssima qualidade já renderizados no formato 9:16 prontos para postagem inmediata.
                  </p>
                </div>

                {/* Simulated Audio Equalizer Visual */}
                <div className="flex items-end justify-center gap-1.5 h-12 w-full max-w-[200px] bg-black/30 p-2.5 rounded-xl border border-neutral-800/40">
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '30%', animationDelay: '0.1s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '70%', animationDelay: '0.3s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '90%', animationDelay: '0.6s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '40%', animationDelay: '0.2s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '80%', animationDelay: '0.5s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '50%', animationDelay: '0.1s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '95%', animationDelay: '0.4s' }}></span>
                  <span className="w-1 bg-brand-red-primary rounded-full animate-[equalizer_0.8s_infinite_ease-in-out_alternate]" style={{ height: '35%', animationDelay: '0.7s' }}></span>
                </div>
              </div>

              {/* Bottom Actions Frame */}
              <div className="relative z-10 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-neutral-800 space-y-3.5">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                  <span>Qualidade: 1080p Ultra HD</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold"><VolumeX size={10} /> Mudo na prévia</span>
                </div>

                <div className="relative">
                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-full text-center py-3 bg-emerald-950/80 text-emerald-400 rounded-xl border border-emerald-850 text-xs font-bold font-mono flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={14} className="stroke-[2.5px]" /> 
                      LINK DE DOWNLOAD DESBLOQUEADO!
                    </motion.div>
                  ) : (
                    <button
                      onClick={triggerDownloadSimulation}
                      disabled={isPreviewDownloading}
                      className="w-full relative overflow-hidden py-3 bg-brand-red-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition flex items-center justify-center gap-2 border border-brand-red-primary"
                    >
                      {isPreviewDownloading ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                          Simulando download...
                        </>
                      ) : (
                        <>
                          Testar download no celular <ArrowRight size={13} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                <p className="text-[10px] text-center text-neutral-400 leading-normal font-sans">
                  No pacote completo ViralCut, todos os vídeos podem ser baixados instantaneamente por link na nuvem com um único clique.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes equalizer {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </section>
  );
}
