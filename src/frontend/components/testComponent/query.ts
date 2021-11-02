import { gql } from '@apollo/client'

export default gql`
  query {
    tests {
      id
      message
    }
  }
`