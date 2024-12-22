import { Card } from './Card'
import { CheckCircle, DollarSign, TrendingUp } from 'lucide-react'

export function MetricCard({ type, value, label }) {
  const getIcon = () => {
    switch (type) {
      case "decision":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "value":
        return <DollarSign className="w-6 h-6 text-yellow-500" />
      case "intent":
        return <TrendingUp className="w-6 h-6 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className="rounded-lg border bg-card p-4 flex items-center gap-2">
      {getIcon()}
      <div>
        <div className="font-semibold">{value}</div>
        {label && <div className="text-sm text-muted-foreground">{label}</div>}
      </div>
    </div>
  )
}

