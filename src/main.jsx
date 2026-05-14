import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider envolve TODO o app, disponibilizando o tema */}
    <ThemeProvider theme={theme}>
      {/* GlobalStyle é um componente sem visual, só aplica CSS global */}
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
