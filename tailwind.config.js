/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            backgroundUm : "#0F1722",
            backgroundDois: "#1D283A",
            button: "#102240",
            hoverColor: "#6C61FE",
            textColor: "#FFFFFF"
         },
         screens: {
            s380: "380px",
            s480: "480px",
            s580: "580px",
            s680: "680px",
            s780: "780px",
            s880: "880px",
            s830: "830px",
            s980: "980px",
            s1080: "1080px",
            s1180: "1180px",
            s1280: "1280px",
            s1380: "1380px",
            s1480: "1480px",
            s1580: "1580px",
            s1680: "1680px",
            s1780: "1780px",
            s1880: "1880px",
          },
          spacing: {
            18: "5rem",
            85: "21.3rem",
            90: "22.8rem",
            98: "37rem",
            1.25: "0.4rem",
            42: "166.5px",
            alturaPersonalizada: "65%"
          }
      },
   },
   plugins: [],
};
