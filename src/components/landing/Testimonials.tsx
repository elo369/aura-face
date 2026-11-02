import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GlassCard } from "./GlassCard";

const testimonials = [
  { name: "Alex M.", role: "Product Designer", quote: "FaceMirror nailed my face shape and the haircut suggestion actually worked. Best 10 seconds I've spent." },
  { name: "Priya S.", role: "Content Creator", quote: "The lighting feedback alone leveled up my selfies. Feels like a personal stylist in my pocket." },
  { name: "Jordan T.", role: "Software Engineer", quote: "No login, no tracking — and the analysis felt scarily accurate. Love the privacy-first approach." },
];

const stats = [
  { k: "1.2M+", v: "Faces analyzed" },
  { k: "4.9/5", v: "Average rating" },
  { k: "<3s", v: "Average response" },
  { k: "100%", v: "On-device privacy" },
];

export function Testimonials() {
  return (
    <section id="loved" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
            Loved by users
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
            People can't stop talking about it
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <GlassCard className="p-5 text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#A855F7] text-[#A855F7]" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #6D5DFE, #00D4FF)" }}>
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
