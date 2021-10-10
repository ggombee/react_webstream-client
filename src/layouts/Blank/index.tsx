import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from '@emotion/styled'

interface Props extends RouteComponentProps<void> {
  component: React.Component
}

const BlankLayout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`

export default BlankLayout
