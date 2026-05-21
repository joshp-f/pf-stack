import { useRouterState } from '@tanstack/react-router'

const routeLabels: Record<string, string> = {
  '/start': 'Start',
  '/agent-runtime': 'Agent Runtime',
  '/filesystem': 'Filesystem',
  '/sandbox': 'Sandbox',
  '/context-management': 'Context Management',
  '/mcp': 'MCP',
  '/skills': 'Skills',
  '/streaming': 'Streaming',
  '/object-storage': 'Object Storage',
  '/react': 'React',
}

export default function NavTitle() {
  const pathname = useRouterState({ select: s => s.location.pathname })
  const feature = routeLabels[pathname]

  if (!feature) return null

  return (
    <span className="text-lg font-black tracking-widest uppercase">
      <span className="text-[var(--sea-ink)]">PF </span>
      <span className="text-[var(--lagoon)]">{feature}</span>
    </span>
  )
}
