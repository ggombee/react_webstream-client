import React from 'react'
import queryString from 'query-string'

const Register = () => {
  // eslint-disable-next-line no-restricted-globals
  const queryParams = queryString.parse(location.search)
  console.log('query', queryParams.step)
  return <>회원가입을 해볼까나왜이렇ㄱ</>
}

export default Register
