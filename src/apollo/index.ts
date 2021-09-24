import { ApolloClient, InMemoryCache } from '@apollo/client'
// import {
//   ApolloClient,
//   InMemoryCache,
//   makeVar,
//   createHttpLink,
//   split,
// } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
// import { getMainDefinition } from '@apollo/client/utilities'
// import { LOCALSTORAGE_TOKEN } from '../constants'

// const token = localStorage.getItem(LOCALSTORAGE_TOKEN)
// export const isLoggedInVar = makeVar(Boolean(token))
// export const authTokenVar = makeVar(token)

// const httpLink = createHttpLink({
//   //   uri:
//   //     process.env.NODE_ENV === 'production'
//   //       ? 'http://3.38.68.160:3000/graphql'
//   //       : 'http://localhost:4000/graphql',
//   uri: 'http://localhost:4000/graphql',
// })

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${authTokenVar()}`,
//     },
//   }
// })

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     )
//   },
//   // wsLink,
//   authLink.concat(httpLink)
// )

// export const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           isLoggedIn: {
//             read() {
//               return isLoggedInVar()
//             },
//           },
//           token: {
//             read() {
//               return authTokenVar()
//             },
//           },
//         },
//       },
//     },
//   }),
// })

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})
