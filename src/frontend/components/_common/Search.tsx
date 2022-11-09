import React, { ReactElement, KeyboardEvent } from 'react'
import { makeStyles } from '@mui/styles'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import CancelIcon from '@mui/icons-material/Cancel'
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  textInput: {
    marginRight: theme.spacing()
  }
}))

const Search = ({
  searchText,
  setSearchText,
  onBlur,
  helperText,
  onKeyDown,
  onSearch,
  searchButtonDisabled
}: {
  searchText: string
  setSearchText: (string: string) => void
  onBlur?: VoidFunction
  helperText?: string
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void
  onSearch?: () => void
  searchButtonDisabled?: boolean
}): ReactElement => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        className={classes.textInput}
        variant={'outlined'}
        placeholder={'Search'}
        value={searchText}
        size={'small'}
        helperText={helperText}
        onChange={(e): void => {
          setSearchText(e.target.value)
        }}
        onKeyDown={onKeyDown}
        InputProps={{
          onBlur: onBlur ? onBlur : null,
          onKeyDown: (e): void => {
            if (onBlur && e.keyCode === 13) {
              onBlur()
            }
          },
          startAdornment: (
            <InputAdornment position={'start'}>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position={'end'}>
              <IconButton
                edge={'end'}
                onClick={(): void => {
                  setSearchText('')
                }}
              >
                <CancelIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {onSearch && (
        <Button color={'primary'} variant={'contained'} onClick={onSearch} disabled={searchButtonDisabled}>
          {'SUBMIT'}
        </Button>
      )}
    </div>
  )
}

export default Search
