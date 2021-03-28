import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import AppBarComponent from '../layouts/moduleViewer/AppBarComponent'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.spacing(64),
    margin: 'auto'
  },
  padding: {
    padding: theme.spacing(2)
  }
}))

const NotFoundPage: NextPage = (): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <AppBarComponent title='Project Boilerplate' backRoute='/' />
      <Typography color={'textPrimary'} variant={'h4'} className={classes.padding}>
        {'Error 404: Page Not Found'}
      </Typography>
    </>
  )
}

export default NotFoundPage
