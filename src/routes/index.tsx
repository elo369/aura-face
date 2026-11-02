import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CameraDemo } from "@/components/landing/CameraDemo";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FaceMirror AI — Discover Your Best Look with AI" },
      { name: "description", content: "Capture a photo and receive instant AI-powered grooming and appearance insights. No signup required." },
      { property: "og:title", content: "FaceMirror AI — Discover Your Best Look with AI" },
      { property: "og:description", content: "Instant AI face analysis with grooming and hairstyle suggestions. Private by design." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatedBackground />
      <div className="relative">
        <Nav />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <CameraDemo />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
