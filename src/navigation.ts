import { getPermalink } from './utils/permalinks';

function navigateTo(href: string) {
  const url = new URL(href, window.location.origin);
  if (url.hash) {
    window.location.href = href;
  } else {
    window.history.pushState({}, '', href);
  }
}

export const headerData = {
  links: [
    {
      text: 'Overview',
      links: [
        {
          text: 'Benefits',
          href: '#',
          onClick: () => navigateTo(getPermalink('/#benefits')),
        },
        {
          text: 'Use cases',
          href: '#',
          onClick: () => navigateTo(getPermalink('/#usecases')),
        },
        {
          text: 'Statistics',
          href: '#',
          onClick: () => navigateTo(getPermalink('/#statistics')),
        },
      ],
    },
    {
      text: 'Offerings',
      href: '#',
      onClick: () => navigateTo(getPermalink('/offering')),
      links: [
        {
          text: 'Devices',
          href: '#',
          onClick: () => navigateTo(getPermalink('/offering#devices')),
        },
        {
          text: 'Services',
          href: '#',
          onClick: () => navigateTo(getPermalink('/offering#services')),
        },
        {
          text: 'Brands',
          href: '#',
          onClick: () => navigateTo(getPermalink('/offering#brands')),
        },
        {
          text: 'Steps',
          href: '#',
          onClick: () => navigateTo(getPermalink('/offering#steps')),
        },
      ],
    },
    {
      text: 'Company',
      links: [
        {
          text: 'About us',
          href: '#',
          onClick: () => navigateTo(getPermalink('/company#about')),
        },
        {
          text: 'Testimonials',
          href: '#',
          onClick: () => navigateTo(getPermalink('/company#testimonials')),
        },
      ],
    },
    {
      text: 'FAQs',
      href: '#',
      onClick: () => navigateTo(getPermalink('/faq')),
    },
    {
      text: 'Contacts',
      href: '#',
      onClick: () => navigateTo(getPermalink('/contact')),
    },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/contact') }],
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
  footNote: 'Ehadom · All rights reserved.',
};
