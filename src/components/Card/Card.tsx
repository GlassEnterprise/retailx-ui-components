import React from 'react';
import clsx from 'clsx';
import './Card.css';

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card variant */
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  /** Card size */
  size?: 'small' | 'medium' | 'large';
  /** Whether the card is clickable */
  clickable?: boolean;
  /** Click handler for clickable cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Header actions (buttons, icons, etc.) */
  headerActions?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Loading state */
  loading?: boolean;
}

/**
 * RetailX Card Component
 * 
 * A flexible card component for displaying content in a structured layout.
 * Commonly used for product displays, dashboards, and content organization.
 * 
 * TODO: Add image support for card headers
 * TODO: Implement collapsible card functionality
 * TODO: Add drag and drop support for reorderable cards
 * TODO: Create card grid layout utilities
 */
export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  variant = 'default',
  size = 'medium',
  clickable = false,
  onClick,
  className,
  headerActions,
  footer,
  loading = false,
  ...props
}) => {
  const cardClasses = clsx(
    'retailx-card',
    `retailx-card--${variant}`,
    `retailx-card--${size}`,
    {
      'retailx-card--clickable': clickable,
      'retailx-card--loading': loading,
    },
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (clickable && onClick && !loading) {
      onClick(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (clickable && onClick && !loading && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick(event as any);
    }
  };

  const hasHeader = title || subtitle || headerActions;

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      aria-disabled={loading}
      {...props}
    >
      {loading && (
        <div className="retailx-card__loading-overlay">
          <div className="retailx-card__spinner" />
        </div>
      )}
      
      {hasHeader && (
        <div className="retailx-card__header">
          <div className="retailx-card__header-content">
            {title && <h3 className="retailx-card__title">{title}</h3>}
            {subtitle && <p className="retailx-card__subtitle">{subtitle}</p>}
          </div>
          {headerActions && (
            <div className="retailx-card__header-actions">
              {headerActions}
            </div>
          )}
        </div>
      )}
      
      <div className="retailx-card__body">
        {children}
      </div>
      
      {footer && (
        <div className="retailx-card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};
