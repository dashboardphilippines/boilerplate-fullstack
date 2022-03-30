import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import { Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import AppBarComponent from '../layouts/moduleViewer/AppBarComponent'
import TestComponent from 'frontend/components/testComponent'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.spacing(64),
    margin: 'auto'
  },
  padding: {
    padding: theme.spacing(2)
  }
}))

const Home: NextPage = (): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <AppBarComponent title='Project Boilerplate' />
      <Typography color={'textPrimary'} variant={'h4'} className={classes.padding}>
        {'Hello, World!'}
      </Typography>
      <TestComponent />
    </>
  )
}

export default Home
