import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import {
  Zap, ScanFace, Sparkles, Scissors, Camera, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Zap, title: "Instant Analysis", desc: "Real-time AI evaluates your photo in seconds, no waiting." },
  { icon: ScanFace, title: "Face Shape Detection", desc: "Precise geometry mapping identifies your unique facial structure." },
  { icon: Sparkles, title: "Grooming Suggestions", desc: "Personalized tips for beard, skin, and styling that fit your features." },
  { icon: Scissors, title: "Hairstyle Recommendations", desc: "Discover cuts and styles tailored to your face shape." },
  { icon: Camera, title: "Photo Feedback", desc: "Improve angles, lighting, and composition for better photos." },
  { icon: ShieldCheck, title: "Privacy First", desc: "Your photo is processed on-device. Nothing stored, ever." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
            Everything you need to look your best
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A premium AI toolkit built around your face — fast, private, and remarkably accurate.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <GlassCard className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundImage: "linear-gradient(135deg, rgba(109,93,254,0.25), rgba(168,85,247,0.25))" }}>
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
