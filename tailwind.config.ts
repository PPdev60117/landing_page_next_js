import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    keyframes:{
      fade :{
        '0%':{filter:'brightness.50'},
        '100%':{filter:'brightness.50'}
      },
    },
    animation:{
      fade : 'fade 1s ease-in'
    }
  },
  plugins: [],
};
export default config;
