//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement } from 'react'

import App from 'next/app'
import { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { ThemeProvider } from '@mui/material/styles'
import darkTheme from '../themes/darkTheme'
import theme from '../themes/theme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../_utils/createEmotionCache'

const CssBaseline = dynamic(() => import('@mui/material/CssBaseline'))
const Notification = dynamic(() => import('../components/_common/Notification'))
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

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

class MyApp extends App {
  state = {
    darkTheme: false
  }

  render(): ReactElement {
    const { Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps = this.props

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
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{'App Boilerplate'}</title>
            <meta
              name={'viewport'}
              content={'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'}
            />
          </Head>
          <ThemeProvider theme={globalAny.darkTheme ? darkTheme : theme}>
            <CssBaseline />
            <ApolloProvider client={client}>
              <Component {...pageProps} />
              <Notification />
            </ApolloProvider>
          </ThemeProvider>
        </CacheProvider>
      </>
    )
  }
}

export default MyApp
