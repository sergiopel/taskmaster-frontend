import React from 'react';

const Button = ({
  children,
  variant = 'primary', // primary, secondary, danger
  size = 'md', // sm, md, lg
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = "font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
