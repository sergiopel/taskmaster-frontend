/** @type {import('tailwindcss').Config} */
// Esta linha é apenas para TypeScript, fornecendo autocompletion e type checking
// o export torna o objeto disponível para ser importado por outros arquivos
// o default indica que é o export principal/padrão do arquivo

export default {
//Esta seção define onde o Tailwind deve procurar por classes para gerar o CSS
//"./index.html" - procura classes no arquivo index.html
//"./src/**/*.{js,ts,jsx,tsx}" - procura em todos os arquivos JavaScript/TypeScript/React dentro da pasta src
//** significa "qualquer subdiretório"
//*.{js,ts,jsx,tsx} significa "qualquer arquivo com estas extensões"
//Isto é importante para o tree-shaking (processo que remove CSS não utilizado) 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
//Esta seção permite customizar ou estender o tema padrão do Tailwind
//Você pode modificar:
//Cores
//Tamanhos
//Fontes
//Espaçamentos
//etc
  theme: {
    extend: {},
  },
  //Array para adicionar plugins do Tailwind
  //Plugins podem adicionar novos estilos, componentes ou funcionalidades
  plugins: [],
}
