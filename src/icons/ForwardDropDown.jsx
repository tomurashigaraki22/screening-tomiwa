import { FaArrowRight, FaCaretDown } from 'react-icons/fa';


export function ForwardDropdown() {
    return (
      <div className="inline-flex items-center bg-blue-700 rounded-md overflow-hidden">
        <button className="flex items-center justify-center p-2 hover:bg-blue-800">
          <FaArrowRight />
        </button>
        <div className="w-px h-6 bg-gray-400"></div>
        <button className="flex items-center justify-center p-2 hover:bg-blue-800">
          <FaCaretDown />
        </button>
      </div>
    )
  }
  
  
  