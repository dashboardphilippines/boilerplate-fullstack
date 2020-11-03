import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import Cookies from 'js-cookie'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    accessToken: Cookies.get('accessToken')
  }
})

export default client
