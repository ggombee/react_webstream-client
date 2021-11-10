import React from 'react'
import { css } from '@emotion/react'

import Background from '~/assets/background/background.png'
import Logo from '~/assets/logo.png'

const Login = () => {
  const [isSelected, setIsSelected] = React.useState(1)
  return (
    <div css={container}>
      <div css={buttonWrapper}>
        <button css={backButton}>
          <div css={word}>GO HOME</div>
        </button>
      </div>
      <div css={loginWrapper}>
        <div css={logoWrapper}>
          <img src={Logo} alt="로고이미지" />
        </div>
        <div css={content}>
          <div css={titleWrapper}>
            <button
              onClick={() => setIsSelected(1)}
              // css={titleButton(isSelected === 1)}
              css={titleButton}
              style={{ borderBottom: isSelected === 1 ? 'solid 2px red' : '' }}
            >
              Sign in
            </button>
            <button
              onClick={() => setIsSelected(2)}
              // css={titleButton(isSelected === 2)}
              css={titleButton}
              style={{ borderBottom: isSelected === 2 ? 'solid 2px red' : '' }}
            >
              Sign up
            </button>
          </div>
          <div css={inputWrapper}>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
          </div>
          <div css={confirmWrapper}>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk">
              <p>Keep me logged in</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

const container = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  width: 100%;
  background-image: url(${Background});
`

const buttonWrapper = css`
  height: 30px;
  margin-top: 58px;
`

const backButton = css`
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
  width: 100%;
  height: 800px;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const logoWrapper = css`
  color: white;
`

const content = css`
  margin-top: 94px;
  width: 380px;
  height: 580px;
  display: flex;
  flex-direction: column;
`
const titleWrapper = css`
  display: flex;
`

// const titleButton = (selected: boolean) => {
// return
const titleButton = css`
  background-color: transparent;
  color: white;
  &:not(:last-child) {
    margin-right: 43px;
  }
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`
// }

const inputWrapper = css`
  margin-top: 24px;
  width: 380px;
  height: 139px;
  background-color: transparent;
  input {
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    color: white;
    width: 380px;
    padding: 22px 22px 22px 22px;
    border: none;
    background-color: black;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  input:focus {
    outline: 2px solid #ffffff;
  }
`

const confirmWrapper = css`
  background-color: transparent;
  color: white;
  width: 380px;
  margin-top: 16px;
  input[id='chk'] {
    display: none;
  }
  input[id='chk'] + label {
    display: inline-block;
    width: 17px;
    height: 17px;
    background: #ffffff;
    cursor: pointer;
    p {
      margin-left: 30px;
      width: 333px;
    }
  }
  :after {
    display: block;
    clear: both;
    content: '';
  }
`

export default Login

// border-bottom: ${selected === true ? 'solid 2px red' : ''};
