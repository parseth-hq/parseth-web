import Logo from "@/components/icons/logo";
import { heroContent } from "@/data/home";
import Terminal from "@/components/global/Terminal";
import TerminalCursor from "@/components/global/TerminalCursor";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="snap-section">
      <div className="absolute top-6 left-6 md:top-10 md:left-10">
        <Logo className="h-8 md:h-10 w-auto text-primary" />
      </div>

      <div className="w-full max-w-5xl flex flex-col items-start gap-8 md:gap-10 pt-16 md:pt-0">
        <div className="flex max-w-4xl flex-col gap-4 md:gap-6">
          <h1 className="section-heading">{heroContent.title}</h1>
          <p className="section-description">{heroContent.description}</p>
        </div>
        <Terminal
          className="w-full max-w-160 text-xs sm:text-sm md:text-base"
          toggleCopy={false}
        >
          {heroContent.terminal.map((line, index) => {
            const isLastLine = index === heroContent.terminal.length - 1;
            return (
              <div key={line} className="text-secondary">
                {line}
                {isLastLine && <TerminalCursor />}
              </div>
            );
          })}
        </Terminal>
        <Link
          href={heroContent.button.link}
          className="button-secondary mt-2 md:mt-0"
        >
          {heroContent.button.text}
        </Link>
      </div>
    </section>
  );
}
