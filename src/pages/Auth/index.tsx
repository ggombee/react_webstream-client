import React from 'react'
import { css } from '@emotion/react'

import Background from '~/assets/background/background.png'
import Logo from '~/assets/logo.png'
import CheckedBox from '~/assets/icons/checked.png'
import UnCheckedBox from '~/assets/icons/unchecked.png'
import { useHistory, useLocation } from 'react-router-dom'
import AuthForm from '../../components/AuthForm'

const Auth = () => {
  // const [isSelected, setIsSelected] = React.useState(1)
  const [form, setForm] = React.useState({ id: '', password: '' })
  const history = useHistory()
  const location = useLocation()

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
              onClick={() => history.push('/auth/login')}
              css={titleButton}
              style={{
                borderBottom:
                  location.pathname === '/auth/login' ? 'solid 2px red' : '',
              }}
            >
              Sign in
            </button>
            <button
              onClick={() => history.push('/auth/terms')}
              css={titleButton}
              style={{
                borderBottom:
                  location.pathname === '/auth/terms' ? 'solid 2px red' : '',
              }}
            >
              Sign up
            </button>
          </div>
          <AuthForm path={location.pathname} />
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
  width: 150px;
  height: 21px;
  border-bottom: solid 2px #474747;
  :hover {
    border-bottom: solid 2px red;
  }
`
const word = css`
  color: white;
  margin-left: 60px;
  width: 80px;
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
  padding-right: 30px;
`

const content = css`
  align-items: center;
  margin-top: 74.92px;
  width: 380px;
  height: 580px;
  display: flex;
  flex-direction: column;
`
const titleWrapper = css`
  margin-left: 65px;
  align-items: center;
`

// const titleButton = (selected: boolean) => {
// return
const titleButton = css`
  margin-right: 80px;
  background-color: transparent;
  color: white;
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
    font-family: 'Gmarket';
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(${UnCheckedBox}) center/22px 22px;
    cursor: pointer;
    p {
      margin-top: 3px;
      margin-left: 40px;
      width: 333px;
    }
  }
  :after {
    display: block;
    clear: both;
    content: '';
  }
  input[type='checkbox']:checked + label {
    background: url(${CheckedBox}) center/22px 22px;
  }
`

const loginButton = css`
  width: 380px;
  height: 58px;
  background-color: black;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  :hover {
    border: solid 2px red;
    span {
      background-color: #ffffff;
    }
    p {
      color: white;
    }
  }
`

const loginButtonBar = css`
  margin-left: 40px;
  width: 160px;
  height: 2px;
  background-color: #484848;
`

const loginButtonContents = css`
  font-family: 'Gmarket';
  margin-left: auto;
  margin-right: 40px;
  color: #484848;
`

export default Auth

// border-bottom: ${selected === true ? 'solid 2px red' : ''};
