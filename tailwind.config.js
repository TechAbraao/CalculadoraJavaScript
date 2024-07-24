/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            backgroundUm : "#0F1722",
            backgroundDois: "#1D283A",
            button: "#344454",
            hoverColor: "#6C61FE",
            textColor: "#FFFFFF"
         }
      },
   },
   plugins: [],
};
