import { motion, useMotionValue } from "motion/react";
import { useRef, useEffect, useCallback } from "react";
import brightMarketing from "../assets/images/bright_marketing.png";
import newBawarchi from "../assets/images/himsas_kitchen.png";
import helpWalla from "../assets/images/help_walla.png";
import argusSolutions from "../assets/images/argus_solutions.png";
import icyNaturals from "../assets/images/icy_naturals.png";
import himsasKitchenCafe from "../assets/images/himsas_kitchen_cafe.png";
import karaWomensWear from "../assets/images/kara_womens_wear.png";
import isleEscapes from "../assets/images/isle_escapes.png";
import sriKrishnaSchool from "../assets/images/sri_krishna_school.png";
import jewelPatakha from "../assets/images/jewel_patakha.png";
import prasthan10 from "../assets/images/prasthan_10.png";
import upariManzil from "../assets/images/upari_manzil.png";
import niviware from "../assets/images/niviware.png";
import yaanaaiDesign from "../assets/images/yaanaai_design.png";
import udaipuri from "../assets/images/udaipuri.png";
import bulbLogo from "../assets/images/bulb_logo.png";

const topRowLogos = [
  brightMarketing, newBawarchi, helpWalla, argusSolutions,
  icyNaturals, himsasKitchenCafe, karaWomensWear, isleEscapes,
];

const bottomRowLogos = [
  sriKrishnaSchool, jewelPatakha, prasthan10, upariManzil,
  niviware, yaanaaiDesign, udaipuri, bulbLogo,
];

const allLogos = [...topRowLogos, ...bottomRowLogos];

function getLogoAlt(src: string): string {
  const filename = src.split('/').pop() || "";
  const nameWithoutHash = filename.split('-')[0] || filename;
  const cleanName = nameWithoutHash
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/_/g, " ")       // replace underscores with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // capitalize words
  return cleanName ? `${cleanName} Brand Logo` : "Client Brand Logo";
}

/* ------------------------------------------------------------------ */
/*  Reusable Draggable Marquee with auto-scroll + drag interaction    */
/* ------------------------------------------------------------------ */
function DraggableMarquee({
  logos,
  speed = 50,
  direction = "left",
  cardClass,
  imgClass,
  gapClass = "gap-5 sm:gap-8",
}: {
  logos: string[];
  speed?: number;
  direction?: "left" | "right";
  cardClass: string;
  imgClass: string;
  gapClass?: string;
}) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartVal = useRef(0);
  const setWidth = useRef(0);
  const rafId = useRef(0);
  const prevTime = useRef(0);

  const quadLogos = [...logos, ...logos, ...logos, ...logos];

  // Wrap x into seamless range
  const wrap = useCallback((v: number) => {
    const sw = setWidth.current;
    if (sw <= 0) return v;
    while (v < -2 * sw) v += sw;
    while (v > 0) v -= sw;
    return v;
  }, []);

  // Measure one set width & init position
  useEffect(() => {
    if (trackRef.current) {
      setWidth.current = trackRef.current.scrollWidth / 4;
      if (direction === "right") x.set(-setWidth.current);
    }
  }, [direction, x]);

  // RAF-based auto-scroll
  useEffect(() => {
    const tick = (time: number) => {
      if (!prevTime.current) prevTime.current = time;
      const dt = time - prevTime.current;
      prevTime.current = time;

      if (!isDragging.current && setWidth.current > 0) {
        const px = (speed * dt) / 1000;
        x.set(wrap(x.get() + (direction === "left" ? -px : px)));
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [speed, direction, x, wrap]);

  // Pointer handlers
  const onDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartVal.current = x.get();
  };
  const onMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    x.set(dragStartVal.current + (e.clientX - dragStartX.current));
  };
  const onUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    x.set(wrap(x.get()));
  };

  return (
    <div
      className="flex whitespace-nowrap overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ touchAction: "pan-y" }}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onPointerCancel={onUp}
        className={`flex ${gapClass} items-center flex-shrink-0 select-none`}
      >
        {quadLogos.map((src, i) => (
          <div key={i} className={cardClass}>
            <img src={src} loading="lazy" draggable={false} className={imgClass} alt={getLogoAlt(src)} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */
export default function MarqueeSection() {
  return (
    <section aria-label="Brands and Clients" className="bg-[#0C0C0C] flex flex-col justify-center overflow-hidden pt-20 pb-24 sm:py-32 md:py-40 relative rounded-t-[40px] sm:rounded-t-[60px] z-10 border-t border-white/5">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-28 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-['Caveat'] text-2xl sm:text-3xl md:text-5xl text-[#FF8A00] mb-1 md:mb-4">
            Brands that trust my vision
          </p>
          <h2 className="hero-heading font-black uppercase text-5xl sm:text-6xl md:text-[clamp(2.5rem,10vw,140px)] leading-[0.85] text-[#D7E2EA] font-display tracking-tighter">
            Trusted By
          </h2>
        </motion.div>
      </div>

      {/* ===== DESKTOP: Dual Infinity Wall (md+) ===== */}
      <div className="hidden md:flex w-full relative flex-col gap-8">
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-l from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent z-20 pointer-events-none" />

        <DraggableMarquee
          logos={topRowLogos}
          speed={80}
          direction="left"
          gapClass="gap-8"
          cardClass="flex-shrink-0 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-[#FF8A00]/20 rounded-3xl px-10 md:px-14 py-6 h-28 md:h-32 min-w-[260px] md:min-w-[320px] flex items-center justify-center group cursor-pointer transition-all duration-500"
          imgClass="max-h-16 md:max-h-20 max-w-[85%] w-auto object-contain transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(255,138,0,0.25)] brightness-[1.3] group-hover:brightness-100"
        />
        <DraggableMarquee
          logos={bottomRowLogos}
          speed={65}
          direction="right"
          gapClass="gap-8"
          cardClass="flex-shrink-0 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-[#FF8A00]/20 rounded-3xl px-10 md:px-14 py-6 h-28 md:h-32 min-w-[260px] md:min-w-[320px] flex items-center justify-center group cursor-pointer transition-all duration-500"
          imgClass="max-h-16 md:max-h-20 max-w-[85%] w-auto object-contain transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(255,138,0,0.25)] brightness-[1.3] group-hover:brightness-100"
        />
      </div>

      {/* ===== MOBILE: Single strip, full-color (below md) ===== */}
      <div className="md:hidden w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0C0C0C] to-transparent z-20 pointer-events-none" />

        <DraggableMarquee
          logos={allLogos}
          speed={70}
          direction="left"
          gapClass="gap-4"
          cardClass="flex-shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-3 h-[72px] min-w-[140px] flex items-center justify-center"
          imgClass="max-h-10 max-w-[90%] w-auto object-contain opacity-80 brightness-[1.2]"
        />
      </div>
    </section>
  );
}
