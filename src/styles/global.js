import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'sans-serif';
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.FONT_200};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_900} inset !important;
}
input:-webkit-autofill{
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.FONT_100} !important;
}
li {
  list-style-type: none;
}
`;
