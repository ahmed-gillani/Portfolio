export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-line)] flex items-center justify-between">
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} Syed Ahmed Shah Gillani
      </p>
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        built with react + tailwind
      </p>
    </footer>
  );
}
