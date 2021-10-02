import React from 'react'
import styled from '@emotion/styled'
import SearchBox from '~/components/SerachBox'
import UserButton from '~/components/UserButton'

const Header = () => {
  return (
    <Container>
      <SearchBox />
      <UserButton />
    </Container>
  )
}

const Container = styled.div`
  height: 80px;
  background-color: transparent;
  padding-top: 37px;
  padding-left: 60px;
`

export default Header
