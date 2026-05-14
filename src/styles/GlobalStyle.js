// ================
// ESTILOS GLOBAIS 
// ================
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Reset moderno */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    min-height: 100vh;
    /* Suaviza renderização de fontes no macOS */
    -webkit-font-smoothing: antialiased;
  }

  /* Remove estilo padrão de botões e links */
  button { font-family: inherit; }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
`
