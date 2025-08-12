import React from 'react';
import clsx from 'clsx';
import './Header.css';

export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface HeaderProps {
  /** Header title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Header variant */
  variant?: 'default' | 'compact' | 'hero';
  /** Navigation items */
  navItems?: NavItem[];
  /** Logo URL or React element */
  logo?: string | React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show border bottom */
  bordered?: boolean;
}

/**
 * RetailX Header Component
 * 
 * A flexible header component for RetailX applications.
 * Supports navigation, branding, and multiple layout variants.
 * 
 * TODO: Add responsive mobile menu functionality
 * TODO: Implement breadcrumb navigation support
 * TODO: Add user profile dropdown integration
 * TODO: Support for search bar integration
 */
export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  variant = 'default',
  navItems = [],
  logo,
  className,
  bordered = true,
  ...props
}) => {
  const headerClasses = clsx(
    'retailx-header',
    `retailx-header--${variant}`,
    {
      'retailx-header--bordered': bordered,
    },
    className
  );

  const renderLogo = () => {
    if (!logo) return null;
    
    if (typeof logo === 'string') {
      return (
        <img 
          src={logo} 
          alt="RetailX Logo" 
          className="retailx-header__logo-image"
        />
      );
    }
    
    return <div className="retailx-header__logo-custom">{logo}</div>;
  };

  const renderNavItem = (item: NavItem, index: number) => {
    const navItemClasses = clsx(
      'retailx-header__nav-item',
      {
        'retailx-header__nav-item--active': item.active,
      }
    );

    if (item.href) {
      return (
        <a
          key={index}
          href={item.href}
          className={navItemClasses}
          onClick={item.onClick}
        >
          {item.label}
        </a>
      );
    }

    return (
      <button
        key={index}
        type="button"
        className={navItemClasses}
        onClick={item.onClick}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className={headerClasses} {...props}>
      <div className="retailx-header__container">
        <div className="retailx-header__brand">
          {renderLogo()}
          <div className="retailx-header__titles">
            <h1 className="retailx-header__title">{title}</h1>
            {subtitle && (
              <p className="retailx-header__subtitle">{subtitle}</p>
            )}
          </div>
        </div>
        
        {navItems.length > 0 && (
          <nav className="retailx-header__nav">
            {navItems.map(renderNavItem)}
          </nav>
        )}
      </div>
    </header>
  );
};
