import React from 'react'
import { css } from '@emotion/react'

import styled from '@emotion/styled'
import Background from '~/assets/background/background.png'

const Login = () => {
  return (
    <div css={container}>
      <button css={backWrapper}>
        <div css={word}>GO HOME</div>
      </button>
      <div css={loginWrapper}>
        <div css={logoWrapper}>dd</div>
      </div>
    </div>
  )
}

const container = css`
  display: flex;
  flex: 1;
  overflow: auto;
  background-image: url(${Background});
`

const backWrapper = css`
  margin-top: 58px;
  width: 140px;
  height: 21px;
  border-bottom: solid 2px #474747;
  :hover {
    border-bottom: solid 2px red;
  }
`
const word = css`
  color: white;
  margin-left: 70px;
  width: 66px;
`

const loginWrapper = css`
  display: flex;
  justify-content: center;
  direction: vertical;
  width: 150px;
  height: 800px;
  background-color: white;
  margin-top: 175px;
`

const logoWrapper = css`
  color: white;
`

export default Login
