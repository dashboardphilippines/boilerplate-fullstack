import React, { ReactElement } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import CircularProgress from '@mui/material/CircularProgress'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'

const ModalContainer = ({
  open,
  onClose,
  title,
  content,
  loading,
  primaryButtonTitle,
  primaryButtonOnClick,
  primaryButtonDisabled,
  secondaryButtonTitle,
  secondaryButtonOnClick,
  secondaryButtonDisabled,
  tertiaryButtonTitle,
  tertiaryButtonOnClick,
  tertiaryButtonDisabled,
  maxWidth,
  fullScreen
}: {
  open: boolean
  onClose?: VoidFunction
  permanent?: boolean
  title?: string
  content?: ReactElement
  loading?: boolean
  primaryButtonTitle?: string
  primaryButtonOnClick?: VoidFunction
  primaryButtonDisabled?: boolean
  secondaryButtonTitle?: string
  secondaryButtonOnClick?: VoidFunction
  secondaryButtonDisabled?: boolean
  tertiaryButtonTitle?: string
  tertiaryButtonOnClick?: VoidFunction
  tertiaryButtonDisabled?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  fullScreen?: boolean
}): ReactElement => {
  return (
    <Dialog open={Boolean(open)} onClose={onClose} fullWidth fullScreen={fullScreen} maxWidth={maxWidth || 'lg'}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <Collapse in={Boolean(!loading && content)}>{content}</Collapse>
        <Collapse
          in={loading}
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CircularProgress />
        </Collapse>
      </DialogContent>
      <DialogActions
        disableSpacing
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
          }
        })}
      >
        {tertiaryButtonTitle && (
          <Button
            color={'primary'}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(1)
              }
            })}
            onClick={tertiaryButtonOnClick}
            disabled={loading || Boolean(tertiaryButtonDisabled)}
          >
            {tertiaryButtonTitle}
          </Button>
        )}
        {secondaryButtonTitle && (
          <Button
            id={'modal-secondary-button'}
            color={'secondary'}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(1)
              }
            })}
            onClick={secondaryButtonOnClick}
            disabled={loading || Boolean(secondaryButtonDisabled)}
          >
            {secondaryButtonTitle}
          </Button>
        )}
        {primaryButtonTitle && (
          <Button
            id={'modal-primary-button'}
            color={'primary'}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(1)
              }
            })}
            onClick={primaryButtonOnClick}
            disabled={loading || Boolean(primaryButtonDisabled)}
          >
            {primaryButtonTitle}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default ModalContainer
