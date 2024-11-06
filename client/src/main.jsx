import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Featured/store/store';
import { Provider } from 'react-redux'
import AuthProvider from './providers/AuthProvider'


createRoot(document.getElementById('root')).render(

    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>


)
