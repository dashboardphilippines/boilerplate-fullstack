import { NextPage } from 'next'
import { Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import AppBarComponent from '../layouts/moduleViewer/AppBarComponent'
import TestComponent from 'frontend/components/testComponent'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <AppBarComponent title='Project Boilerplate' />
      <Typography
        color={'textPrimary'}
        variant={'h4'}
        sx={{
          padding: (theme) => ({
            marginBottom: theme.spacing()
          })
        }}
      >
        {'Hello, World!'}
      </Typography>
      <TestComponent />
    </>
  )
}

export default Home
