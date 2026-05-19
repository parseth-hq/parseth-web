type EngagementCardProps = {
  id: string;
  title: string;
  description: string;
};

export default function EngagementCard({
  id,
  title,
  description,
}: EngagementCardProps) {
  return (
    <div className="card max-w-none gap-2 md:gap-4">
      <h3 className="w-full border-b border-default pb-2 md:pb-3 font-mono text-xs md:text-sm tracking-[0.14em] text-primary">
        {id}. {title}
      </h3>

      <p className="text-xs sm:text-sm md:text-base text-secondary leading-snug md:leading-relaxed">
        {description}
      </p>
    </div>
  );
}
