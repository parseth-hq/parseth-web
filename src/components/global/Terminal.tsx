"use client";

import { useRef, useState } from "react";

import Check from "@/components/icons/check";
import Copy from "@/components/icons/copy";

interface TerminalProps {
  children: React.ReactNode;
  shell?: string;
  toggleCopy?: boolean;
  className?: string;
}

export default function Terminal({
  children,
  shell = "bash",
  toggleCopy = true,
  className = "",
}: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!terminalRef.current) return;

    await navigator.clipboard.writeText(terminalRef.current.innerText);

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={`group relative min-w-88 overflow-hidden rounded-[0.875rem] bg-terminal font-mono text-sm text-primary shadow-[0_8px_24px_rgba(0,0,0,0.28)] md:text-base ${className}`}
    >
      <div className="relative flex items-center justify-between bg-terminal-header px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-error" />
          <div className="size-2.5 rounded-full bg-warning" />
          <div className="size-2.5 rounded-full bg-success" />
        </div>

        {/* Shell */}

        <div
          className={`text-xs transition-colors duration-300 ${
            toggleCopy
              ? "text-secondary group-hover:text-terminal-header"
              : "text-secondary"
          }`}
        >
          {shell}
        </div>

        {/* Copy */}

        {toggleCopy && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy terminal contents"
            className="absolute top-3 right-4 flex items-center justify-center text-secondary opacity-0 transition-all duration-300 hover:text-primary group-hover:opacity-100"
          >
            <div className="relative size-4">
              <Copy
                className={`absolute inset-0 size-4 transition-opacity duration-200 ${
                  copied ? "opacity-0" : "opacity-100"
                }`}
              />

              <Check
                className={`absolute inset-0 size-4 transition-opacity duration-200 ${
                  copied ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </button>
        )}
      </div>

      {/* Content */}

      <div ref={terminalRef} className="flex flex-col gap-2 p-8">
        {children}
      </div>
    </div>
  );
}
