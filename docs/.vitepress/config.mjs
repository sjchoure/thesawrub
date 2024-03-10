import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "thesawrub",
  description: "Thesaurus for Sourabh",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About Me", link: "/about-me/index" },
    ],
    logo: { src: "/bgpme.png", width: 24, height: 24 },

    sidebar: [
      {
        text: "About Me",
        items: [
          { text: "Markdown Examples", link: "/about-me/markdown-examples" },
          { text: "Runtime API Examples", link: "/about-me/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "linkedin", link: "https://linkedin.com/in/sjchoure" },
      { icon: "github", link: "https://github.com/sjchoure" },
      { icon: "instagram", link: "https://instagram.com/sjchoure" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 thesawrub",
    },
  },
});
