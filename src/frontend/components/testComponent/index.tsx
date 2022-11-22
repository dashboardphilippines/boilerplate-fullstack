//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import query from './query'
import mutation from './mutation'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const TestComponent = (): ReactElement => {
  const [testData, setTestData] = useState<[]>()

  const { data, loading } = useQuery(query, {
    onCompleted: () => {
      setTestData(data)
    }
  })

  const variables = {
    id: '1'
  }

  const [mutateData, mutationState] = useMutation(mutation, {
    variables,
    onCompleted: () => {
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
      {data?.tests?.map((testDatum: { id: string; message: string }, index: number) => (
        <div style={{ margin: 2.5 }} key={index}>
          <Typography key={index}>{testDatum?.id}</Typography>
          <Typography key={index}>{testDatum?.message}</Typography>
        </div>
      ))}

      <Button
        variant='contained'
        color='primary'
        type='submit'
        disabled={mutationState.loading}
        onClick={() => mutateData()}
      >
        Press Me
      </Button>
    </>
  )
}

export default TestComponent
