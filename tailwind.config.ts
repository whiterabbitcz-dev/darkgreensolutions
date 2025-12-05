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
        // Primary Dark Green Solutions palette
        primary: {
          DEFAULT: "#9FF618", // Lime green - main accent
          light: "#43FF56",   // Bright green
          dark: "#7BC712",    // Darker lime
        },
        secondary: {
          DEFAULT: "#3F02B0", // Purple/Violet
          light: "#5A1ED0",
          dark: "#2A0180",
        },
        dark: {
          DEFAULT: "#000000",
          light: "#1A1A1A",
          gray: "#545454",
          muted: "#363636",
        },
        light: {
          DEFAULT: "#FFFFFF",
          gray: "#FCFCFC",
          muted: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(197deg, #9FF618 0%, rgb(63, 2, 176) 82%)",
        "gradient-primary": "linear-gradient(135deg, #9FF618 0%, #3F02B0 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

