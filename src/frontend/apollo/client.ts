import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'
import Cookies from 'js-cookie'
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const accessToken = Cookies.get('accessToken')
  return {
    headers: {
      ...headers,
      accessToken
    }
  }
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: authLink.concat(
    createUploadLink({
      uri: '/graphql',
      fetch
    })
  )
})
export default client
