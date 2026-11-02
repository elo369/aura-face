import { motion } from "framer-motion";
import { Camera, Aperture, Sparkles } from "lucide-react";
import { GlassCard } from "./GlassCard";

const steps = [
  { icon: Camera, title: "Open Camera", desc: "Tap Start Camera and allow access in one click." },
  { icon: Aperture, title: "Capture Photo", desc: "Frame your face and capture a clean, well-lit shot." },
  { icon: Sparkles, title: "Get AI Feedback", desc: "Instant, actionable insights on grooming and style." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
            How it works
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
            Three steps to your best look
          </h2>
        </motion.div>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div aria-hidden className="hidden md:block absolute left-0 right-0 top-10 h-px"
            style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(109,93,254,0.5), rgba(0,212,255,0.5), transparent)" }} />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                <span className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(109,93,254,0.45), transparent 70%)" }} />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <GlassCard className="mt-6 p-6 text-center">
                <div className="text-xs font-semibold tracking-widest text-foreground/60">STEP 0{i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
