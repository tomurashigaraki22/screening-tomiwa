export function ProgressBar({ progress, segments }) {
  const targetPercentage = 68; // 68% of the target achieved

  return (
    <div className="space-y-2 w-full flex flex-col">
      {/* Header info */}
      <div className="flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-1 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="#4a4a4a"
          className="group-hover:fill-black"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4z"/>
        </svg>
          <span>1 month until Q4 ends</span>
        </div>
        <span className="text-center">Target: $45 million</span>

        <span className="text-right">68% of target achieved</span>

      </div>

      {/* Progress bar */}
      <div className="relative w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="flex h-full w-full">
          {segments.map((segment, index) => (
            <div
              key={index}
              style={{ width: `${segment.percentage}%` }}
              className={`h-full ${segment.color}`}
            />
          ))}
        </div>

        {/* Target marker */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${targetPercentage}%` }}
        >
          <div className="w-0.5 h-full bg-red-500" />
          <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-red-500">
            $45M
          </span>
        </div>
      </div>

      {/* Segments legend */}
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-gray-600">Won $16m</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-gray-600">Committed $8m</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
          <span className="text-gray-600">Best case $7m</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="text-gray-600">Qualified $5m</span>
        </div>
      </div>
    </div>
  );
}
