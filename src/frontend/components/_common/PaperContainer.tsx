import React, { ReactElement } from 'react'

import Paper from '@mui/material/Paper'
import Collapse from '@mui/material/Collapse'
import LinearProgress from '@mui/material/LinearProgress'

const PaperContainer = ({
  content,
  children,
  loading = false,
  hideMargin = false,
  borderPrimary = false
}: {
  content?: ReactElement
  children?: ReactElement | ReactElement[]
  loading?: boolean
  hideMargin?: boolean
  borderPrimary?: boolean
}): ReactElement => {
  return (
    <Paper
      elevation={0}
      sx={[
        !hideMargin &&
          ((theme) => ({
            marginBottom: theme.spacing()
          })),
        borderPrimary &&
          ((theme) => ({
            marginBottom: theme.spacing(),
            borderLeft: `${theme.spacing()} solid ${theme.palette.primary.main}`
          }))
      ]}
      variant={'outlined'}
    >
      <Collapse in={loading}>
        <LinearProgress />
      </Collapse>
      {content}
      {children}
    </Paper>
  )
}

export default PaperContainer
