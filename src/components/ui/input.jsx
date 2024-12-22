import React from 'react';

export function Input({ className, ...props }) {
  const baseStyles = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  
  return (
    <input
      {...props}
      className={`${baseStyles} ${className || ''}`}
    />
  );
}
