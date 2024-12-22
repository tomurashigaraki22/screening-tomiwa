export function Avatar({ src, alt, size = 'md' }) {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12'
    }
  
    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex-shrink-0`}>
        <img 
          src={src || '/placeholder.svg'} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    )
  }
  
  