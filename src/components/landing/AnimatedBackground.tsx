import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,93,254,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,212,255,0.18),transparent_55%)]" />
      <motion.div
        className="absolute -top-32 -left-32 h-105 w-105 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(109,93,254,0.55), transparent 60%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-120 w-120 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.45), transparent 60%)" }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-90 w-90 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.35), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
