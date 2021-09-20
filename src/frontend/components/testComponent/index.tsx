import React, { ReactElement, useState } from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/client'
import query from './query'
import mutation from './mutation'

const globalAny: any = global


const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2.5)
    },
  }));
  
const TestComponent = (): ReactElement => {
    const classes = useStyles()
    const [testData, setTestData] = useState<[]>()

    const { data, loading } = useQuery(query,{ 
        onCompleted: (e) =>{
            setTestData(data)

        }
    })

    const variables = {
        id: '1'
    }

    const [mutateData, mutationState] = useMutation(mutation, {
        variables,
        onCompleted: (e) => {
          globalAny.setNotification('success', 'Mutation successful')
        },
        onError: (error) => {
          globalAny.setNotification('error', error.graphQLErrors[0]?.message || error.message)
        }
      })

    if (!loading) {
        console.log('Data has been loaded! All the data can be retrieved with "testData" state')
        console.log(testData)
    }


    return (
        <>  
            {data?.tests?.map((testDatum: any) => (
                <div className={classes.root}>
                    <Typography>{testDatum?.id}</Typography>
                    <Typography>{testDatum?.message}</Typography>
                </div>
            ))}  

            <Button
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
              disabled={mutationState.loading}
              onClick={() =>
                mutateData()
              }
            >
                Press Me
            </Button>
        </>
    )

}

export default TestComponent