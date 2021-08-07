import React from 'react'
import styled from '@emotion/styled'
import SideMenu from '~/components/SideMenu'
import Header from '~/components/Header'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {
  component: React.Component
}

const DefaultLayout: React.FC<Props> = (props) => {
  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child as React.ReactElement<{}>, { ...props })
  })

  return (
    <Container>
      <Layout>
        <SideMenu {...props} />
        <Main>
          <Header />
          <Contents>{children}</Contents>
        </Main>
      </Layout>
    </Container>
  )
}

export default DefaultLayout

const Container = styled.div`
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 1200px;
`

const Layout = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 185px);
  margin-left: 185px;
  height: 100%;
  background: black;
  );
`
const Contents = styled.div`
  padding-top: 50px;  
  height: 100%;
  padding-left: 60px;
`
