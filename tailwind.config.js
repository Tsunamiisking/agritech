/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        playfair: ["Playfair Display", "cursive"],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Custom text shadow
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        primary: "#147917",
        secondary: "#52C755",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        curve: "10px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        },
      });
    },
  ],
};
