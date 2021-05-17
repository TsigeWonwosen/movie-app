import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

  html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #333333;
  font-size: 16px;
}
.App {
  position: relative;
  background-color: #080c41;
  text-align: center;
  width: 100%;
  min-height: 100vh;
}

img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

body::-webkit-scrollbar {
  width: 8px;
}

/* Track */
body::-webkit-scrollbar-track {
  background: #2e3e86;
}

/* Handle */
body::-webkit-scrollbar-thumb {
  background: rgb(99, 107, 146);
  border-radius: 14px;
}

/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: rgb(82, 113, 214);
}

`;
