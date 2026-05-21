import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import HamburgerMenu from './HamburgerMenu'
import NavTitle from './NavTitle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-lg">
      <nav className="flex items-center gap-3 p-2">
        <HamburgerMenu />
        <NavTitle />
      </nav>
    </header>
  )
}
