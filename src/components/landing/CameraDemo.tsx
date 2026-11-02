// import { motion } from "framer-motion";
// import { Camera, Check, ScanFace } from "lucide-react";
// import { GlassCard } from "./GlassCard";
// import { GradientButton } from "./GradientButton";

// const feedback = [
//   "Strong facial symmetry",
//   "Oval face shape",
//   "Consider shorter side haircut",
//   "Better lighting can improve photos",
// ];

// export function CameraDemo() {

  
//   return (
//     <section id="demo" className="relative py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
//             Live demo
//           </span>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
//             See FaceMirror in action
//           </h2>
//           <p className="mt-4 text-muted-foreground">A glimpse of the real-time analysis you'll experience.</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-14"
//         >
//           <GlassCard strong className="overflow-hidden p-4 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Camera preview */}
//               <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10"
//                 style={{ background: "linear-gradient(160deg, #1a1f33, #0b0f19)" }}>
//                 {/* Face outline */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <ScanFace className="h-40 w-40 text-white/15" strokeWidth={1} />
//                 </div>
//                 {/* Scan line */}
//                 <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
//                   <div className="absolute inset-x-0 h-24 animate-scan"
//                     style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45), transparent)" }} />
//                 </div>
//                 {/* Corner brackets */}
//                 {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((p) => (
//                   <span key={p} className={`absolute h-6 w-6 ${p}`} style={{ borderColor: "#00D4FF" }} />
//                 ))}
//                 {/* Status pill */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-xs text-white/90 flex items-center gap-2">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75 animate-ping" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4FF]" />
//                   </span>
//                   Analyzing
//                 </div>
//                 {/* Capture button */}
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
//                   <button aria-label="Capture" className="group relative h-16 w-16 rounded-full glass-strong p-1">
//                     <span className="block h-full w-full rounded-full border-2 border-white/40 transition group-hover:scale-95"
//                       style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }} />
//                   </button>
//                 </div>
//               </div>

//               {/* Feedback panel */}
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-2 text-sm text-foreground/80">
//                   <Camera className="h-4 w-4" />
//                   AI Feedback
//                 </div>
//                 <div className="mt-4 space-y-3">
//                   {feedback.map((f, i) => (
//                     <motion.div
//                       key={f}
//                       initial={{ opacity: 0, x: 10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
//                       className="glass flex items-center gap-3 rounded-xl px-4 py-3"
//                     >
//                       <span className="flex h-7 w-7 items-center justify-center rounded-full"
//                         style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
//                         <Check className="h-4 w-4 text-white" />
//                       </span>
//                       <span className="text-sm text-foreground/95">{f}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-6 grid grid-cols-3 gap-3">
//                   {[{ k: "Symmetry", v: "94%" }, { k: "Shape", v: "Oval" }, { k: "Lighting", v: "Good" }].map((m) => (
//                     <div key={m.k} className="glass rounded-xl p-3 text-center">
//                       <div className="text-xs text-muted-foreground">{m.k}</div>
//                       <div className="mt-1 text-lg font-semibold text-gradient">{m.v}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-auto pt-6">
//                   <GradientButton className="w-full sm:w-auto">Try It Now</GradientButton>
//                 </div>
//               </div>
//             </div>
//           </GlassCard>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// --------------------------------------------2--------------

// import { useRef, useState, useCallback } from "react";
// import { motion } from "framer-motion";
// import { Camera, Check, ScanFace } from "lucide-react";
// import { GlassCard } from "./GlassCard";
// import { GradientButton } from "./GradientButton";

// const feedback = [
//   "Strong facial symmetry",
//   "Oval face shape",
//   "Consider shorter side haircut",
//   "Better lighting can improve photos",
// ];

// export function CameraDemo() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const streamRef = useRef<MediaStream | null>(null);
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const startCamera = useCallback(async () => {
//     try {
//       setError(null);
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user" },
//       });
//       streamRef.current = stream;
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         await videoRef.current.play();
//       }
//       setIsCameraOn(true);
//     } catch (err) {
//       setError("Camera access denied or unavailable.");
//       console.error(err);
//     }
//   }, []);

//   const stopCamera = useCallback(() => {
//     streamRef.current?.getTracks().forEach((track) => track.stop());
//     streamRef.current = null;
//     setIsCameraOn(false);
//   }, []);

//   const handleCapture = useCallback(async () => {
//     if (!isCameraOn) {
//       await startCamera();
//       return;
//     }

//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     if (!video || !canvas) return;

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     const dataUrl = canvas.toDataURL("image/png");
//     setCapturedImage(dataUrl);

//     stopCamera();
//   }, [isCameraOn, startCamera, stopCamera]);

//   const handleRetake = useCallback(() => {
//     setCapturedImage(null);
//     startCamera();
//   }, [startCamera]);

//   return (
//     <section id="demo" className="relative py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
//             Live demo
//           </span>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
//             See FaceMirror in action
//           </h2>
//           <p className="mt-4 text-muted-foreground">A glimpse of the real-time analysis you'll experience.</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-14"
//         >
//           <GlassCard strong className="overflow-hidden p-4 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Camera preview */}
//               <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10"
//                 style={{ background: "linear-gradient(160deg, #1a1f33, #0b0f19)" }}>

//                 {/* Live video feed */}
//                 <video
//                   ref={videoRef}
//                   className={`absolute inset-0 h-full w-full object-cover ${isCameraOn ? "block" : "hidden"}`}
//                   muted
//                   playsInline
//                 />

//                 {/* Captured photo */}
//                 {capturedImage && (
//                   <img
//                     src={capturedImage}
//                     alt="Captured"
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 )}

//                 {/* Hidden canvas used for capturing frames */}
//                 <canvas ref={canvasRef} className="hidden" />

//                 {/* Placeholder face outline (shown when camera is off and no photo) */}
//                 {!isCameraOn && !capturedImage && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <ScanFace className="h-40 w-40 text-white/15" strokeWidth={1} />
//                   </div>
//                 )}

//                 {/* Scan line (only while camera is actively previewing) */}
//                 {isCameraOn && !capturedImage && (
//                   <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
//                     <div className="absolute inset-x-0 h-24 animate-scan"
//                       style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45), transparent)" }} />
//                   </div>
//                 )}

//                 {/* Corner brackets */}
//                 {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((p) => (
//                   <span key={p} className={`absolute h-6 w-6 ${p}`} style={{ borderColor: "#00D4FF" }} />
//                 ))}

//                 {/* Status pill */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-xs text-white/90 flex items-center gap-2">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75 animate-ping" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4FF]" />
//                   </span>
//                   {capturedImage ? "Captured" : isCameraOn ? "Analyzing" : "Ready"}
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <div className="absolute bottom-24 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-2 text-xs text-red-300 max-w-[80%] text-center">
//                     {error}
//                   </div>
//                 )}

//                 {/* Capture / Retake button */}
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
//                   <button
//                     aria-label={capturedImage ? "Retake" : "Capture"}
//                     onClick={capturedImage ? handleRetake : handleCapture}
//                     className="group relative h-16 w-16 rounded-full glass-strong p-1"
//                   >
//                     <span className="block h-full w-full rounded-full border-2 border-white/40 transition group-hover:scale-95"
//                       style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }} />
//                   </button>
//                 </div>
//               </div>

//               {/* Feedback panel */}
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-2 text-sm text-foreground/80">
//                   <Camera className="h-4 w-4" />
//                   AI Feedback
//                 </div>
//                 <div className="mt-4 space-y-3">
//                   {feedback.map((f, i) => (
//                     <motion.div
//                       key={f}
//                       initial={{ opacity: 0, x: 10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
//                       className="glass flex items-center gap-3 rounded-xl px-4 py-3"
//                     >
//                       <span className="flex h-7 w-7 items-center justify-center rounded-full"
//                         style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
//                         <Check className="h-4 w-4 text-white" />
//                       </span>
//                       <span className="text-sm text-foreground/95">{f}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-6 grid grid-cols-3 gap-3">
//                   {[{ k: "Symmetry", v: "94%" }, { k: "Shape", v: "Oval" }, { k: "Lighting", v: "Good" }].map((m) => (
//                     <div key={m.k} className="glass rounded-xl p-3 text-center">
//                       <div className="text-xs text-muted-foreground">{m.k}</div>
//                       <div className="mt-1 text-lg font-semibold text-gradient">{m.v}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-auto pt-6">
//                   <GradientButton className="w-full sm:w-auto" onClick={handleCapture}>
//                     {isCameraOn ? "Capture" : capturedImage ? "Retake" : "Try It Now"}
//                   </GradientButton>
//                 </div>
//               </div>
//             </div>
//           </GlassCard>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// -------------------------------3---------------------------------

// import { useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, Check, ScanFace, Loader2, RefreshCw, Sparkles } from "lucide-react";
// import { GlassCard } from "./GlassCard";
// import { GradientButton } from "./GradientButton";

// // ─── Types ───────────────────────────────────────────────────────────────────

// interface AIAnalysis {
//   symmetry_score: string;   // e.g. "87%"
//   face_shape: string;       // e.g. "Oval"
//   lighting: string;         // e.g. "Good" | "Harsh" | "Dim"
//   suggestions: string[];    // 4 actionable tips
//   overall_vibe: string;     // one-liner compliment / note
// }

// type UIState = "idle" | "camera" | "captured" | "analyzing" | "done" | "error";

// // ─── Helpers ─────────────────────────────────────────────────────────────────

// async function analyzeWithClaude(base64Image: string): Promise<AIAnalysis> {
//   const response = await fetch("https://api.anthropic.com/v1/messages", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       model: "claude-sonnet-4-6",
//       max_tokens: 1000,
//       system: `You are a friendly, positive appearance coach. Analyze the face in the photo and return ONLY valid JSON — no markdown fences, no preamble — matching this exact shape:
// {
//   "symmetry_score": "<number>%",
//   "face_shape": "<shape name>",
//   "lighting": "<Good|Harsh|Dim|Mixed>",
//   "suggestions": ["<tip 1>", "<tip 2>", "<tip 3>", "<tip 4>"],
//   "overall_vibe": "<one warm sentence>"
// }
// Keep suggestions short (max 10 words each), practical, and encouraging. If the image is not a face, return the same JSON structure with "N/A" values and a friendly note in overall_vibe.`,
//       messages: [
//         {
//           role: "user",
//           content: [
//             {
//               type: "image",
//               source: {
//                 type: "base64",
//                 media_type: "image/png",
//                 data: base64Image,
//               },
//             },
//             { type: "text", text: "Please analyze this photo and return the JSON." },
//           ],
//         },
//       ],
//     }),
//   });

//   if (!response.ok) throw new Error(`API error ${response.status}`);

//   const data = await response.json();
//   const text = data.content
//     .filter((b: { type: string }) => b.type === "text")
//     .map((b: { text: string }) => b.text)
//     .join("");

//   // Strip accidental fences
//   const clean = text.replace(/```json|```/gi, "").trim();
//   return JSON.parse(clean) as AIAnalysis;
// }

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function SkeletonCard() {
//   return (
//     <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 animate-pulse">
//       <span className="flex h-7 w-7 rounded-full bg-white/10 shrink-0" />
//       <span className="h-3 flex-1 rounded bg-white/10" />
//     </div>
//   );
// }

// function MetricBadge({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="glass rounded-xl p-3 text-center">
//       <div className="text-xs text-muted-foreground">{label}</div>
//       <div className="mt-1 text-lg font-semibold text-gradient">{value}</div>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export function CameraDemo() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const streamRef = useRef<MediaStream | null>(null);

//   const [uiState, setUiState] = useState<UIState>("idle");
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // ── Camera helpers ──────────────────────────────────────────────────────────

//   const startCamera = useCallback(async () => {
//     try {
//       setError(null);
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 900 } },
//       });
//       streamRef.current = stream;
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         await videoRef.current.play();
//       }
//       setUiState("camera");
//     } catch {
//       setError("Camera access denied or unavailable.");
//       setUiState("error");
//     }
//   }, []);

//   const stopCamera = useCallback(() => {
//     streamRef.current?.getTracks().forEach((t) => t.stop());
//     streamRef.current = null;
//   }, []);

//   // ── Capture + Analyse ───────────────────────────────────────────────────────

//   const handleCapture = useCallback(async () => {
//     if (uiState === "idle" || uiState === "error") {
//       await startCamera();
//       return;
//     }

//     if (uiState === "camera") {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       if (!video || !canvas) return;

//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       // Mirror to match how the user sees themselves
//       ctx.translate(canvas.width, 0);
//       ctx.scale(-1, 1);
//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//       const dataUrl = canvas.toDataURL("image/png");
//       const base64 = dataUrl.split(",")[1];

//       setCapturedImage(dataUrl);
//       stopCamera();
//       setUiState("analyzing");

//       try {
//         const result = await analyzeWithClaude(base64);
//         setAnalysis(result);
//         setUiState("done");
//       } catch (err) {
//         console.error(err);
//         setError("Analysis failed. Please try again.");
//         setUiState("error");
//       }
//       return;
//     }

//     if (uiState === "done" || uiState === "captured") {
//       // Retake
//       setCapturedImage(null);
//       setAnalysis(null);
//       setError(null);
//       await startCamera();
//     }
//   }, [uiState, startCamera, stopCamera]);

//   // ── Derived UI values ───────────────────────────────────────────────────────

//   const isLive = uiState === "camera";
//   const isAnalyzing = uiState === "analyzing";
//   const isDone = uiState === "done";
//   const showPlaceholder = uiState === "idle" || uiState === "error";

//   const statusLabel =
//     isDone ? "Analysis complete" :
//     isAnalyzing ? "Analyzing…" :
//     isLive ? "Analyzing" :
//     "Ready";

//   const captureLabel =
//     isDone ? "Retake Photo" :
//     isLive ? "Capture" :
//     isAnalyzing ? "Processing…" :
//     "Try It Now";

//   const metrics: { k: string; v: string }[] = isDone && analysis
//     ? [
//         { k: "Symmetry", v: analysis.symmetry_score },
//         { k: "Shape",    v: analysis.face_shape },
//         { k: "Lighting", v: analysis.lighting },
//       ]
//     : [
//         { k: "Symmetry", v: "—" },
//         { k: "Shape",    v: "—" },
//         { k: "Lighting", v: "—" },
//       ];

//   // ─────────────────────────────────────────────────────────────────────────────

//   return (
//     <section id="demo" className="relative py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
//             Live demo
//           </span>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
//             See FaceMirror in action
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             Capture your photo and get instant AI-powered appearance feedback.
//           </p>
//         </motion.div>

//         {/* Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-14"
//         >
//           <GlassCard strong className="overflow-hidden p-4 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//               {/* ── Camera / Photo panel ── */}
//               <div
//                 className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10"
//                 style={{ background: "linear-gradient(160deg, #1a1f33, #0b0f19)" }}
//               >
//                 {/* Live feed */}
//                 <video
//                   ref={videoRef}
//                   className={`absolute inset-0 h-full w-full object-cover scale-x-[-1] ${isLive ? "block" : "hidden"}`}
//                   muted
//                   playsInline
//                 />

//                 {/* Captured photo */}
//                 {capturedImage && (
//                   <img
//                     src={capturedImage}
//                     alt="Captured"
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 )}

//                 {/* Hidden canvas */}
//                 <canvas ref={canvasRef} className="hidden" />

//                 {/* Placeholder */}
//                 {showPlaceholder && !capturedImage && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <ScanFace className="h-40 w-40 text-white/15" strokeWidth={1} />
//                   </div>
//                 )}

//                 {/* Scan line (camera active) */}
//                 {isLive && (
//                   <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
//                     <div
//                       className="absolute inset-x-0 h-24 animate-scan"
//                       style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45), transparent)" }}
//                     />
//                   </div>
//                 )}

//                 {/* Analysing overlay */}
//                 {isAnalyzing && (
//                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 backdrop-blur-sm">
//                     <Loader2 className="h-10 w-10 text-[#00D4FF] animate-spin" />
//                     <p className="text-sm text-white/80">AI is reviewing your photo…</p>
//                   </div>
//                 )}

//                 {/* Corner brackets */}
//                 {(["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r",
//                    "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"] as const
//                 ).map((p) => (
//                   <span key={p} className={`absolute h-6 w-6 ${p}`} style={{ borderColor: "#00D4FF" }} />
//                 ))}

//                 {/* Status pill */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-xs text-white/90 flex items-center gap-2 whitespace-nowrap">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75 animate-ping" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4FF]" />
//                   </span>
//                   {statusLabel}
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <div className="absolute bottom-24 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-2 text-xs text-red-300 max-w-[80%] text-center">
//                     {error}
//                   </div>
//                 )}

//                 {/* Capture button */}
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
//                   <button
//                     aria-label={captureLabel}
//                     onClick={handleCapture}
//                     disabled={isAnalyzing}
//                     className="group relative h-16 w-16 rounded-full glass-strong p-1 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <span
//                       className="block h-full w-full rounded-full border-2 border-white/40 transition group-hover:scale-95"
//                       style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }}
//                     />
//                   </button>
//                 </div>
//               </div>

//               {/* ── Feedback panel ── */}
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-2 text-sm text-foreground/80">
//                   {isDone ? <Sparkles className="h-4 w-4 text-[#00D4FF]" /> : <Camera className="h-4 w-4" />}
//                   {isDone ? "AI Feedback" : "AI Feedback — capture a photo to begin"}
//                 </div>

//                 {/* Overall vibe banner */}
//                 <AnimatePresence>
//                   {isDone && analysis && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.4 }}
//                       className="mt-3 glass rounded-xl px-4 py-3 text-sm text-foreground/90 italic border border-[#00D4FF]/20"
//                     >
//                       ✨ {analysis.overall_vibe}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Suggestion cards */}
//                 <div className="mt-4 space-y-3">
//                   {isAnalyzing && Array.from({ length: 4 }).map((_, i) => (
//                     <SkeletonCard key={i} />
//                   ))}

//                   {!isAnalyzing && isDone && analysis && analysis.suggestions.map((tip, i) => (
//                     <motion.div
//                       key={tip}
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
//                       className="glass flex items-center gap-3 rounded-xl px-4 py-3"
//                     >
//                       <span
//                         className="flex h-7 w-7 items-center justify-center rounded-full shrink-0"
//                         style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}
//                       >
//                         <Check className="h-4 w-4 text-white" />
//                       </span>
//                       <span className="text-sm text-foreground/95">{tip}</span>
//                     </motion.div>
//                   ))}

//                   {!isAnalyzing && !isDone && (
//                     // Static placeholder cards
//                     ["Strong facial symmetry", "Oval face shape", "Consider shorter side haircut", "Better lighting can improve photos"].map((f, i) => (
//                       <motion.div
//                         key={f}
//                         initial={{ opacity: 0, x: 10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
//                         className="glass flex items-center gap-3 rounded-xl px-4 py-3 opacity-40"
//                       >
//                         <span
//                           className="flex h-7 w-7 items-center justify-center rounded-full shrink-0"
//                           style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}
//                         >
//                           <Check className="h-4 w-4 text-white" />
//                         </span>
//                         <span className="text-sm text-foreground/95">{f}</span>
//                       </motion.div>
//                     ))
//                   )}
//                 </div>

//                 {/* Metric badges */}
//                 <div className="mt-6 grid grid-cols-3 gap-3">
//                   {metrics.map((m) => (
//                     <MetricBadge key={m.k} label={m.k} value={m.v} />
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <div className="mt-auto pt-6 flex gap-3 flex-wrap">
//                   <GradientButton
//                     className="flex-1 sm:flex-none"
//                     onClick={handleCapture}
//                     disabled={isAnalyzing}
//                   >
//                     {captureLabel}
//                   </GradientButton>

//                   {isDone && (
//                     <motion.button
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       onClick={() => { setCapturedImage(null); setAnalysis(null); setUiState("idle"); }}
//                       className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition"
//                     >
//                       <RefreshCw className="h-4 w-4" />
//                       Reset
//                     </motion.button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </GlassCard>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// ----------------------------------------4-------------------------------

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Check, ScanFace, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";

interface FaceAnalysis {
  jawline: string;
  cheekbones: string;
  forehead: string;
  eyes: string;
  nose: string;
  lips: string;
}

interface StyleRecommendations {
  clothing: string;
  colors: string;
  accessories: string;
}

interface AIAnalysis {
  symmetry_score: string;
  face_shape: string;
  skin_tone: string;
  lighting: string;
  overall_vibe: string;
  face_analysis: FaceAnalysis;
  suggestions: string[];
  hairstyle_recommendations: string[];
  skincare_tips: string[];
  style_recommendations: StyleRecommendations;
  confidence_boost: string;
}
type UIState = "idle" | "camera" | "analyzing" | "done" | "error";

// ── Points to your local proxy, NOT the Anthropic API directly ───────────────
// In production, set VITE_PROXY_URL=https://yourapi.com/api/analyze
const PROXY_URL = import.meta.env.VITE_PROXY_URL ?? "http://localhost:3001/api/analyze";

async function analyzeWithClaude(base64Image: string): Promise<AIAnalysis> {
  const response = await fetch(PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ base64Image }),  // ← just send the image, server handles the rest
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error((err as any)?.error ?? `Server error ${response.status}`);
  }

  // Server returns parsed JSON directly — no extraction needed
  const analysis = await response.json();
  return analysis as AIAnalysis;
}

function SkeletonCard() {
  return (
    <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 animate-pulse">
      <span className="flex h-7 w-7 rounded-full bg-white/10 shrink-0" />
      <span className="h-3 flex-1 rounded bg-white/10" />
    </div>
  );
}

function MetricBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-3 text-center">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-semibold text-gradient">{value}</div>
    </div>
  );
}

const PLACEHOLDER_TIPS = [
  "Strong facial symmetry",
  "Oval face shape",
  "Consider shorter side haircut",
  "Better lighting can improve photos",
];

export function CameraDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [uiState, setUiState] = useState<UIState>("idle");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 900 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setUiState("camera");
    } catch {
      setError("Camera access denied or unavailable.");
      setUiState("error");
    }
  }, []);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const handleCapture = useCallback(async () => {
    if (uiState === "idle" || uiState === "error") {
      await startCamera();
      return;
    }

    if (uiState === "camera") {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL("image/png");
      const base64 = dataUrl.split(",")[1];

      setCapturedImage(dataUrl);
      stopCamera();
      setUiState("analyzing");

      try {
        const result = await analyzeWithClaude(base64);
        setAnalysis(result);
        setUiState("done");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Analysis failed. Try again.");
        setUiState("error");
      }
      return;
    }

    if (uiState === "done") {
      setCapturedImage(null);
      setAnalysis(null);
      setError(null);
      await startCamera();
    }
  }, [uiState, startCamera, stopCamera]);

  const handleReset = useCallback(() => {
    stopCamera();
    setCapturedImage(null);
    setAnalysis(null);
    setError(null);
    setUiState("idle");
  }, [stopCamera]);

  const isLive      = uiState === "camera";
  const isAnalyzing = uiState === "analyzing";
  const isDone      = uiState === "done";

  const statusLabel =
    isDone ? "Analysis complete" : isAnalyzing ? "Analyzing…" : isLive ? "Analyzing" : "Ready";

  const captureLabel =
    isDone ? "Retake Photo" : isLive ? "Capture" : isAnalyzing ? "Processing…" : "Try It Now";

  const metrics = [
  { k: "Symmetry",   v: isDone && analysis ? analysis.symmetry_score : "—" },
  { k: "Face Shape", v: isDone && analysis ? analysis.face_shape      : "—" },
  { k: "Skin Tone",  v: isDone && analysis ? analysis.skin_tone       : "—" },
];

  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
            Live demo
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
            See FaceMirror in action
          </h2>
          <p className="mt-4 text-muted-foreground">
            Capture your photo and get instant AI-powered appearance feedback.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <GlassCard strong className="overflow-hidden p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Camera panel */}
              <div
                className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10"
                style={{ background: "linear-gradient(160deg, #1a1f33, #0b0f19)" }}
              >
                <video
                  ref={videoRef}
                  className={`absolute inset-0 h-full w-full object-cover scale-x-[-1] ${isLive ? "block" : "hidden"}`}
                  muted
                  playsInline
                />
                {capturedImage && (
                  <img src={capturedImage} alt="Captured" className="absolute inset-0 h-full w-full object-cover" />
                )}
                <canvas ref={canvasRef} className="hidden" />

                {!isLive && !capturedImage && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ScanFace className="h-40 w-40 text-white/15" strokeWidth={1} />
                  </div>
                )}

                {isLive && (
                  <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
                    <div
                      className="absolute inset-x-0 h-24 animate-scan"
                      style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45), transparent)" }}
                    />
                  </div>
                )}

                {isAnalyzing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 backdrop-blur-sm">
                    <Loader2 className="h-10 w-10 text-[#00D4FF] animate-spin" />
                    <p className="text-sm text-white/80">AI is reviewing your photo…</p>
                  </div>
                )}

                {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r",
                  "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((p) => (
                  <span key={p} className={`absolute h-6 w-6 ${p}`} style={{ borderColor: "#00D4FF" }} />
                ))}

                <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-xs text-white/90 flex items-center gap-2 whitespace-nowrap">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4FF]" />
                  </span>
                  {statusLabel}
                </div>

                {error && (
                  <div className="absolute bottom-24 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-2 text-xs text-red-300 max-w-[80%] text-center">
                    {error}
                  </div>
                )}

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                  <button
                    aria-label={captureLabel}
                    onClick={handleCapture}
                    disabled={isAnalyzing}
                    className="group relative h-16 w-16 rounded-full glass-strong p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span
                      className="block h-full w-full rounded-full border-2 border-white/40 transition group-hover:scale-95"
                      style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }}
                    />
                  </button>
                </div>
              </div>

              {/* Feedback panel */}
              <div className="flex flex-col overflow-y-auto max-h-160 pr-1">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  {isDone ? <Sparkles className="h-4 w-4 text-[#00D4FF]" /> : <Camera className="h-4 w-4" />}
                  {isDone ? "AI Feedback" : "AI Feedback — capture a photo to begin"}
                </div>

                <AnimatePresence>
                  {isDone && analysis && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 glass rounded-xl px-4 py-3 text-sm text-foreground/90 italic border border-[#00D4FF]/20"
                    >
                      ✨ {analysis.overall_vibe}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Metrics */}
<div className="mt-4 grid grid-cols-3 gap-3">
  {metrics.map((m) => <MetricBadge key={m.k} label={m.k} value={m.v} />)}
</div>

{/* Skeletons */}
{isAnalyzing && (
  <div className="mt-4 space-y-3">
    {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
)}

{/* Full AI result */}
{isDone && analysis && (
  <div className="mt-4 space-y-4">

    {/* Quick Tips */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">✦ Quick Tips</p>
      <div className="space-y-2">
        {analysis.suggestions.map((tip, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
            className="glass flex items-start gap-3 rounded-xl px-4 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full shrink-0 mt-0.5"
              style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
              <Check className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm text-foreground/95 leading-snug">{tip}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Face Analysis */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">✦ Face Analysis</p>
      <div className="space-y-2">
        {Object.entries(analysis.face_analysis).map(([key, val], i) => (
          <motion.div key={key} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
            className="glass rounded-xl px-4 py-2.5 flex gap-3 items-start">
            <span className="text-xs font-semibold text-[#00D4FF] capitalize w-16 shrink-0 mt-0.5">{key}</span>
            <span className="text-xs text-foreground/80 leading-snug">{val}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Hairstyle */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">✦ Hairstyle</p>
      <div className="space-y-2">
        {analysis.hairstyle_recommendations.map((tip, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
            className="glass flex items-start gap-3 rounded-xl px-4 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full shrink-0 mt-0.5"
              style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
              <Check className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm text-foreground/95 leading-snug">{tip}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Skincare */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">✦ Skincare</p>
      <div className="space-y-2">
        {analysis.skincare_tips.map((tip, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
            className="glass flex items-start gap-3 rounded-xl px-4 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full shrink-0 mt-0.5"
              style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
              <Check className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm text-foreground/95 leading-snug">{tip}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Style */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">✦ Style</p>
      <div className="space-y-2">
        {Object.entries(analysis.style_recommendations).map(([key, val], i) => (
          <motion.div key={key} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
            className="glass rounded-xl px-4 py-2.5 flex gap-3 items-start">
            <span className="text-xs font-semibold text-[#A855F7] capitalize w-20 shrink-0 mt-0.5">{key}</span>
            <span className="text-xs text-foreground/80 leading-snug">{val}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Confidence boost */}
    <div className="rounded-xl px-4 py-4 text-sm text-center font-medium border border-[#A855F7]/30"
      style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(109,93,254,0.15))" }}>
      💪 {analysis.confidence_boost}
    </div>

  </div>
)}

{/* Placeholder when idle */}
{!isAnalyzing && !isDone && (
  <div className="mt-4 space-y-3">
    {PLACEHOLDER_TIPS.map((f, i) => (
      <motion.div key={f} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
        className="glass flex items-center gap-3 rounded-xl px-4 py-3 opacity-30">
        <span className="flex h-7 w-7 items-center justify-center rounded-full shrink-0"
          style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
          <Check className="h-4 w-4 text-white" />
        </span>
        <span className="text-sm text-foreground/95">{f}</span>
      </motion.div>
    ))}
  </div>
)}

                <div className="mt-auto pt-6 flex gap-3 flex-wrap">
                  <GradientButton className="flex-1 sm:flex-none" onClick={handleCapture} disabled={isAnalyzing}>
                    {captureLabel}
                  </GradientButton>

                  {(isDone || uiState === "error") && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={handleReset}
                      className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Reset
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}





//-----------------------advance prompt 5 ---------------------------------

// import { useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, Check, ScanFace, Loader2, RefreshCw, Sparkles, Smile, Scissors, Droplets, Shirt } from "lucide-react";
// import { GlassCard } from "./GlassCard";
// import { GradientButton } from "./GradientButton";

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface FaceAnalysis {
//   jawline: string;
//   cheekbones: string;
//   forehead: string;
//   eyes: string;
//   nose: string;
//   lips: string;
// }

// interface StyleRecommendations {
//   clothing: string;
//   colors: string;
//   accessories: string;
// }

// interface AIAnalysis {
//   symmetry_score: string;
//   face_shape: string;
//   skin_tone: string;
//   lighting: string;
//   overall_vibe: string;
//   face_analysis: FaceAnalysis;
//   suggestions: string[];
//   hairstyle_recommendations: string[];
//   skincare_tips: string[];
//   style_recommendations: StyleRecommendations;
//   confidence_boost: string;
// }

// type UIState = "idle" | "camera" | "analyzing" | "done" | "error";

// const PROXY_URL = import.meta.env.VITE_PROXY_URL ?? "http://localhost:3001/api/analyze";

// async function analyzeWithGroq(base64Image: string): Promise<AIAnalysis> {
//   const response = await fetch(PROXY_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ base64Image }),
//   });

//   if (!response.ok) {
//     const err = await response.json().catch(() => ({}));
//     throw new Error((err as any)?.error ?? `Server error ${response.status}`);
//   }

//   return await response.json() as AIAnalysis;
// }

// // ─── Sub-components ───────────────────────────────────────────────────────────
// function SkeletonCard() {
//   return (
//     <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 animate-pulse">
//       <span className="flex h-7 w-7 rounded-full bg-white/10 shrink-0" />
//       <span className="h-3 flex-1 rounded bg-white/10" />
//     </div>
//   );
// }

// function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
//   return (
//     <div className="flex items-center gap-2 mt-5 mb-2">
//       <span className="text-[#00D4FF]">{icon}</span>
//       <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">{title}</span>
//     </div>
//   );
// }

// function Chip({ text }: { text: string }) {
//   return (
//     <div className="glass flex items-start gap-2 rounded-xl px-4 py-3">
//       <span
//         className="flex h-6 w-6 mt-0.5 items-center justify-center rounded-full shrink-0"
//         style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}
//       >
//         <Check className="h-3.5 w-3.5 text-white" />
//       </span>
//       <span className="text-sm text-foreground/90 leading-snug">{text}</span>
//     </div>
//   );
// }

// function MetricBadge({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="glass rounded-xl p-3 text-center">
//       <div className="text-xs text-muted-foreground">{label}</div>
//       <div className="mt-1 text-base font-semibold text-gradient leading-tight">{value}</div>
//     </div>
//   );
// }

// const PLACEHOLDER_TIPS = [
//   "Strong facial symmetry detected",
//   "Oval face shape identified",
//   "Hairstyle recommendations ready",
//   "Personalised skincare tips awaiting",
// ];

// // ─── Main Component ───────────────────────────────────────────────────────────
// export function CameraDemo() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const streamRef = useRef<MediaStream | null>(null);

//   const [uiState, setUiState] = useState<UIState>("idle");
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const startCamera = useCallback(async () => {
//     try {
//       setError(null);
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 900 } },
//       });
//       streamRef.current = stream;
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         await videoRef.current.play();
//       }
//       setUiState("camera");
//     } catch {
//       setError("Camera access denied or unavailable.");
//       setUiState("error");
//     }
//   }, []);

//   const stopCamera = useCallback(() => {
//     streamRef.current?.getTracks().forEach((t) => t.stop());
//     streamRef.current = null;
//   }, []);

//   const handleCapture = useCallback(async () => {
//     if (uiState === "idle" || uiState === "error") { await startCamera(); return; }

//     if (uiState === "camera") {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       if (!video || !canvas) return;

//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       ctx.translate(canvas.width, 0);
//       ctx.scale(-1, 1);
//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//       const dataUrl = canvas.toDataURL("image/png");
//       const base64 = dataUrl.split(",")[1];

//       setCapturedImage(dataUrl);
//       stopCamera();
//       setUiState("analyzing");

//       try {
//         const result = await analyzeWithGroq(base64);
//         setAnalysis(result);
//         setUiState("done");
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Analysis failed. Try again.");
//         setUiState("error");
//       }
//       return;
//     }

//     if (uiState === "done") {
//       setCapturedImage(null);
//       setAnalysis(null);
//       setError(null);
//       await startCamera();
//     }
//   }, [uiState, startCamera, stopCamera]);

//   const handleReset = useCallback(() => {
//     stopCamera();
//     setCapturedImage(null);
//     setAnalysis(null);
//     setError(null);
//     setUiState("idle");
//   }, [stopCamera]);

//   const isLive      = uiState === "camera";
//   const isAnalyzing = uiState === "analyzing";
//   const isDone      = uiState === "done";

//   const statusLabel = isDone ? "Analysis complete" : isAnalyzing ? "Analyzing…" : isLive ? "Live" : "Ready";
//   const captureLabel = isDone ? "Retake Photo" : isLive ? "Capture" : isAnalyzing ? "Processing…" : "Try It Now";

//   const metrics = isDone && analysis
//     ? [
//         { k: "Symmetry", v: analysis.symmetry_score },
//         { k: "Shape",    v: analysis.face_shape },
//         { k: "Skin",     v: analysis.skin_tone },
//         { k: "Lighting", v: analysis.lighting },
//       ]
//     : [
//         { k: "Symmetry", v: "—" },
//         { k: "Shape",    v: "—" },
//         { k: "Skin",     v: "—" },
//         { k: "Lighting", v: "—" },
//       ];

//   return (
//     <section id="demo" className="relative py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
//             Live demo
//           </span>
//           <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
//             See FaceMirror in action
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             Capture your photo and get expert AI-powered appearance coaching instantly.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-14"
//         >
//           <GlassCard strong className="overflow-hidden p-4 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//               {/* ── Camera panel ── */}
//               <div
//                 className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10"
//                 style={{ background: "linear-gradient(160deg, #1a1f33, #0b0f19)" }}
//               >
//                 <video
//                   ref={videoRef}
//                   className={`absolute inset-0 h-full w-full object-cover scale-x-[-1] ${isLive ? "block" : "hidden"}`}
//                   muted playsInline
//                 />
//                 {capturedImage && (
//                   <img src={capturedImage} alt="Captured" className="absolute inset-0 h-full w-full object-cover" />
//                 )}
//                 <canvas ref={canvasRef} className="hidden" />

//                 {!isLive && !capturedImage && (
//                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//                     <ScanFace className="h-40 w-40 text-white/15" strokeWidth={1} />
//                     <p className="text-xs text-white/30 text-center px-8">
//                       Click the button below to start your AI appearance analysis
//                     </p>
//                   </div>
//                 )}

//                 {isLive && (
//                   <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
//                     <div className="absolute inset-x-0 h-24 animate-scan"
//                       style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45), transparent)" }} />
//                   </div>
//                 )}

//                 {isAnalyzing && (
//                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-sm">
//                     <Loader2 className="h-12 w-12 text-[#00D4FF] animate-spin" />
//                     <div className="text-center">
//                       <p className="text-sm text-white/90 font-medium">Analyzing your features…</p>
//                       <p className="text-xs text-white/50 mt-1">Getting personalized recommendations</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Corner brackets */}
//                 {["top-4 left-4 border-t border-l","top-4 right-4 border-t border-r",
//                   "bottom-4 left-4 border-b border-l","bottom-4 right-4 border-b border-r"].map((p) => (
//                   <span key={p} className={`absolute h-6 w-6 ${p}`} style={{ borderColor: "#00D4FF" }} />
//                 ))}

//                 {/* Status pill */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-xs text-white/90 flex items-center gap-2 whitespace-nowrap">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75 animate-ping" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4FF]" />
//                   </span>
//                   {statusLabel}
//                 </div>

//                 {error && (
//                   <div className="absolute bottom-24 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-2 text-xs text-red-300 max-w-[80%] text-center">
//                     {error}
//                   </div>
//                 )}

//                 {/* Shutter button */}
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
//                   <button
//                     aria-label={captureLabel}
//                     onClick={handleCapture}
//                     disabled={isAnalyzing}
//                     className="group relative h-16 w-16 rounded-full glass-strong p-1 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <span className="block h-full w-full rounded-full border-2 border-white/40 transition group-hover:scale-95"
//                       style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }} />
//                   </button>
//                 </div>
//               </div>

//               {/* ── Feedback panel ── */}
//               <div className="flex flex-col overflow-y-auto max-h-150 pr-1 scrollbar-thin">

//                 {/* Header */}
//                 <div className="flex items-center gap-2 text-sm text-foreground/80">
//                   {isDone ? <Sparkles className="h-4 w-4 text-[#00D4FF]" /> : <Camera className="h-4 w-4" />}
//                   {isDone ? "Your Personal AI Appearance Report" : "AI Analysis — capture a photo to begin"}
//                 </div>

//                 {/* Overall vibe */}
//                 <AnimatePresence>
//                   {isDone && analysis && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0 }}
//                       className="mt-3 rounded-xl px-4 py-3 text-sm text-foreground/90 italic border border-[#00D4FF]/30"
//                       style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.15), rgba(0,212,255,0.15))" }}
//                     >
//                       ✨ {analysis.overall_vibe}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Metrics */}
//                 <div className="mt-4 grid grid-cols-4 gap-2">
//                   {metrics.map((m) => <MetricBadge key={m.k} label={m.k} value={m.v} />)}
//                 </div>

//                 {/* Loading skeletons */}
//                 {isAnalyzing && (
//                   <div className="mt-4 space-y-3">
//                     {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
//                   </div>
//                 )}

//                 {/* Full analysis */}
//                 {isDone && analysis && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex flex-col"
//                   >
//                     {/* Face Analysis */}
//                     <SectionTitle icon={<Smile className="h-4 w-4" />} title="Face Analysis" />
//                     <div className="space-y-2">
//                       {Object?.entries(analysis.face_analysis).map(([key, val], i) => (
//                         <motion.div
//                           key={key}
//                           initial={{ opacity: 0, x: 10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.05 * i }}
//                           className="glass rounded-xl px-4 py-2.5 flex gap-3 items-start"
//                         >
//                           <span className="text-xs font-semibold text-[#00D4FF] capitalize w-16 shrink-0 mt-0.5">{key}</span>
//                           <span className="text-xs text-foreground/80 leading-snug">{val}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Quick Tips */}
//                     <SectionTitle icon={<Check className="h-4 w-4" />} title="Quick Improvement Tips" />
//                     <div className="space-y-2">
//                       {analysis.suggestions.map((tip, i) => (
//                         <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
//                           <Chip text={tip} />
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Hairstyle */}
//                     <SectionTitle icon={<Scissors className="h-4 w-4" />} title="Hairstyle Recommendations" />
//                     <div className="space-y-2">
//                       {analysis.hairstyle_recommendations.map((tip, i) => (
//                         <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
//                           <Chip text={tip} />
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Skincare */}
//                     <SectionTitle icon={<Droplets className="h-4 w-4" />} title="Skincare Tips" />
//                     <div className="space-y-2">
//                       {analysis.skincare_tips.map((tip, i) => (
//                         <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
//                           <Chip text={tip} />
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Style */}
//                     <SectionTitle icon={<Shirt className="h-4 w-4" />} title="Style Recommendations" />
//                     <div className="space-y-2">
//                       {Object.entries(analysis.style_recommendations).map(([key, val], i) => (
//                         <motion.div
//                           key={key}
//                           initial={{ opacity: 0, x: 10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.05 * i }}
//                           className="glass rounded-xl px-4 py-2.5 flex gap-3 items-start"
//                         >
//                           <span className="text-xs font-semibold text-[#A855F7] capitalize w-20 shrink-0 mt-0.5">{key}</span>
//                           <span className="text-xs text-foreground/80 leading-snug">{val}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Confidence boost */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                       className="mt-5 rounded-xl px-4 py-4 text-sm text-center font-medium border border-[#A855F7]/30"
//                       style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(109,93,254,0.15))" }}
//                     >
//                       💪 {analysis.confidence_boost}
//                     </motion.div>
//                   </motion.div>
//                 )}

//                 {/* Placeholder tips when idle */}
//                 {!isAnalyzing && !isDone && (
//                   <div className="mt-4 space-y-3">
//                     {PLACEHOLDER_TIPS.map((f, i) => (
//                       <motion.div
//                         key={f}
//                         initial={{ opacity: 0, x: 10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 + i * 0.15 }}
//                         className="glass flex items-center gap-3 rounded-xl px-4 py-3 opacity-30"
//                       >
//                         <span className="flex h-7 w-7 items-center justify-center rounded-full shrink-0"
//                           style={{ background: "linear-gradient(135deg, rgba(109,93,254,0.4), rgba(0,212,255,0.4))" }}>
//                           <Check className="h-4 w-4 text-white" />
//                         </span>
//                         <span className="text-sm text-foreground/95">{f}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Actions */}
//                 <div className="mt-6 flex gap-3 flex-wrap">
//                   <GradientButton className="flex-1 sm:flex-none" onClick={handleCapture} disabled={isAnalyzing}>
//                     {captureLabel}
//                   </GradientButton>
//                   {(isDone || uiState === "error") && (
//                     <motion.button
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       onClick={handleReset}
//                       className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition"
//                     >
//                       <RefreshCw className="h-4 w-4" /> Reset
//                     </motion.button>
//                   )}
//                 </div>
//               </div>

//             </div>
//           </GlassCard>
//         </motion.div>
//       </div>
//     </section>
//   );
// }