import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { client } from './config/query-client.js'
import { store } from './redux/store.js';
import { theme } from './mui-config/mui-config.js';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}><App /><CssBaseline /></ThemeProvider>
      </Provider><ToastContainer />
    </QueryClientProvider>
  </BrowserRouter>


)
