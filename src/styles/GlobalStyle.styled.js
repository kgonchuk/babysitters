import { createGlobalStyle } from "styled-components";

import { baseTheme } from "./theme";
export const Global = createGlobalStyle`
body {
  font-family: 'HelveticaNeue-500',  sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  color: ${baseTheme.colors.secondaryText};
  transition: ${baseTheme.transition};

}


ul {
  margin: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  padding: 0;
  margin: 0;
}
a,
button {
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  color: inherit;
}
*{
    box-sizing: border-box;
    }
`;
