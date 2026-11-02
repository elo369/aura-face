import { ScanFace } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #6D5DFE, #A855F7)" }}>
            <ScanFace className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-semibold tracking-tight">FaceMirror AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/75">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <a href="#demo" className="text-xs sm:text-sm font-medium text-white rounded-full px-4 py-1.5"
          style={{ backgroundImage: "linear-gradient(135deg, #6D5DFE, #A855F7)" }}>
          Try Free
        </a>
      </div>
    </header>
  );
}
