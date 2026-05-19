import { stanceContent } from "@/data/home";
import ListCard from "@/components/home/ListCards";

export default function StanceSection() {
  return (
    <section className="snap-section border-subtle border-t gap-4 sm:gap-6 md:gap-8">
      <span className="section-eyebrow">{stanceContent.eyebrow}</span>

      <div className="flex max-w-4xl flex-col gap-2 md:gap-6">
        <h1 className="section-heading">{stanceContent.title}</h1>
        <p className="section-description">{stanceContent.description}</p>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
        <ListCard
          title={stanceContent.comparison.noise.title}
          items={stanceContent.comparison.noise.items}
        />

        <ListCard
          title={stanceContent.comparison.standard.title}
          items={stanceContent.comparison.standard.items}
          positive
        />
      </div>
    </section>
  );
}
