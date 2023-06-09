/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-hover": "var(--primary-color-hover)",
      },
      textColor: {
        primary: "var(--primary-color)",
        "primary-hover": "var(--primary-color-hover)",
      },
      backgroundColor: {
        primary: "var(--primary-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "water-animation": "water-animation 4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
      keyframes: {
        "water-animation": {
          "0%, 100%": {
            "clip-path":
              "polygon(0% 45%,16% 44%,33% 50%,54% 60%,70% 61%,84% 59%,100% 52%,100% 100%,0% 100%)",
          },
          "50%": {
            "clip-path":
              "polygon(0% 60%,15% 65%,34% 66%,51% 62%,67% 50%,84% 45%,100% 46%,100% 100%,0% 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
