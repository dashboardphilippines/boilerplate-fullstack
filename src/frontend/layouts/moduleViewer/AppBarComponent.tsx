//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton'
import { AppBar, Toolbar } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'

const AppBarComponent = ({ title, backRoute }: { title: string; backRoute?: string }): ReactElement => {
  const router = useRouter()

  return (
    <AppBar position={'static'}>
      <Toolbar>
        {backRoute && (
          <IconButton
            sx={(theme) => ({
              marginRight: theme.spacing(2)
            })}
            edge={'start'}
            color={'inherit'}
            onClick={(): void => {
              router.push(backRoute)
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
        )}
        <Typography sx={{ flexGrow: 1 }} variant={'h6'}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent
