import React from 'react';
import clsx from 'clsx';
import './Button.css';

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * RetailX Button Component
 * 
 * A versatile button component that supports multiple variants and sizes.
 * Used across RetailX applications for consistent UI interactions.
 * 
 * TODO: Add icon support for buttons
 * TODO: Implement focus management for accessibility
 * TODO: Add animation transitions for hover states
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className,
  type = 'button',
  ...props
}) => {
  const buttonClasses = clsx(
    'retailx-button',
    `retailx-button--${variant}`,
    `retailx-button--${size}`,
    {
      'retailx-button--disabled': disabled,
      'retailx-button--loading': loading,
    },
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="retailx-button__spinner" aria-hidden="true" />}
      <span className={clsx('retailx-button__content', { 'retailx-button__content--loading': loading })}>
        {children}
      </span>
    </button>
  );
};
