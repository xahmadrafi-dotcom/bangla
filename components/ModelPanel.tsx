import StatusBadge from './StatusBadge'

type ModelPanelProps = {
  modelName: string
  color: string
  status: 'mock' | 'live' | 'offline'
  response: string
  isLoading: boolean
}

export default function ModelPanel({
  modelName,
  color,
  status,
  response,
  isLoading,
}: ModelPanelProps) {
  return (
    <div
      className="flex flex-col rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10"
      style={{ minHeight: '220px' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-white/5"
        style={{ borderLeftColor: color, borderLeftWidth: '3px' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color }}
          >
            {modelName}
          </span>
        </div>
        <StatusBadge status={status} />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 relative">
        {isLoading ? (
          <div className="flex items-center gap-3 text-white/40">
            <div
              className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: color, borderTopColor: 'transparent' }}
            />
            <span className="text-sm bangla">ভাবছি...</span>
          </div>
        ) : response ? (
          <p className="text-sm text-white/80 bangla leading-relaxed whitespace-pre-wrap animate-fade-in">
            {response}
          </p>
        ) : (
          <p className="text-sm text-white/20 bangla italic">
            এখানে উত্তর আসবে...
          </p>
        )}
      </div>
    </div>
  )
}
