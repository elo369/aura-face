import { ScanFace } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }}>
            <ScanFace className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-semibold">FaceMirror AI</span>
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FaceMirror AI</p>
      </div>
    </footer>
  );
}
