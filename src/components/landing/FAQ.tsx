import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Do I need to sign up?", a: "Nope. FaceMirror works instantly — no account, no email, no friction." },
  { q: "Is my photo stored anywhere?", a: "No. Photos are processed in your browser and discarded immediately after analysis." },
  { q: "What devices are supported?", a: "Any modern phone, tablet, or computer with a camera and a current browser." },
  { q: "How accurate is the AI?", a: "Our model is trained on millions of facial features and continually improving. Feedback is suggestive, not medical." },
  { q: "Is FaceMirror free?", a: "Yes — the core experience is completely free to use." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="mt-12 glass rounded-2xl p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-white/10 last:border-b-0">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline px-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
