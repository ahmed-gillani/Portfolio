export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} Syed Ahmed Shah Gillani
      </p>
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        built with react + tailwind
      </p>
    </div>
  );
}
