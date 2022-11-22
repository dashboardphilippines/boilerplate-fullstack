import React, { ReactElement, FunctionComponent } from 'react'
import { useTheme } from '@mui/material/styles'
import { NextPage } from 'next'
import Typography from '@mui/material/Typography'

export default (Page: FunctionComponent) => (): FunctionComponent | NextPage | ReactElement => {
  const theme = useTheme()

  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'fixed',
          backgroundImage: 'linear-gradient(transparent, #002365 )',
          opacity: '70%',
          zIndex: -1
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          minHeight: '100vh',
          paddingTop: theme.spacing(4)
        }}
      >
        <div>
          <img
            alt={''}
            src={'/static/logo.svg'}
            style={{
              height: theme.spacing(12.5),
              marginBottom: theme.spacing(2),
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block'
            }}
          />
          <Typography variant={'h4'} align={'center'} style={{ color: '#00B200', marginBottom: theme.spacing(3) }}>
            {'Specimen Submitted Successfully!'}
          </Typography>
          <div
            style={{
              paddingBottom: theme.spacing(8),
              paddingLeft: theme.spacing(),
              paddingRight: theme.spacing(),
              maxWidth: theme.spacing(64),
              margin: 'auto'
            }}
          >
            <Page />
          </div>
        </div>
      </div>
    </>
  )
}
