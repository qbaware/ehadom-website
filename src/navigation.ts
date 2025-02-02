import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Начало',
      links: [
        {
          text: 'Ползи',
          href: getPermalink('/#benefits'),
        },
        {
          text: 'Употреба',
          href: getPermalink('/#usecases'),
        },
        {
          text: 'Статистика',
          href: getPermalink('/#statistics'),
        },
      ],
    },
    {
      text: 'Предлагани услуги',
      links: [
        {
          text: 'Устройства',
          href: getPermalink('/offering/#devices'),
        },
        {
          text: 'Производители',
          href: getPermalink('/offering/#brands'),
        },
        {
          text: 'Услуги',
          href: getPermalink('/offering/#services'),
        },
        {
          text: 'Процедура',
          href: getPermalink('/offering/#steps'),
        },
      ],
    },
    {
      text: 'За нас',
      links: [
        {
          text: 'Екип',
          href: getPermalink('/about/#team'),
        },
        {
          text: 'Обратна връзка',
          href: getPermalink('/about/#testimonials'),
        },
      ],
    },
    {
      text: 'Помощ',
      href: getPermalink('/faq'),
    },
    {
      text: 'Контакти',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Свържете се с нас', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Условия', href: getPermalink('/terms') },
    { text: 'Политика за поверителност', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: 'Ехадом · Всички права запазени.',
};
