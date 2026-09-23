import { AlertTriangle, CheckCircle2, Info, Lightbulb, } from 'lucide-react'

const variantConfig = {
  tip: {
    icon: Lightbulb,
    label: 'Tip',
    container:
      'border-amber-200 bg-amber-50',
    icon:
      'text-amber-600',
    title:
      'text-amber-900',
    content:
      'text-amber-800',
  },

  note: {
    icon: Info,
    label: 'Note',
    container:
      'border-blue-200 bg-blue-50',
    icon:
      'text-blue-600',
    title:
      'text-blue-900',
    content:
      'text-blue-800',
  },

  warning: {
    icon: AlertTriangle,
    label: 'Warning',
    container:
      'border-red-200 bg-red-50',
    icon:
      'text-red-600',
    title:
      'text-red-900',
    content:
      'text-red-800',
  },

  success: {
    icon: CheckCircle2,
    label: 'Best Practice',
    container:
      'border-emerald-200 bg-emerald-50',
    icon:
      'text-emerald-600',
    title:
      'text-emerald-900',
    content:
      'text-emerald-800',
  },
}

function CalloutSection({
  variant = 'note',
  title,
  content,
}) {
  const config =
    variantConfig[variant] ?? variantConfig.note

  const Icon = config.icon

  return (
    <aside
      className={`rounded-2xl border p-5 ${config.container}`}
    >
      <div className="flex items-start gap-3">
        <Icon
          size={20}
          className={`mt-0.5 shrink-0 ${config.icon}`}
        />

        <div className="min-w-0">
          <p
            className={`text-sm font-bold ${config.title}`}
          >
            {title || config.label}
          </p>

          <p
            className={`mt-2 text-sm leading-7 ${config.content}`}
          >
            {content}
          </p>
        </div>
      </div>
    </aside>
  )
}

export default CalloutSection