/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],    //tem que passar onde vai receber as propriedades do tailwind
  theme: {

    fontSize: {
      sm: 14,
      md: 16,
      lg: 22,
      xl: 26,
      xxl: 34,
    },

    colors: {"purple-nuzzer": "#8A2BE2",                    //substituindo todas as cores
    "black": "#222222",
    "deep-blue nuzzer": "#151F42",
    "dark-purple": "#693699",
    "white": "#D9D9D9",
    "gray": "#9A9A9A",
    "transparent": "transparent",

  //obs: varias tonalidades de uma mesma cor, passar como objeto exp gray : {600: #152t1v}
  },
    
    extend: {                     //adicionar coisas novas ao tailwind
      fontFamily: {
       sans: "inter, sans-serif"}
    },
  },
  plugins: [],
}
