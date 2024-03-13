import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "thesawrub",
  description: "Thesaurus for Sourabh",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About Me", link: "/about-me/", activeMatch: '/about-me/' },
    ],
    logo: { src: "/bgpme.png", width: 24, height: 24 },

    sidebar: {
      "/about-me/": [
        {
          text: "About Me",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/about-me/" },
            { text: "Work Experience", link: "/about-me/work-experience" },
            { text: "Projects", link: "/about-me/projects" },
            { text: "Side Hustle", link: "/about-me/side-hustle" },
          ],
        },
      ],
    },

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
