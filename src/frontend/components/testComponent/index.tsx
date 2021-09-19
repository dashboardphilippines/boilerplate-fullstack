import React, { ReactElement, useState, useCallback } from 'react'
import { makeStyles, TextField, Typography } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/client'
import query from './query'


const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2.5)
    },
  }));
  
const TestComponent = (): ReactElement => {
    const classes = useStyles()

    const [message, setMessage] = useState<string>('')

    const { data, loading } = useQuery(query,{ 
        onCompleted: () =>{
            setMessage(data[0]?.message)
        }
    })
    console.log(data)
    console.log('Hi' + message)

    return (
        <>
            <div className={classes.root}>
                <Typography>{message}</Typography>
            </div>
        </>
    )

}

export default TestComponent