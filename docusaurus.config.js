const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenSource',
  tagline: 'Winter Of Contributing ❄',
  url: 'https://gwoc-opensource.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gwoc-opensource', // Usually your GitHub org/user name.
  projectName: 'gwoc-opensource.github.io', // Usually your repo name.
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
        title: 'GWOC ❄',
        logo: {
          alt: 'My Site Logo',
          src: 'img/open_source.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Background/background',
            position: 'left',
            label: 'OpenSource',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'OpenSource',
                to: 'docs/Background/background',
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
