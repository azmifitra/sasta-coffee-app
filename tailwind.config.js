/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: {
          main: "#EB7023",
          secondary: "#F4921D",
        },
        black: {
          main: "#010101",
        },
        brown: {
          main: "#AC7E53",
          secondary: "#ECDEB9",
        },
        red: {
          main: "#B32C2B",
          secondary: "#EC6861",
        },
        gray: {
          white: "#FCFCFD"
        }
      },
    },
  },
  plugins: [],
};
