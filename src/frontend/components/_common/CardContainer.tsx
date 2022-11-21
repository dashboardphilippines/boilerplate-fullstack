import React, { ReactElement } from 'react'
import { styled } from '@mui/material/styles'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import LinearProgress from '@mui/material/LinearProgress'

import classnames from 'classnames'

const PREFIX = 'CardContainer'

const classes = {
  root: `${PREFIX}-root`,
  maxHeight: `${PREFIX}-maxHeight`,
  media: `${PREFIX}-media`,
  borderSecondary: `${PREFIX}-borderSecondary`,
  borderPrimaryTop: `${PREFIX}-borderPrimaryTop`,
  borderSecondaryTop: `${PREFIX}-borderSecondaryTop`
}

const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.root}`]: {
    marginBottom: theme.spacing()
  },

  [`& .${classes.maxHeight}`]: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },

  [`& .${classes.media}`]: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },

  [`& .${classes.borderSecondary}`]: {
    borderLeft: `${theme.spacing()} solid ${theme.palette.secondary.dark}`
  },

  [`& .${classes.borderPrimaryTop}`]: {
    borderTop: `${theme.spacing()} solid ${theme.palette.primary.dark}`
  },

  [`& .${classes.borderSecondaryTop}`]: {
    borderTop: `${theme.spacing()} solid ${theme.palette.secondary.dark}`
  }
}))

const CardContainer = ({
  avatar,
  title,
  imageUrl,
  subheader,
  content,
  children,
  actions,
  headerAction,
  loading = false,
  borderSecondary = false,
  borderPrimaryTop = false,
  borderSecondaryTop = false,
  maxHeight = false
}: {
  avatar?: ReactElement
  title?: string
  imageUrl?: string
  subheader?: string
  content?: ReactElement
  children?: ReactElement | ReactElement[]
  actions?: ReactElement
  headerAction?: ReactElement
  loading?: boolean
  borderSecondary?: boolean
  borderPrimaryTop?: boolean
  borderSecondaryTop?: boolean
  maxHeight?: boolean
}): ReactElement => {
  return (
    <StyledCard
      className={classnames(
        classes.root,
        borderSecondary ? classes.borderSecondary : '',
        borderPrimaryTop ? classes.borderPrimaryTop : '',
        borderSecondaryTop ? classes.borderSecondaryTop : '',
        maxHeight ? classes.maxHeight : ''
      )}
      variant={'outlined'}
      elevation={0}
    >
      <Collapse in={loading}>
        <LinearProgress />
      </Collapse>
      {(avatar || title || subheader || headerAction) && (
        <CardHeader avatar={avatar} title={title} subheader={subheader} action={headerAction} />
      )}
      {imageUrl && <CardMedia className={classes.media} image={imageUrl} title={'Image'} />}
      {(content || children) && (
        <CardContent>
          {content}
          {children}
        </CardContent>
      )}
      {maxHeight && (
        <div
          style={{
            flex: 1
          }}
        />
      )}
      {actions && <CardActions>{actions}</CardActions>}
    </StyledCard>
  )
}

export default CardContainer