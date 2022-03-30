//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement } from 'react'

import App from 'next/app'
import Head from 'next/head'

import ThemeProvider from '@mui/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { Theme } from '@mui/material'

import darkTheme from '../themes/darkTheme'
import theme from '../themes/theme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import Notification from '../components/_common/Notification'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      lat: number
      lng: number
      toggleDarkTheme: VoidFunction
      darkTheme: boolean
      setNotification: (type: string, message: string) => void
    }
  }
}
class MyApp extends App {
  state = {
    darkTheme: false
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props

    globalAny.toggleDarkTheme = (): void => {
      if (process.browser) {
        window.localStorage.setItem(
          'enableDarkTheme',
          window.localStorage.enableDarkTheme === 'true' ? 'false' : 'true'
        )
      }
      this.setState({ darkTheme: !this.state.darkTheme })
      globalAny.darkTheme = !this.state.darkTheme
    }

    return (
      <>
        <Head>
          <title>{'App Boilerplate'}</title>
          <meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'} />
        </Head>
        <ThemeProvider theme={globalAny.darkTheme ? darkTheme : theme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
            <Notification />
          </ApolloProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
