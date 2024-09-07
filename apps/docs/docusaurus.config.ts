import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { themes as prismThemes } from "prism-react-renderer";

import unocssPlugin from "./plugins/unocss.plugin.cjs";

const config: Config = {
  baseUrl: "/",
  title: "Saitama | Ondemand custodian wallet for everyone",
  tagline: "Saitama is fun",
  favicon: "img/favicon.ico",
  url: "https://saitama.fun/",

  organizationName: "saitamafun",
  projectName: "slash",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/banner.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Saitama",
      logo: {
        alt: "Saitama",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/saitamafun/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/saitama/",
            },
            {
              label: "Telegram",
              href: "https://discordapp.com/invite/saitama/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/saitama/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/saitamafun/",
            },
          ],
        },
      ],
      copyright: "Copyright © 2024 Saitama, Inc. Built with Docusaurus.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: {
        plain: {
          background: "black",
        },
        styles: prismThemes.dracula.styles,
      },
    },
    algolia: {
      appId: "ILVRD29XIH",
      apiKey: "83ebc355c208c461e51f7f8bb8082f29",
      indexName: "saitama_docs",
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [unocssPlugin],
};

export default config;
