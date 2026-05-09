export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10'}>
      <h2 className="text-3xl font-bold text-dark md:text-[42px]">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-muted">{subtitle}</p> : null}
    </div>
  );
}
