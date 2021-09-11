import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import '@/styles/global.less'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import stores from '@/stores'
import Layout from "@/layouts";

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
        <Layout>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
