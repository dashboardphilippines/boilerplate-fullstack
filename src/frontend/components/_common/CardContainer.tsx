import React, { ReactElement } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import LinearProgress from '@mui/material/LinearProgress'

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
    <Card
      sx={[
        {
          marginBottom: 'auto'
        },
        borderSecondary &&
          ((theme) => ({
            borderLeft: `${theme.spacing()} solid ${theme.palette.secondary.dark}`
          })),
        borderPrimaryTop &&
          ((theme) => ({
            borderTop: `${theme.spacing()} solid ${theme.palette.primary.dark}`
          })),
        borderSecondaryTop &&
          ((theme) => ({
            borderTop: `${theme.spacing()} solid ${theme.palette.secondary.dark}`
          })),
        maxHeight && {
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }
      ]}
      variant={'outlined'}
      elevation={0}
    >
      <Collapse in={loading}>
        <LinearProgress />
      </Collapse>
      {(avatar || title || subheader || headerAction) && (
        <CardHeader avatar={avatar} title={title} subheader={subheader} action={headerAction} />
      )}
      {imageUrl && (
        <CardMedia
          sx={{
            height: 0,
            paddingTop: '56.25%' // 16:9
          }}
          image={imageUrl}
          title={'Image'}
        />
      )}
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
    </Card>
  )
}

export default CardContainer
