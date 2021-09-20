import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'
import { ThemeProvider } from '@emotion/react'
import theme from '~/styles/theme'
import GlobalStyle from '~/styles/global'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const history: any = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStyle />
          <App />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
