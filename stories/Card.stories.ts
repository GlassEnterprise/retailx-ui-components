import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from '../src/components/Card';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Card> = {
  title: 'RetailX/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content in a structured layout. Commonly used for product displays, dashboards, and content organization.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'flat'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    clickable: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Product Card',
    subtitle: 'Premium Quality Item',
    children: 'This is a sample card content that demonstrates the default styling and layout of the RetailX Card component.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Featured Product',
    subtitle: 'Best Seller',
    variant: 'elevated',
    children: 'This elevated card stands out with enhanced shadow effects, perfect for highlighting important content.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Order Summary',
    subtitle: 'Order #12345',
    variant: 'outlined',
    children: 'This outlined card provides clear boundaries without heavy shadows, ideal for form sections and summaries.',
  },
};

export const Flat: Story = {
  args: {
    title: 'System Status',
    subtitle: 'All systems operational',
    variant: 'flat',
    children: 'This flat card has minimal styling, perfect for dashboard widgets and status displays.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Interactive Card',
    subtitle: 'Click to view details',
    clickable: true,
    children: 'This card is clickable and will respond to user interactions with hover effects and focus states.',
    onClick: fn(),
  },
};

export const WithHeaderActions: Story = {
  args: {
    title: 'Inventory Item',
    subtitle: 'SKU: RX-001',
    headerActions: [
      { type: 'button', props: { variant: 'outline', size: 'small', children: 'Edit', onClick: fn() } },
      { type: 'button', props: { variant: 'danger', size: 'small', children: 'Delete', onClick: fn() } },
    ],
    children: 'This card includes header actions for quick operations like edit and delete.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Order Details',
    subtitle: 'Order placed on Dec 8, 2024',
    children: 'Order contains 3 items with a total value of $299.99. Estimated delivery: Dec 12, 2024.',
    footer: [
      { type: 'button', props: { variant: 'outline', children: 'Track Order', onClick: fn() } },
      { type: 'button', props: { variant: 'primary', children: 'View Details', onClick: fn() } },
    ],
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Content',
    subtitle: 'Please wait...',
    loading: true,
    children: 'This content is currently being loaded from the server.',
  },
};

export const Small: Story = {
  args: {
    title: 'Compact Info',
    size: 'small',
    children: 'Small card for minimal content display.',
  },
};

export const Large: Story = {
  args: {
    title: 'Detailed Information',
    subtitle: 'Comprehensive overview',
    size: 'large',
    children: 'Large card provides more space for detailed content, descriptions, and complex layouts. Perfect for main content areas and detailed views.',
  },
};
