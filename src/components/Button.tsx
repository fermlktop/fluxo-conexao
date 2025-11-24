import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon,
  external = false
}) => {
  
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 select-none";
  
  // Gold gradient for primary
  // Explicitly using text-[#0F0F11] (Deep Onyx) and font-bold
  const primaryStyles = `
    bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600
    text-[#0F0F11] font-bold
    hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]
    hover:scale-[1.02]
    focus:ring-yellow-400
    border border-transparent
  `;

  // Elegant outline for secondary
  const secondaryStyles = `
    bg-transparent
    border border-gray-700 hover:border-yellow-500/50
    text-gray-300 hover:text-yellow-200
    hover:bg-white/5
    focus:ring-gray-500
  `;

  const combinedClasses = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-3 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;