//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement, FunctionComponent } from 'react'
import AppBarComponent from './AppBarComponent'
import { NextPage } from 'next'
import { useTheme } from '@mui/material/styles'

export default (
    Page: FunctionComponent,
    { title, backRoute, wide }: { title: string; backRoute: string; wide?: boolean }
  ) =>
  (): FunctionComponent | NextPage | ReactElement => {
    const theme = useTheme()

    return (
      <>
        <AppBarComponent title={title} backRoute={backRoute} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: 'auto',
            marginTop: theme.spacing(4),
            minHeight: process.browser ? window.innerHeight * 0.75 - Number(theme.mixins.toolbar.minHeight) : '75vh',
            maxWidth: !wide ? theme.spacing(128) : ''
          }}
        >
          <div
            style={{
              [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(2),
                marginRight: theme.spacing(2),
                marginLeft: theme.spacing(2),
                marginBottom: theme.spacing(8)
              },
              [theme.breakpoints.up('md')]: {
                marginTop: theme.spacing(),
                marginRight: theme.spacing(),
                marginLeft: theme.spacing(),
                marginBottom: theme.spacing(4)
              }
            }}
          >
            <Page />
          </div>
        </div>
      </>
    )
  }
