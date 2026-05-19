import Link from "next/link";
import { closingContent } from "@/data/home";
import Footer from "./Footer";

export default function ClosingSection() {
  return (
    <section className="snap-section border-subtle border-t gap-4 sm:gap-6 md:gap-8">
      <span className="section-eyebrow">{closingContent.eyebrow}</span>

      <div className="flex max-w-4xl flex-col gap-2 md:gap-6">
        <h1 className="section-heading">{closingContent.title}</h1>
        <p className="section-description">{closingContent.description}</p>
      </div>

      <div className="mt-4 md:mt-8 flex flex-col items-start gap-3">
        <Link href={closingContent.cta.link} className="button-primary">
          {closingContent.cta.text}
        </Link>

        <span className="text-left text-xs leading-relaxed text-muted">
          {closingContent.cta.subtext}
        </span>
      </div>

      <Footer />
    </section>
  );
}
