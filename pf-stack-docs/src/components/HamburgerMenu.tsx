import { Link } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const links = [
  { label: 'Start', to: '/start' },
  { label: 'Agent Runtime', to: '/agent-runtime' },
  { label: 'Filesystem', to: '/filesystem' },
  { label: 'Sandbox', to: '/sandbox' },
  { label: 'Context Management', to: '/context-management' },
  { label: 'MCP', to: '/mcp' },
  { label: 'Skills', to: '/skills' },
  { label: 'Streaming', to: '/streaming' },
  { label: 'Object Storage', to: '/object-storage' },
  { label: 'React', to: '/react' },
]

export default function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-[5px] p-1" aria-label="Toggle menu">
          <span className="block h-px w-5 bg-[var(--sea-ink)]" />
          <span className="block h-px w-5 bg-[var(--sea-ink)]" />
          <span className="block h-px w-5 bg-[var(--sea-ink)]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {links.map(({ label, to }) => (
          <DropdownMenuItem key={to} asChild>
            <Link to={to} style={{ color: 'inherit' }} className="font-bold">
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
