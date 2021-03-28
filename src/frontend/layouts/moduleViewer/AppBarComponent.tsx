//eslint-disable-next-line
const globalAny: any = global
import { makeStyles } from '@material-ui/core/styles'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import { AppBar, Toolbar } from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowBackIos'
import Typography from '@material-ui/core/Typography'

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
