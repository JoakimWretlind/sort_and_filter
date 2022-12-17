import { createGlobalStyle } from "styled-components";

// Global Theme
export const searchTheme = {
  black: "#222",
  lightGray: "hsl(0, 0%, 81%)",
  gray: "hsl(0, 0%, 71%)",
  pink: "hsl(330, 100%, 71%)",
  white: "hsl(60, 5%, 96%)",
};

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  background-color: hsl(60, 5%, 96%);
  font-family: 'montserrat',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
    }

ul, li {
  list-style: none;
    }
`;
