# RetailX UI Components

A comprehensive React TypeScript component library for the RetailX ecosystem. This library provides reusable, enterprise-grade UI components that maintain consistency across all RetailX applications.

## 🚀 Quick Start

### Installation

Install the package locally in your project:

```bash
npm install ../retailx-ui-components
```

Or if you're in a different directory:

```bash
npm install /path/to/retailx-ui-components
```

### Basic Usage

```tsx
import React from 'react';
import { Button, Header, Card } from '@retailx/ui-components';

function App() {
  return (
    <div>
      <Header 
        title="RetailX Dashboard" 
        subtitle="Enterprise Retail Management"
        navItems={[
          { label: 'Dashboard', active: true },
          { label: 'Orders' },
          { label: 'Inventory' }
        ]}
      />
      
      <Card title="Welcome" subtitle="Get started with RetailX">
        <p>Welcome to the RetailX platform!</p>
        <Button variant="primary" onClick={() => console.log('Getting started!')}>
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## 📦 Components

### Button

A versatile button component supporting multiple variants and states.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: click handler function

**Example:**
```tsx
<Button variant="primary" size="large" onClick={handleClick}>
  Submit Order
</Button>
```

### Header

A flexible header component for application navigation and branding.

**Props:**
- `title`: string (required)
- `subtitle`: string (optional)
- `variant`: 'default' | 'compact' | 'hero'
- `navItems`: array of navigation items
- `logo`: string URL or React element
- `bordered`: boolean

**Example:**
```tsx
<Header 
  title="RetailX Admin"
  variant="hero"
  navItems={[
    { label: 'Dashboard', active: true, onClick: handleNavClick },
    { label: 'Settings', href: '/settings' }
  ]}
/>
```

### Card

A flexible card component for structured content display.

**Props:**
- `title`: string (optional)
- `subtitle`: string (optional)
- `variant`: 'default' | 'elevated' | 'outlined' | 'flat'
- `size`: 'small' | 'medium' | 'large'
- `clickable`: boolean
- `loading`: boolean
- `headerActions`: React node for header buttons/icons
- `footer`: React node for footer content

**Example:**
```tsx
<Card 
  title="Product Details"
  subtitle="SKU: RX-12345"
  variant="elevated"
  clickable
  onClick={handleCardClick}
  headerActions={<Button size="small">Edit</Button>}
>
  <p>Product description and details...</p>
</Card>
```

## 🎨 Storybook

View and interact with all components in Storybook:

```bash
cd retailx-ui-components
npm install
npm run storybook
```

This will start Storybook at `http://localhost:6006` where you can:
- Browse all components and their variants
- Interact with component props in real-time
- View auto-generated documentation
- Test different component states

## 🔧 Development

### Building the Library

```bash
npm run build
```

This compiles TypeScript and generates declaration files in the `dist/` directory.

### Development Mode

```bash
npm run dev
```

Runs TypeScript compiler in watch mode for active development.

### Linting

```bash
npm run lint
```

## 🏗️ Architecture

### Component Structure

Each component follows a consistent structure:

```
src/components/ComponentName/
├── ComponentName.tsx    # Main component file
├── ComponentName.css    # Component styles
└── index.ts            # Export barrel
```

### Styling Approach

- **CSS Modules**: Each component has its own CSS file
- **BEM Methodology**: Class naming follows Block-Element-Modifier pattern
- **CSS Custom Properties**: For theming and customization
- **Responsive Design**: Mobile-first approach with breakpoints

### TypeScript

- **Strict Mode**: Full TypeScript strict mode enabled
- **Interface Exports**: All component prop interfaces are exported
- **JSDoc Comments**: Comprehensive documentation for all props
- **Declaration Files**: Auto-generated `.d.ts` files for consumers

## 🔗 Dependencies

### Peer Dependencies

These must be installed in the consuming application:

- `react`: ^18.0.0
- `react-dom`: ^18.0.0

### Runtime Dependencies

- `clsx`: Utility for conditional CSS classes

### Development Dependencies

- TypeScript, ESLint, Jest for development
- Storybook for component documentation and testing
- Various Storybook addons for enhanced functionality

## 🌐 Integration with RetailX Ecosystem

This component library is designed to integrate seamlessly with other RetailX services:

### Related Services

- **retailx-orders-api**: Order management service
- **retailx-inventory-api**: Inventory tracking service  
- **foo-legacy-notifications-api**: Legacy notification system
- **retailx-core-commons**: Shared utilities and common code

### Design System

Components follow RetailX design system guidelines:
- **Primary Color**: #007bff (RetailX Blue)
- **Typography**: System fonts with fallbacks
- **Spacing**: 8px grid system
- **Border Radius**: 6-8px for modern appearance
- **Shadows**: Subtle elevation for depth

## 📋 Usage Examples

### E-commerce Product Listing

```tsx
import { Card, Button } from '@retailx/ui-components';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Card
          key={product.id}
          title={product.name}
          subtitle={`$${product.price}`}
          variant="elevated"
          clickable
          onClick={() => viewProduct(product.id)}
          footer={
            <Button variant="primary" size="small">
              Add to Cart
            </Button>
          }
        >
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

### Admin Dashboard Header

```tsx
import { Header, Button } from '@retailx/ui-components';

function AdminLayout() {
  return (
    <Header
      title="RetailX Admin"
      subtitle="Store Management Dashboard"
      variant="hero"
      logo="/retailx-logo.png"
      navItems={[
        { label: 'Dashboard', active: true, href: '/dashboard' },
        { label: 'Orders', href: '/orders' },
        { label: 'Inventory', href: '/inventory' },
        { label: 'Analytics', href: '/analytics' },
        { label: 'Settings', href: '/settings' }
      ]}
    />
  );
}
```

## 🚧 Roadmap

### Planned Components

- **DataTable**: Sortable, filterable data tables
- **Modal**: Dialog and modal components
- **Form**: Form inputs and validation
- **Navigation**: Sidebar and breadcrumb components
- **Charts**: Basic chart components for dashboards

### Planned Features

- **Dark Theme**: Complete dark mode support
- **Internationalization**: Multi-language support
- **Animation Library**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG 2.1 AA compliance
- **Testing**: Comprehensive unit and integration tests

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

This library is part of the RetailX enterprise ecosystem. For contributions and issues, please follow the RetailX development guidelines and submit pull requests through the standard review process.

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Run Storybook: `npm run storybook`
5. Build library: `npm run build`

---

**RetailX Engineering Team** | Version 1.0.0
