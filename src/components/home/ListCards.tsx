interface ListCardProps {
  title: string;
  items: string[];
  positive?: boolean;
}

export default function ListCard({
  title,
  items,
  positive = false,
}: ListCardProps) {
  return (
    <div className="card max-w-none gap-3 md:gap-5">
      <h3 className="border-default w-full border-b pb-2 md:pb-3 font-mono text-sm tracking-[0.12em] text-muted">
        {title}
      </h3>

      <ul className="flex flex-col gap-2 md:gap-4">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-2 md:gap-3 leading-tight md:leading-relaxed ${
              positive ? "text-primary" : "text-secondary"
            }`}
          >
            <span
              className={`mt-px shrink-0 ${
                positive ? "text-success" : "text-error"
              }`}
            >
              {positive ? "✓" : "✕"}
            </span>

            <span className="text-xs md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
