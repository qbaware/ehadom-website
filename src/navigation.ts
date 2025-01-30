import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Overview',
      links: [
        {
          text: 'Benefits',
          href: getPermalink('/#benefits'),
        },
        {
          text: 'Use cases',
          href: getPermalink('/#usecases'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Devices',
          href: getPermalink('/#devices'),
        },
        {
          text: 'Services',
          href: getPermalink('/#services'),
        },
        {
          text: 'Brands',
          href: getPermalink('/#brands'),
        },
      ],
    },
    {
      text: 'Company',
      links: [
        {
          text: 'Steps',
          href: getPermalink('/#steps'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('/#testimonials'),
        },
        {
          text: 'About',
          href: getPermalink('/#about'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'),
        },
        {
          text: 'Contact',
          href: getPermalink('/#contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/#contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: "Ehadom · All rights reserved.",
};
