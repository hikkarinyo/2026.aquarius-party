import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createTheme, MantineProvider } from '@mantine/core'

import App from './App.tsx'

import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

const theme = createTheme({
  fontFamily: 'Inter, system-ui, sans-serif',
  colors: {
    neonPink: [
      '#ffe0f0',
      '#ffb3dc',
      '#ff80c6',
      '#ff4db0',
      '#ff1a9a',
      '#ff008c',
      '#e6007a',
      '#cc0068',
      '#b30056',
      '#990044',
    ],
  },
  primaryColor: 'neonPink',
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} withCssVariables withStaticClasses>
      <App/>
    </MantineProvider>
  </StrictMode>,
)
