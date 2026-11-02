import { motion } from "framer-motion";
import { Camera, PlayCircle, ScanFace, Sparkles, ShieldCheck } from "lucide-react";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
              <Sparkles className="h-3.5 w-3.5 text-[#00D4FF]" />
              Powered by next-gen face AI
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              <span className="text-gradient">Discover Your</span><br />
              <span className="text-foreground">Best Look with AI</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Capture a photo and receive instant AI-powered grooming and appearance insights. No signup, no fuss.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <GradientButton>
                <Camera className="h-4 w-4" />
                Start Camera
              </GradientButton>
              <GradientButton variant="ghost">
                <PlayCircle className="h-4 w-4" />
                See Demo
              </GradientButton>
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#00D4FF]" /> Private by design</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>No account needed</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Free</span>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-70"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(109,93,254,0.45), transparent 60%)" }} />

            <GlassCard strong className="relative p-6 animate-float">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10"
                style={{ background: "linear-gradient(160deg, #1a1f33, #0b0f19)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ScanFace className="h-48 w-48 text-white/20" strokeWidth={1} />
                </div>
                {/* concentric pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute h-40 w-40 rounded-full border border-[#6D5DFE]/40" style={{ animation: "pulse-ring 2.6s ease-out infinite" }} />
                  <span className="absolute h-40 w-40 rounded-full border border-[#00D4FF]/40" style={{ animation: "pulse-ring 2.6s ease-out 1.3s infinite" }} />
                </div>
                {/* scan line */}
                <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-24 animate-scan"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45), transparent)" }} />
                </div>
                {/* corner brackets */}
                {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((p) => (
                  <span key={p} className={`absolute h-7 w-7 ${p}`} style={{ borderColor: "#00D4FF" }} />
                ))}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-xs text-white/90">
                  Scanning face geometry…
                </div>
              </div>
            </GlassCard>

            {/* floating mini cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -left-4 sm:-left-10 top-12 hidden sm:block"
            >
              <GlassCard className="px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Face Shape</div>
                <div className="text-sm font-semibold text-gradient">Oval • 94%</div>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-4 sm:-right-10 bottom-16 hidden sm:block"
            >
              <GlassCard className="px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Symmetry</div>
                <div className="text-sm font-semibold text-gradient">High</div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
