import { gql } from '@apollo/client'

export default gql`
  mutation AddSendgridTemplate(
    $id: String!
  ) {
    test_mutation(
      id: $id
    ) {
      id
      message
    }
  }
`
