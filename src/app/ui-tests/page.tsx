import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocalDev } from "@/lib/env";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function UITestPage() {
  if (!isLocalDev) {
    notFound();
  }

  return (
    <main className="snap-layout">
      <section className="snap-section">
        <h1 className="text-5xl font-bold">UI Tests</h1>
      </section>
      <section className="snap-section gap-8">
        {/* Base Text */}
        <div className="space-y-2">
          <h2>Base Text</h2>
          <p>
            This is a standard paragraph used to test typography scale,
            readability, spacing, and overall text rendering inside the layout.
          </p>
        </div>

        {/* Mono Text */}
        <div className="space-y-2">
          <h2>Mono Text</h2>
          <p className="font-mono">npm run dev --turbo</p>
        </div>

        {/* Secondary Text */}
        <div className="space-y-2">
          <h2>Secondary Text</h2>
          <p className="text-secondary">
            This text should appear visually subdued compared to the primary
            foreground text.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <h2>Buttons</h2>
          <div className="flex items-center gap-4">
            <button className="button-primary">Primary Button</button>
            <button className="button-secondary">Secondary Button</button>
          </div>
        </div>

        {/* Link */}
        <div className="space-y-2">
          <h2>Link</h2>
          <Link href="#" className="link">
            Visit Documentation
          </Link>
        </div>

        {/* Card */}
        <div className="card">
          <h3>Card Component</h3>
          <p>
            This card exists to validate padding, border radius, surface color,
            shadow depth, and content spacing.
          </p>
          <button className="button-primary">Action</button>
        </div>
      </section>

      <section className="snap-section">
        <div className="container-section">
          <div className="space-y-4">
            <h2>Additional Section</h2>

            <p>
              Use this section to verify snap behavior, vertical rhythm, and
              section transitions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
