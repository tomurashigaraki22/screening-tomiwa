export default function SuggestionCard({ text, onPress }) {
    return (
      <div className="flex items-center justify-between p-2 mt-3 bg-blue-50 rounded-lg max-w-3xl" onClick={onPress}>
        <div className="flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-600 shrink-0"
          >
            <path
              d="M10 2L12.2451 6.90983L17.5106 7.45492L13.5599 11.0902L14.7023 16.2951L10 13.7L5.29772 16.2951L6.44014 11.0902L2.48944 7.45492L7.75486 6.90983L10 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-sm">
            {text}
        </p>

        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors bg-gray-50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M12.7 4.3L11.7 3.3L3 12V13H4L12.7 4.3ZM13.7 3.3L12.7 2.3C12.3 1.9 11.7 1.9 11.3 2.3L10.3 3.3L12.7 5.7L13.7 4.7C14.1 4.3 14.1 3.7 13.7 3.3Z"
                fill="currentColor"
              />
            </svg>
            Edit
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transition-colors">
            Approve and send
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M14 2L8 14L6 8L0 6L14 2Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }
  
  