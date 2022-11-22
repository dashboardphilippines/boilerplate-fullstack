import React, { ReactElement } from 'react'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const PageTitle = ({
  title,
  buttonTitle,
  buttonOnClick
}: {
  title: string
  buttonTitle?: string
  buttonOnClick?: VoidFunction
}): ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {buttonTitle && (
        <Button
          sx={(theme) => ({
            marginBottom: theme.spacing()
          })}
          variant={'outlined'}
          onClick={buttonOnClick}
        >
          {buttonTitle}
        </Button>
      )}
      <Typography
        variant={'h4'}
        gutterBottom
        sx={(theme) => ({
          marginBottom: theme.spacing()
        })}
      >
        {title}
      </Typography>
    </>
  )
}

export default PageTitle
