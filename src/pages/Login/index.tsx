import React from 'react'
import styled from '@emotion/styled'
import Background from '~/assets/background/background.png'

const Login = () => {
  return <Container>it's Login Page</Container>
}

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  background-image: url(${Background});
`

export default Login
