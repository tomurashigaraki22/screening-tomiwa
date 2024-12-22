import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SidebarSection({ title, items, isCollapsed }) {
  return (
    <div className="mb-6">
      {!isCollapsed && (
        <p className="font-montserrat text-sm font-bold mt-6 p-1 px-4">{title}</p>
      )}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className={item.isActive ? "relative" : ""}>
            {item.isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-md"></div>
            )}
            <a
              href={item.link}
              className={`block hover:bg-gray-200 p-2 rounded flex items-center ${
                isCollapsed ? "justify-center" : "justify-between"
              }`}
              onClick={item.onClick}
            >
              <div className="flex items-center">
                <SidebarIcon icon={item.icon} />
                {!isCollapsed && (
                  <span className="ml-2 text-sm">{item.label}</span>
                )}
              </div>
              {!isCollapsed && item.subItems && (
                <button onClick={() => item.setIsOpen(!item.isOpen)}>
                  {item.isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              )}
            </a>
            {!isCollapsed && item.isOpen && item.subItems && (
              <ul className="pl-7 mt-1">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href="#"
                      className="block hover:bg-gray-200 p-1 rounded text-sm"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarIcon({ icon }) {
  // Add your icon components here based on the icon prop
  // For brevity, I'm using placeholder SVGs. Replace these with your actual icons.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}

