/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fefae0",

          secondary: "#00b0ce",

          accent: "#0098ff",

          neutral: "#180e14",

          "base-100": "#001d3d",

          info: "#71dcff",

          success: "#00f4cb",

          warning: "#ba7700",

          error: "#ff97b5",
        },
      },
    ],
  },
};
