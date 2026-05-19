import { engagementContent } from "@/data/home";
import EngagementCard from "@/components/home/EngagementCard";

export default function EngagementSection() {
  return (
    <section className="snap-section border-subtle border-t gap-6 md:gap-8">
      <span className="section-eyebrow">{engagementContent.eyebrow}</span>

      <h1 className="section-heading">{engagementContent.title}</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {engagementContent.items.map((item) => (
          <EngagementCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
