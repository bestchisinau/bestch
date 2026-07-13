import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import ScrollTopToOnRender from './lib/scroll-to-top-on-render.tsx'
import './lib/i18next.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollTopToOnRender>
          <App />
        </ScrollTopToOnRender>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
