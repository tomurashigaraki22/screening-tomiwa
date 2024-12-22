import React from 'react';

export function Button({ children, variant = 'default', ...props }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  };

  const className = `${baseStyles} ${variantStyles[variant]} ${props.className || ''}`;

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

