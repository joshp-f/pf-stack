const sections = ['Home', 'Getting Started', 'Core Guides', 'Feature Guides', 'Examples']

export default function SidePanel() {
  return (
    <aside className="w-1/6 shrink-0 border-r border-[var(--line)] px-4 py-6">
      <nav className="flex flex-col gap-6">
        {sections.map(section => (
          <span key={section} className="text-sm font-extrabold text-[var(--sea-ink)]">
            {section}
          </span>
        ))}
      </nav>
    </aside>
  )
}
