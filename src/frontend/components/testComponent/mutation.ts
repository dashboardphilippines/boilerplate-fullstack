import { gql } from '@apollo/client'

export default gql`
  mutation ($id: String!) {
    test_mutation(id: $id) {
      id
      message
    }
  }
`
