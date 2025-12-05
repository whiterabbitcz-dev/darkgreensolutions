import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from screenshot
        brand: {
          lime: "#9EF01A",      // Lime green accent
          purple: "#7C3AED",    // Bright purple (hlavní fialová)
          violet: "#6D28D9",    // Darker violet for sections
          dark: "#0D0D0D",      // Almost black background
          black: "#000000",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #7C3AED 0%, #9EF01A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
