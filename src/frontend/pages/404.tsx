import { NextPage } from 'next'
import { Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import AppBarComponent from '../layouts/moduleViewer/AppBarComponent'
import theme from 'frontend/themes/theme'


const NotFoundPage: NextPage = (): ReactElement => {
  return (
    <>
      <AppBarComponent title='Project Boilerplate' backRoute='/' />
      <Typography color={'textPrimary'} variant={'h4'} sx={{ maxWidth: theme.spacing(64), padding: theme.spacing(2) }}>
        {'Error 404: Page Not Found'}
      </Typography>
    </>
  )
}

export default NotFoundPage
