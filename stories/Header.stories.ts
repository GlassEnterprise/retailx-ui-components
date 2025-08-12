import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from '../src/components/Header';

const meta: Meta<typeof Header> = {
  title: 'RetailX/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible header component for RetailX applications. Supports navigation, branding, and multiple layout variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'hero'],
    },
    bordered: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'RetailX Dashboard',
    subtitle: 'Enterprise Retail Management System',
    navItems: [
      { label: 'Dashboard', active: true, onClick: fn() },
      { label: 'Orders', onClick: fn() },
      { label: 'Inventory', onClick: fn() },
      { label: 'Analytics', onClick: fn() },
    ],
  },
};

export const Compact: Story = {
  args: {
    title: 'RetailX Admin',
    variant: 'compact',
    navItems: [
      { label: 'Home', active: true, onClick: fn() },
      { label: 'Settings', onClick: fn() },
      { label: 'Help', onClick: fn() },
    ],
  },
};

export const Hero: Story = {
  args: {
    title: 'RetailX Platform',
    subtitle: 'Next-generation retail solutions',
    variant: 'hero',
    navItems: [
      { label: 'Products', onClick: fn() },
      { label: 'Solutions', onClick: fn() },
      { label: 'Pricing', onClick: fn() },
      { label: 'Contact', onClick: fn() },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    title: 'RetailX Store',
    subtitle: 'Point of Sale System',
    logo: 'https://via.placeholder.com/32x32/007bff/ffffff?text=RX',
    navItems: [
      { label: 'Sales', active: true, onClick: fn() },
      { label: 'Products', onClick: fn() },
      { label: 'Reports', onClick: fn() },
    ],
  },
};

export const MinimalNoNav: Story = {
  args: {
    title: 'Simple Header',
    bordered: false,
  },
};

export const WithExternalLinks: Story = {
  args: {
    title: 'RetailX Documentation',
    subtitle: 'API Reference and Guides',
    navItems: [
      { label: 'API Docs', href: '#api', active: true },
      { label: 'Guides', href: '#guides' },
      { label: 'Examples', href: '#examples' },
      { label: 'Support', href: '#support' },
    ],
  },
};
