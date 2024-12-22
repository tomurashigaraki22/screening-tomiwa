import { EnvelopeIcon, SparklesIcon } from './icons'

export default function EngageCard({ title, description, onPress }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-4 rounded-xl w-full mt-2 mb-2" onClick={onPress}>
      {/* Top-right sparkle icon */}
      <div className="absolute top-3 right-3 text-purple-400">
        <SparklesIcon />
      </div>

      {/* Content */}
      <div className="flex items-center gap-3 mb-2">
        <div className="text-gray-700">
          <EnvelopeIcon />
        </div>
        <h3 className="font-medium text-gray-900">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 text-[15px] leading-relaxed pl-9">
        {description}
      </p>
    </div>
  )
}

