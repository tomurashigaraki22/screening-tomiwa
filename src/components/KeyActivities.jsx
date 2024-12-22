import { SparklesIcon, MailIcon, CalendarIcon } from './icons'
import { Avatar } from './Avatar'

export default function KeyActivities() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-gray-700 text-lg font-medium mb-4">Other key activities</h2>
      <div className="space-y-3">
        <ActivityCard 
          avatar="/bank.jpeg"
          title="Cafe A100 for Woodland Bank"
          company="Woodland Bank"
          amount="$280,000"
          daysToClose={8}
          actionIcon={<MailIcon className="w-4 h-4 text-gray-600" />}
          actionText="Review draft and reply to Chris Naido"
        />

        <ActivityCard 
          avatar="/fabrikam.png"
          title="Partnership opportunity for Fabrikam"
          company="Fabrikam"
          amount="$5,000,000"
          daysToClose={12}
          actionIcon={<CalendarIcon className="w-6 h-6 text-gray-600" />}
          actionText="Prepare me for Fabrikam's key stakeholder meeting"
        />
      </div>

      <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
        Show all key activities
      </button>
    </div>
  )
}

function ActivityCard({ avatar, title, company, amount, daysToClose, actionIcon, actionText }) {
  return (
    <div className="bg-gray-30 p-1 rounded-xl relative border-gray-300 shadow-lg">
      <div className="absolute top-3 right-3">
        <SparklesIcon className="w-4 h-4 text-purple-400" />
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Avatar src={avatar} alt={company} size="md" />
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-gray-900 text-sm">{title}</h3>
            
          </div>
        </div>

        
      </div>
      <p className="text-[11px] text-gray-500 mt-2">
              {company} • {amount} • {daysToClose} days to close
    </p>
      <div className="flex items-center gap-2 mt-3 bg-gray-50 py-2 px-3 rounded-md">
          {actionIcon}
          <span className="text-[12px] text-gray-600">{actionText}</span>
    </div>
    </div>
  )
}

