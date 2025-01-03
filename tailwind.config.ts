import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        light:'#f9fafb',
        dark:'#1b1b1b',
        primary:"##b63e96",
        primaryDark:"##58e6d9",
        accentDarkPrimary:"#a020f0",
        accentDarkSecondary: "#f0a020"
      },
      screens:{
        xs: "479px",
        sm: "639px",
        md: "767px",
        lg: "1023px",
        xl: "1280px",
        "2xl": "1535px", 
      }
    },
  },
  plugins: [],
} satisfies Config;
