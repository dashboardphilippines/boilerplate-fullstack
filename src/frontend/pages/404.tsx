import { NextPage } from 'next'
import { Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import AppBarComponent from '../layouts/moduleViewer/AppBarComponent'

const NotFoundPage: NextPage = (): ReactElement => {
  return (
    <>
      <AppBarComponent title='Project Boilerplate' backRoute='/' />
      <Typography
        color={'textPrimary'}
        variant={'h4'}
        sx={{
          padding: (theme) => ({
            marginBottom: theme.spacing()
          })
        }}
      >
        {'Error 404: Page Not Found'}
      </Typography>
    </>
  )
}

export default NotFoundPage
