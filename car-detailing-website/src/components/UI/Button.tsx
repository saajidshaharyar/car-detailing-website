import React, { Component } from 'react'
// File #4: Button Component
// Basic UI component with react-router dependency
// Used by: Multiple components for navigation and actions
import { Link } from 'react-router-dom'
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  onClick?: () => void
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  fullWidth = false,
  type = 'button',
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-display rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  }
  const variantClasses = {
    primary: `
      bg-primary-600 text-white hover:bg-white hover:text-primary-600 shadow-md hover:shadow-lg
      dark:bg-primary-600 dark:text-white dark:hover:bg-white dark:hover:text-primary-600
    `,
    secondary: `
      bg-black text-white hover:bg-white hover:text-black shadow-md hover:shadow-lg
      dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white
    `,
    outline: `
      border-2 border-primary-600 bg-white text-primary-600 hover:bg-primary-600 hover:text-white
      dark:border-primary-600 dark:bg-primary-600 dark:text-white dark:hover:bg-white dark:hover:text-primary-600
    `,
  }
  const widthClass = fullWidth ? 'w-full' : ''
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  if (to) {
    return (
      <Link to={to} className={classes} onClick={handleClick}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}
export default Button
