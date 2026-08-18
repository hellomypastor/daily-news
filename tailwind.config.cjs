const { fontFamily } = require("tailwindcss/defaultTheme");
const config = require("./tailwind.theme.config.cjs");
/**
 * Find the applicable theme color palette, or use the default one
 */
const themeConfig =
  process.env.THEME_KEY && config[process.env.THEME_KEY]
    ? config[process.env.THEME_KEY]
    : config.default;
const { colors } = themeConfig;
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,ts}"],
  safelist: ["dark"],
  theme: {
    fontFamily: {
      sans: ["Fira Code", ...fontFamily.sans],
    },
    extend: {
      colors: {
        theme: {
          ...colors,
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
            blockquote: {
              color: colors.dark.primary,
              borderColor: colors.dark.primary,
            },
            "blockquote > p::before, p::after": {
              color: colors.dark.primary,
            },
            a: {
              color: colors.dark.secondary,
              "&:hover": {
                color: colors.dark.primary,
              },
            },
            h2: {
              color: colors.dark.primary,
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: colors.secondary,
              "&:hover": {
                color: colors.primary,
              },
            },
            blockquote: {
              color: colors.primary,
              fontSize: theme("fontSize.l"),
              borderColor: colors.primary,
              backgroundColor: colors.background,
            },
            "blockquote > p::before, p::after": {
              color: colors.primary,
            },
            h1: {
              color: colors.primary,
            },
            h2: {
              color: "var(--ink)",
              marginTop: "1.75em",
              marginBottom: "0.6em",
              fontFamily: "var(--font-display)",
            },
            h3: {
              color: "var(--ink)",
              margin: "1.5em 0 0.5em",
              fontFamily: "var(--font-display)",
            },
            p: {
              margin: "0.75em 0em",
              lineHeight: "1.8",
            },
            table: {
              fontSize: "0.86em",
            },
            thead: {
              borderBottomColor: "var(--line-strong)",
            },
            "tbody tr": {
              borderBottomColor: "var(--line)",
            },
            ".prose blockquote": {
              fontStyle: "normal", // 设置引用内部的文字不斜体
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
