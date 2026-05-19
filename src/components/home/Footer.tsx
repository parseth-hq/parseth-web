import { footer } from "@/data/home";
import Mark from "@/components/icons/mark";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 inset-x-0 mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-subtle px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
      <div className="flex w-full items-center justify-between md:w-auto">
        <div className="flex items-center gap-3">
          <Mark className="h-5 w-auto text-muted opacity-70" />
          <span className="font-mono text-xs tracking-[0.08em] text-muted">
            {footer.domain}
          </span>
        </div>

        <Link
          href={`mailto:${footer.email}`}
          className="link font-mono text-xs text-muted md:hidden"
        >
          {footer.email}
        </Link>
      </div>

      <div className="flex flex-col items-start md:flex-row md:items-center md:gap-6">
        <Link
          href={`mailto:${footer.email}`}
          className="link hidden font-mono text-xs text-muted md:block"
        >
          {footer.email}
        </Link>

        <span className="font-mono text-xs text-muted">{footer.copyright}</span>
      </div>
    </footer>
  );
}
