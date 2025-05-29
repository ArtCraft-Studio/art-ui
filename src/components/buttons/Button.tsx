import * as React from 'react';
import './Button.css';
import { PlayIcon } from '../icons';

export interface ButtonProps {
  /**
   * Content to display inside the button
   */
  children?: React.ReactNode;
  /**
   * Icon to display inside the button
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon (left or right)
   */
  iconPosition?: 'left' | 'right';
  /**
   * Animation effect to apply to the button
   */
  animation?: 'pulse' | 'bounce' | 'shake' | 'rotate' | 'none';
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button disabled state
   */
  disabled?: boolean;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Title attribute
   */
  title?: string /**
   * Aria label for accessibility
   */;
  'aria-label'?: string;
  /**
   * When true, shows as an impression button with play icon
   */
  impression?: boolean;
  /**
   * Size of the impression play icon
   */
  impressionIconSize?: number;
}

/**
 * Button component with optional icon and animation effects
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = 'left',
  animation = 'none',
  size = 'medium',
  variant = 'primary',
  className = '',
  disabled = false,
  impression = false,
  impressionIconSize = 14,
  ...props
}) => {
  // If impression is true, override some defaults
  const finalVariant = impression ? 'text' : variant;
  const finalSize = impression ? 'small' : size;
  const finalIcon = impression ? <PlayIcon size={impressionIconSize} className="ml-1" /> : icon;
  const finalIconPosition = impression ? 'right' : iconPosition;
  const finalClassName = impression
    ? `text-blue-500 hover:text-blue-600 hover:bg-blue-50 ${className}`
    : className;
  const finalTitle = impression ? props.title || 'View Impressions' : props.title;
  const finalAriaLabel = impression
    ? props['aria-label'] || 'View Impressions'
    : props['aria-label']; // Base classes that are always applied
  const baseClasses =
    'inline-flex items-center justify-center border-none outline-none cursor-pointer transition-all duration-200 ease-in-out relative overflow-hidden font-medium rounded-md focus:ring-2 focus:ring-blue-500';

  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-xs h-7',
    medium: 'px-4 py-2 text-sm h-9',
    large: 'px-5 py-3 text-base h-11',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50',
    text: 'bg-transparent text-blue-500 hover:bg-blue-50 px-2',
  };

  // Animation classes
  const animationClasses = {
    none: '',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    shake: 'animate-shake',
    rotate: 'animate-spin',
  };

  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 pointer-events-none' : '';
  // Combine all classes
  const buttonClasses = [
    baseClasses,
    sizeClasses[finalSize],
    variantClasses[finalVariant],
    animationClasses[animation],
    disabledClasses,
    finalClassName,
  ]
    .filter(Boolean)
    .join(' ');

  // Debug logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Button classes:', buttonClasses);
  }
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      title={finalTitle}
      aria-label={finalAriaLabel}
      {...props}
    >
      {finalIcon && finalIconPosition === 'left' && <span className="mr-2">{finalIcon}</span>}
      {children}
      {finalIcon && finalIconPosition === 'right' && <span className="ml-1">{finalIcon}</span>}
    </button>
  );
};

export default Button;
