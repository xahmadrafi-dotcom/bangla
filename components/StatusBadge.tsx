type StatusBadgeProps = {
  status: 'mock' | 'live' | 'offline'
}

const config = {
  mock: { dot: '#EAB308', label: 'mock' },
  live: { dot: '#22C55E', label: 'live' },
  offline: { dot: '#EF4444', label: 'offline' },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { dot, label } = config[status]
  return (
    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: dot }}
      />
      <span className="text-xs text-white/50">{label}</span>
    </div>
  )
}
