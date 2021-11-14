const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenSource',
  tagline: 'Documentation ☀',
  url: 'https:/docsopensource.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'docsopensource', // Usually your GitHub org/user name.
  projectName: 'docsopensource.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'deploy',
  onBrokenLinks : 'ignore',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OpenSource',
        logo: {
          alt: 'My Site Logo',
          src: 'img/open_source.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Background/background',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'OpenSource',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/docsopensource/docsopensource.github.io',
              },
              {
                label: 'Contributors',
                href: 'https://github.com/girlscript/winter-of-contributing/graphs/contributors',
              },
            ],
          },
          {
            title: 'GWOC Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/girlscript/winter-of-contributing',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/girlscriptwoc?t=wQYmJKKM0e6hJI5UllXe4w&s=09',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/girlscript-winter-of-contributing/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Domain Supervisor',
                href: 'https://github.com/Aryamanz29',
              },

              {
                label: 'Winter Of Contributing Repository',
                href: 'https://github.com/girlscript/winter-of-contributing',
              },

            ],
          
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Made With ❤ By <a href ="https://github.com/Aryamanz29"><strong>AryamanZ29</strong> </a> `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      require.resolve('@cmfcmf/docusaurus-search-local')
    ],
  
};

module.exports = config;
