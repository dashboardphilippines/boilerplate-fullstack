import React, { ReactElement } from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

import Paper from '@mui/material/Paper'
import Collapse from '@mui/material/Collapse'
import LinearProgress from '@mui/material/LinearProgress'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing()
  },
  borderPrimary: {
    marginBottom: theme.spacing(),
    borderLeft: `${theme.spacing()}px solid #d22a33`
  }
}))

const PaperContainer = ({
  content,
  loading = false,
  hideMargin = false,
  borderPrimary = false
}: {
  content: ReactElement
  loading?: boolean
  hideMargin?: boolean
  borderPrimary?: boolean
}): ReactElement => {
  const classes = useStyles({})

  return (
    <Paper
      elevation={0}
      className={classNames(hideMargin ? '' : classes.root, borderPrimary ? classes.borderPrimary : '')}
      variant={'outlined'}
    >
      <Collapse in={loading}>
        <LinearProgress />
      </Collapse>
      {content}
    </Paper>
  )
}

export default PaperContainer
