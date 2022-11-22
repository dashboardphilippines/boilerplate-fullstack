//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement, useState } from 'react'
import Cookies from 'js-cookie'
import { useQuery } from '@apollo/client'

import query from './query'

import Typography from '@mui/material/Typography'
import PaperContainer from '../components/_common/PaperContainer'
import theme from 'frontend/themes/theme'

const AuthorizationControls = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
  const [show, setShow] = useState(false)

  const accesstoken = Cookies.get('accessToken')

  if (process.browser && !accesstoken) {
    window.location.replace('/auth/login')
  }

  const { loading } = useQuery(query, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      const role = data?.user?.role

      if (!data || !data?.user || !role) {
        globalAny.setNotification('error', 'You are not authorized to access this area.')
        Cookies.remove('accessToken')
        return
      }

      if (data?.user?.token) {
        Cookies.set('accessToken', data.user.token)
      }

      setShow(true)
    },
    onError: () => {
      Cookies.remove('accessToken')
      globalAny.setNotification('error', 'Please login to continue.')
      window.location.replace('/auth/login')
    },
    pollInterval: 1000 * 60 * 4,
    notifyOnNetworkStatusChange: true
  })

  if (loading) {
    return (
      <div style={{ maxWidth: theme.spacing(64), margin: 'auto' }}>
        <PaperContainer
          borderPrimary
          content={
            <Typography color={'textPrimary'} variant={'h4'} style={{ padding: '1.5rem' }}>
              {'Loading. Please wait.'}
            </Typography>
          }
        />
      </div>
    )
  }

  if (show) {
    return <>{children}</>
  }

  return <></>
}

export default AuthorizationControls
