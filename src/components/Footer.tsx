export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-end gap-4 text-center sm:text-right">
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} Syed Ahmed Gillani
      </p>
    </div>
  );
}
