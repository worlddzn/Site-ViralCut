/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Check, 
  Layers, 
  Smartphone, 
  Flame, 
  TrendingUp, 
  Sparkles, 
  Folder, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  Lock,
  Star,
  Users,
  Target,
  DollarSign,
  Tv,
  Award
} from "lucide-react";

import { 
  CHECKOUT_URL,
  HERO_BENEFITS,
  ACTIONS_AUDIENCE,
  VIRAL_CASES
} from "./data";

// Extracted widgets
import PhoneMockup from "./components/PhoneMockup";
import Comparison from "./components/Comparison";
import FeaturesGrid from "./components/FeaturesGrid";
import StepsWorkflow from "./components/StepsWorkflow";
import AttentionSkill from "./components/AttentionSkill";
import StreamingPreview from "./components/StreamingPreview";
import FaqSection from "./components/FaqSection";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isBottomOfferVisible, setIsBottomOfferVisible] = useState(false);

  const offerSectionRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if user is near the bottom offer to hide the sticky floating bar
      if (offerSectionRef.current) {
        const offsetTop = offerSectionRef.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Hide if the buyer is viewport is already inside or below the final offer
        if (scrollPosition >= offsetTop + 100) {
          setIsBottomOfferVisible(true);
        } else {
          setIsBottomOfferVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor screen layout for responsive behaviors & hover particles
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToCheckout = () => {
    if (offerSectionRef.current) {
      offerSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(CHECKOUT_URL, "_blank");
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-white overflow-hidden select-text font-sans antialiased">
      
      {/* 🔴 Desktop ambient glowing cursor spotlight tracking */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed z-50 w-64 h-64 rounded-full bg-brand-red-primary/8 blur-[100px] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      {/* Decorative absolute geometric grid lines background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* 🛡️ HEADER AREA */}
      <header id="header" className="border-b border-brand-border bg-brand-bg/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-red-primary flex items-center justify-center font-black text-white text-md tracking-tighter">
              VC
            </div>
            <span className="font-display font-extrabold text-sm tracking-wider uppercase">
              VIRAL<span className="text-brand-red-primary">CUT</span>
            </span>
            <span className="text-[10px] bg-brand-red-primary/10 text-brand-red-primary border border-brand-red-primary/20 font-mono font-bold px-2 py-0.5 rounded-full">
              2026
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-xs text-neutral-400 font-mono">
              Método Corte Magnético™
            </span>
            <button
              onClick={scrollToCheckout}
              className="bg-brand-red-primary hover:bg-brand-red-primary-dark hover:scale-105 active:scale-95 text-white font-bold text-xs tracking-wide uppercase px-4 py-2 rounded-xl transition duration-300 shadow-md shadow-brand-red-primary/20"
            >
              LIBERAR ACESSO
            </button>
          </div>
        </div>
      </header>

      {/* 🎯 1. HERO CONVERSION CONTAINER - FIRST FOLD */}
      <section id="hero" className="relative min-h-[calc(100vh-70px)] flex items-center py-10 lg:py-20 px-4 max-w-6xl mx-auto">
        <div className="hidden lg:block absolute -top-16 right-0 w-[500px] h-[500px] bg-brand-red-primary/5 blur-[150px] pointer-events-none rounded-full"></div>
        <div className="hidden lg:block absolute -left-16 bottom-0 w-[400px] h-[400px] bg-brand-red-primary/5 blur-[150px] pointer-events-none rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center relative z-10">
          
          {/* Copy Column Left */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Top Label Tag */}
            <div className="inline-flex items-center gap-2 bg-brand-red-primary/15 border border-brand-red-primary/30 text-brand-red-primary text-xs font-semibold px-4 py-1.5 rounded-full select-none">
              <Sparkles size={13} className="text-brand-red-primary animate-pulse" />
              <span>A habilidade digital que está dominando 2026</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black tracking-tight leading-none text-white font-display">
                Faça mais de <span className="text-brand-red-primary font-black">2 mil dólares</span> com cortes virais <span className="text-emerald-400">prontos e editados</span>.
              </h1>
              
              <p className="text-brand-text-sec text-sm sm:text-base md:text-md font-normal leading-relaxed max-w-xl">
                Mude de vida postando pequenos cuts magnéticos que faturam milhares de dólares. Acesse o método e receba <strong className="text-white">4.000 cortes de famosos</strong> e mais de <strong className="text-white">1.000 cortes de filmes</strong> já totalmente editados e prontos para postar e lucrar de forma facilitada.
              </p>
            </div>

            {/* Micro Benefits Badges */}
            <div className="flex flex-wrap gap-3">
              {HERO_BENEFITS.map((b) => (
                <div key={b.id} className="flex items-center gap-2 bg-neutral-900/60 border border-brand-border px-3 py-1.5 rounded-xl font-mono text-[11px] font-semibold text-neutral-300">
                  <span className="w-5 h-5 rounded-md bg-brand-red-primary/10 border border-brand-red-primary/20 text-brand-red-primary flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3px]" />
                  </span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            {/* CTA action section */}
            <div className="space-y-4 max-w-md pt-2">
              <button
                onClick={scrollToCheckout}
                className="w-full relative shadow-[0_0_35px_rgba(255,31,61,0.35)] hover:shadow-[0_0_50px_rgba(255,31,61,0.55)] py-4 px-6 bg-brand-red-primary hover:bg-brand-red-primary-dark transition-all duration-300 rounded-2xl text-white font-black text-sm md:text-base uppercase tracking-wider flex items-center justify-center gap-3 active:scale-98 animate-shine"
              >
                QUERO FATURAR EM DÓLAR COM OS CORTES
                <ArrowRight size={18} />
              </button>

              <div className="flex items-center justify-between px-2 text-[11px]">
                <span className="text-[11px] font-bold text-white tracking-tight">
                  Tudo por apenas <span className="text-brand-red-primary text-sm font-black">R$47,00</span>
                </span>
                <span className="text-neutral-400">
                  Acesso Vitalício • Pagamento único
                </span>
              </div>
            </div>

            {/* Trust Footer line */}
            <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-neutral-400 font-mono">
              <span className="flex items-center gap-1"><Lock size={12} className="text-brand-red-primary" /> Acesso simples e imediato</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Folder size={12} className="text-brand-red-primary" /> Conteúdo 100% organizado</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Users size={12} className="text-brand-red-primary" /> Ideal para total iniciantes</span>
            </div>

            {/* Description Sub-hook */}
            <p className="text-[11px] leading-relaxed text-neutral-500 max-w-xl">
              Crie seu perfil do zero, escolha uma categoria de vídeo, publique e comece a testar formatos de engajamento em plataformas como TikTok, Youtube Shorts, Instagram Reels e Kwai.
            </p>
          </div>

          {/* Interactive Smartphone Preview Column Right */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient visual circular radar */}
            <div className="absolute w-[120%] h-[120%] bg-radial-gradient from-brand-red-primary/10 via-transparent to-transparent pointer-events-none rounded-full"></div>
            <PhoneMockup />
          </div>

        </div>
      </section>

      {/* 🆚 2. SECTION OF IDENTIFICATION- COMPARING THE HARD WAY VS THE EASY VIRALCUT PACK */}
      <Comparison />

      {/* 📦 3. WHAT THE PERSON RECEIVES (6 CARDS GRID) */}
      <FeaturesGrid />

      {/* 🚀 4. HOW IT WORKS (Timeline with line scroll animation) */}
      <StepsWorkflow />

      {/* 📊 5. ESTUDOS DE CASO: CORTES QUE GERARAM MILHARES DE DÓLARES */}
      <section id="estudos-caso" className="py-20 px-4 bg-brand-bg relative overflow-hidden border-t border-brand-border">
        {/* Absolute glow points for dramatic look */}
        <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-brand-red-primary/5 blur-[120px] pointer-events-none rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-extrabold">
              ALTO FATURAMENTO CAMBIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Eles postaram os cortes prontos <br />
              e ganharam mais de <span className="text-emerald-400">Mil Dólares por vídeo</span>
            </h2>
            <p className="text-brand-text-sec text-xs md:text-sm max-w-xl mx-auto">
              Veja resultados reais obtidos através de canais utilizando vídeos exatos da nossa biblioteca. Ganhar 5x mais faturando em dólar é a mudança financeira de vida definitiva que você procura.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {VIRAL_CASES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-brand-card/70 border border-brand-border hover:border-emerald-500/40 rounded-3xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                {/* Accent corner glowing tag */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-widest font-extrabold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{item.timeframe}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-brand-border flex items-center justify-center text-emerald-400">
                      {item.sourceType === "Famoso" ? (
                        <Users size={22} className="text-brand-red-primary" />
                      ) : item.sourceType === "Filme" ? (
                        <Tv size={22} className="text-yellow-400" />
                      ) : (
                        <Award size={22} className="text-cyan-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Nicho: {item.sourceType}</span>
                      <h4 className="text-white font-extrabold text-sm md:text-base leading-tight group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Earnings stats display card */}
                  <div className="bg-neutral-950/80 rounded-2xl p-4 border border-brand-border/60 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-400 font-mono">Visualizações:</span>
                      <span className="text-xs font-bold text-white font-mono">{item.views}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-brand-border/40">
                      <span className="text-xs text-neutral-400 font-mono">Ganhos em Dólar:</span>
                      <span className="text-sm font-black text-emerald-400 font-mono">{item.earningsUsd}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-[10px] text-neutral-500 font-mono font-bold">Faturamento (BRL):</span>
                      <span className="text-xs font-black text-neutral-300 font-mono">{item.earningsBrl}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/30 text-[11px] text-neutral-400 leading-relaxed font-mono flex items-center gap-2">
                  <Check size={12} className="text-emerald-400 shrink-0" />
                  <span>Fator de Sucesso: <strong className="text-white">{item.viralFactor}</strong></span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Persuasive Notice Below Cases */}
          <div className="mt-12 text-center">
            <div
              onClick={scrollToCheckout}
              className="inline-flex flex-col md:flex-row items-center gap-3 bg-neutral-950/80 border border-brand-border hover:border-brand-red-primary/40 px-6 py-4 rounded-2xl cursor-pointer transition max-w-3xl mx-auto"
            >
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                $
              </span>
              <p className="text-xs md:text-sm text-neutral-300 text-left leading-relaxed">
                Cada um desses formatos e ganchos altamente lucrativos <strong className="text-white font-bold">já vêm 100% prontos</strong> para você copiar nas suas postagens nos canais. Você pula os erros chatos e vai direto ao faturamento cambial.
              </p>
              <div className="text-brand-red-primary font-mono text-[11px] font-black uppercase tracking-wider whitespace-nowrap flex items-center gap-1 shrink-0">
                Começar Agora <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 6. NEW DIGITAL ATTENTION SKILL CONCEPT SECTION */}
      <AttentionSkill />

      {/* 👥 6. Target Audience Identification SECTION */}
      <section id="para-quem" className="py-20 px-4 bg-brand-bg-sec border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-brand-red-primary uppercase bg-brand-red-primary/10 px-3.5 py-1.5 rounded-full border border-brand-red-primary/20">
              Público Alvo
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              O ViralCut foi feito para quem quer <span className="text-brand-red-primary">começar sem complicação</span>.
            </h2>
            <p className="text-brand-text-sec text-xs md:text-sm max-w-xl mx-auto">
              Seja você um completo amador buscando criar canais temáticos ou um profissional querendo aumentar o volume de publicações.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIONS_AUDIENCE.map((item) => (
              <div 
                key={item.id} 
                className="bg-brand-card border border-brand-border rounded-2xl p-6 space-y-4 hover:border-brand-red-primary/30 transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red-primary/10 border border-brand-red-primary/20 flex items-center justify-center text-brand-red-primary">
                    <Target size={18} />
                  </div>
                  <h3 className="text-white font-extrabold text-sm md:text-base tracking-tight">{item.title}</h3>
                  <p className="text-brand-text-sec text-xs leading-relaxed">{item.description}</p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 font-mono text-[9px] text-brand-red-primary uppercase font-bold">
                  <span className="w-1 h-1 rounded-full bg-brand-red-primary animate-ping"></span>
                  Ideal para você
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎞️ 7. PREVIEW OF THE LATEST EXPENDABLES (NETFLIX GRID CATEGORIES) */}
      <StreamingPreview />

      {/* 🏷️ 8. SPECIAL FINAL OFFER CHECKOUT BOX CARD */}
      <section id="oferta-final" ref={offerSectionRef} className="py-24 px-4 bg-black relative overflow-hidden">
        
        {/* Glow focused point */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-red-primary/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="bg-brand-card/70 border-2 border-brand-red-primary rounded-[36px] p-6 sm:p-10 lg:p-16 flex flex-col items-center text-center space-y-8 shadow-[0_0_50px_rgba(255,31,61,0.12)]">
            
            <span className="text-[11px] font-mono tracking-widest font-extrabold text-brand-red-primary bg-brand-red-primary/10 border border-brand-red-primary/30 px-4 py-2 rounded-full uppercase">
              ACESSO AO PACOTE COMPLETO
            </span>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Comece com mais de 5.000 vídeos <br className="hidden md:inline" /> preparados para publicação.
              </h2>
              <p className="text-brand-text-sec text-xs sm:text-sm max-w-xl mx-auto">
                Garanta acesso vitalício à pasta mestre do ViralCut 2026. Faça as suas postagens diárias de forma instantânea sem depender de computadores lentos.
              </p>
            </div>

            {/* Checklist of what is received */}
            <div className="w-full max-w-xl bg-neutral-950/70 rounded-2xl p-5 md:p-8 border border-brand-border text-left grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>+4.000 cortes virais brutos</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>+1.000 vídeos com legendas</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>Ganchos de alta retenção</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>Atualizações futuras inclusas</span>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>Pastas filtradas por categoria</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>Arquivos em formato 9:16 HD</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>Acesso simples pelo celular</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                  <Check size={16} className="text-brand-red-primary stroke-[3px]" />
                  <span>Método Corte Magnético™</span>
                </div>
              </div>
            </div>

            {/* Price values comparisons */}
            <div className="space-y-1">
              <span className="text-neutral-500 font-mono text-sm block">Acesso vitalício completo</span>
              <div className="flex flex-col items-center justify-center">
                <span className="text-neutral-500 text-sm line-through tracking-tight">R$ 197,00</span>
                <span className="text-white text-5xl sm:text-6xl font-black font-display tracking-tighter mt-1">
                  R$ 47,00
                </span>
                <span className="text-brand-red-primary font-mono text-[11px] font-bold tracking-wide uppercase mt-2.5 bg-brand-red-primary/10 px-3 py-1 rounded-full border border-brand-red-primary/10">
                  ÚNICO PAGAMENTO • SEM MENSALIDADE
                </span>
              </div>
            </div>

            {/* Checkout Main Action Button */}
            <div className="w-full max-w-md space-y-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center shadow-[0_0_40px_rgba(255,31,61,0.3)] hover:shadow-[0_0_60px_rgba(255,31,61,0.6)] py-4.5 px-6 bg-brand-red-primary hover:bg-brand-red-primary-dark hover:scale-[1.02] active:scale-98 transition duration-300 rounded-2xl text-white font-black text-sm md:text-base uppercase tracking-wider relative overflow-hidden animate-shine"
              >
                LIBERAR MEU ACESSO AGORA <ArrowRight className="inline-block ml-1" size={16} />
              </a>
              
              <p className="text-[11px] text-neutral-400">
                Seja redirecionado para a página segura. Comece escolhendo seu primeiro vídeo hoje mesmo.
              </p>
            </div>

            {/* Payments badging graphics mockup representation */}
            <div className="pt-2 border-t border-brand-border w-full flex flex-col items-center gap-3">
              <span className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase">Formas de Pagamento Seguras</span>
              <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
                <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-lg border border-brand-border text-xs">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-bold text-white">PIX</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Imediato</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-lg border border-brand-border text-xs">
                  <span className="w-2 h-2 rounded-full bg-brand-red-primary"></span>
                  <span className="font-bold text-white">CARTÃO</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Liberado</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-lg border border-brand-border text-xs text-neutral-500">
                  <span className="font-bold text-neutral-400">BOLETO</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🛡️ 9. GUARANTEE CONFIDENCE BLOCK */}
      <section id="garantia" className="py-16 px-4 bg-brand-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-card to-neutral-950 border border-brand-border rounded-[28px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-brand-red-primary/10 border border-brand-red-primary/20 flex items-center justify-center text-brand-red-primary shrink-0 shadow-lg relative">
              <ShieldCheck size={44} className="stroke-[1.5px]" />
              <div className="absolute -inset-1 rounded-2xl border border-brand-red-primary/10 animate-pulse"></div>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="text-[10px] font-mono tracking-widest text-brand-red-primary font-bold bg-brand-red-primary/10 px-2.5 py-1 rounded-full uppercase inline-block">
                Satísfação ou Devolução
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">
                Você pode conhecer o conteúdo com tranquilidade.
              </h3>
              <p className="text-brand-text-sec text-xs md:text-sm leading-relaxed">
                Você possui o prazo oficial de garantia incondicional assegurado de <strong>7 dias</strong> após o checkout para navegar e experimentar o ViralCut. Caso o material não atenda aos critérios apresentados ou você decida que o formato não serve para sua jornada, poderá solicitar o reembolso simples diretamente na plataforma de pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ 10. FAQS - ACCORDION COLLAPSIBLES */}
      <FaqSection />

      {/* 📋 11. FOOTER & LEGAL TRADEMARK DISCLAIMERS */}
      <footer id="footer" className="bg-brand-bg-sec border-t border-brand-border pt-16 pb-24 px-4 text-xs">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="space-y-4 text-center md:text-left max-w-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-7 h-7 rounded bg-brand-red-primary flex items-center justify-center text-white font-black text-sm">
                  VC
                </div>
                <span className="font-display font-extrabold text-sm tracking-widest uppercase">
                  VIRAL<span className="text-brand-red-primary">CUT</span> 2026
                </span>
              </div>
              <p className="text-neutral-500 leading-relaxed font-sans text-[11px]">
                A maior mestre-biblioteca estruturada de cortes e vídeos curtos prontos do Brasil, impulsionados pela Metodologia de Retenção Corte Magnético™.
              </p>
            </div>

            {/* Quick links list */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] text-neutral-400">
              <a href="#hero" className="hover:text-brand-red-primary transition">Hero</a>
              <span>•</span>
              <a href="#comparativo" className="hover:text-brand-red-primary transition">Comparativo</a>
              <span>•</span>
              <a href="#recursos" className="hover:text-brand-red-primary transition">O que recebe</a>
              <span>•</span>
              <a href="#como-funciona" className="hover:text-brand-red-primary transition">Como funciona</a>
              <span>•</span>
              <a href="#faq" className="hover:text-brand-red-primary transition">FAQ</a>
            </div>
          </div>

          {/* Legal fine-text notice */}
          <div className="pt-8 border-t border-brand-border/40 text-[10px] text-neutral-500 md:text-neutral-500 leading-relaxed space-y-3 font-sans">
            <p>
              <strong>Aviso de Isenção de Ganhos:</strong> Este produto não garante retornos, renda fixa ou monetização automática. Os resultados dependem exclusivamente de seus fatores de disciplina individual, regularidade de postagem, originalidade das composições, engajamento do público e políticas próprias das plataformas digitais.
            </p>
            <p>
              TikTok, YouTube, Instagram, Kwai ou as corporações controladoras Meta, Alphabet, ByteDance e associados não possuem nenhum vínculo oficial de filiação, endosso ou coprodutos em relação a esta biblioteca e oferta comercial.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-[10px] text-neutral-600 font-mono">
              <span>© {new Date().getFullYear()} VIRALCUT 2026 • Todos os direitos reservados.</span>
              <div className="flex gap-4">
                <a href="#termos" className="hover:underline">Termos de Uso</a>
                <a href="#privacidade" className="hover:underline">Privacidade</a>
                <a href="#reembolso" className="hover:underline">Políticas de Reembolso</a>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* 🚀 12. FLOATING BOTTOM CHECKOUT ACTION ROW FOR MOBILE BUYERS */}
      <AnimatePresence>
        {scrollY > 450 && !isBottomOfferVisible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-brand-red-primary/40 px-4 py-3 pb-safe shadow-[0_-10px_30px_rgba(255,31,61,0.15)] md:hidden flex items-center justify-between gap-4"
          >
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider text-brand-red-primary font-mono font-bold">VALOR DO ACESSO</span>
              <span className="text-white text-base font-black tracking-tight flex items-baseline gap-1">
                R$ 47,00 <span className="text-[9px] text-neutral-400 line-through">R$197</span>
              </span>
            </div>
            
            <button
              onClick={scrollToCheckout}
              className="px-6 py-2.5 bg-brand-red-primary hover:bg-brand-red-primary-dark rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg shadow-brand-red-primary/20 flex items-center gap-1 leading-none"
            >
              LIBERAR ACESSO <ArrowRight size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
