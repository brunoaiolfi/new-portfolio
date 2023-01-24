import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './theme'
import './global.css'
import { AboutMeProvider } from './context/AboutMeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AboutMeProvider>
        <ColorModeScript />
        <App />
      </AboutMeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
