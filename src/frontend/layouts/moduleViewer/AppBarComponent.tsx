//eslint-disable-next-line
const globalAny: any = global
import { makeStyles } from '@mui/styles'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton'
import { AppBar, Toolbar } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const AppBarComponent = ({ title, backRoute }: { title: string; backRoute?: string }): ReactElement => {
  const classes = useStyles({})
  const router = useRouter()

  return (
    <AppBar position={'static'}>
      <Toolbar>
        {backRoute && (
          <IconButton
            className={classes.menuButton}
            edge={'start'}
            color={'inherit'}
            onClick={(): void => {
              router.push(backRoute)
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
        )}
        <Typography className={classes.title} variant={'h6'}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent
