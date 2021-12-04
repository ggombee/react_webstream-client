import React from 'react'
import produce from 'immer'
import {
  ComponentSelector,
  css,
  CSSObject,
  SerializedStyles,
} from '@emotion/react'
import { useHistory } from 'react-router-dom'
import api from 'hooks/api'

import CheckedBox from '~/assets/icons/checked_box.png'
import UnCheckedBox from '~/assets/icons/unchecked_box.png'
import CheckIcon from '~/assets/icons/checked.png'
import UnCheckIcon from '~/assets/icons/unchecked.png'

import { DUMMY_TERMS_DATA } from '../../store/Auth/__mocks__/DUMMY_TERMS_DATA'
import { ArrayCSSInterpolation } from '@emotion/serialize'
import { ITerms } from 'store/Auth/types'

interface IAuth {
  path: string
}

interface Props {
  index: number
  isCheck: boolean
}

function AuthForm(params: IAuth): React.ReactElement {
  const [form, setForm] = React.useState({ id: '', password: '' })
  const [allChecked, setAllChecked] = React.useState(false)
  const [termsForm, setTermsForm] = React.useState([
    {
      id: 0,
      label: '',
      value: '',
      isCheck: false,
    },
  ])
  const history = useHistory()
  const [email, setEmail] = React.useState('')
  const [pwd, setPwd] = React.useState('')
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    password: '',
  })

  function handleChange(value: string, type: string) {
    if (type === 'email') {
      setEmail(value)
    } else {
      if (value.length < 16) {
        setPwd(value)
      } else {
        alert('비밀번호를 16자이하로 작성하세요.')
      }
    }
  }

  const path = params.path
  console.log('termsForm', termsForm)

  React.useEffect(() => {
    setUserInfo({
      email: email,
      password: pwd,
    })
  }, [email, pwd])

  const handleClickLogin = () => {
    console.log('form', form)
  }

  const handleTermsForm = (index: number, isCheck: boolean) => {
    // const newTerms = [...terms]
    // const res = [...termsForm]
    // res[index].isCheck = isCheck ? false : true
    // return res
    // res.map()
  }

  const isEmail = (email: string) => {
    /* eslint-disable-next-line */
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    return emailRegex.test(email)
  }

  const handleRegister = () => {
    if (userInfo.email === '' || userInfo.password === '') {
      if (userInfo.email === '') {
        alert('이메일을 입력해주세요')
      } else {
        alert('비밀번호를 입력해주세요')
      }
    } else {
      if (!isEmail(userInfo.email)) {
        alert('email 형식으로 입력해주세요')
      } else {
        api
          .post('/register', userInfo)
          .then((response) => {
            // if (response.accessToken) {
            //   localStorage.setItem('token', response.accessToken);
            //   setIsShow(false);
            // }
          })
          .catch((error) => {
            console.log('Error during service worker registration:', error)
          })
          .finally(
            () => alert('가입이 완료되었습니다.')

            // history.push({
            //   pathname: '/board',
            // }),
          )
      }
    }
  }

  const handleLogin = () => {
    if (userInfo.email === '' || userInfo.password === '') {
      if (userInfo.email === '') {
        alert('이메일을 입력해주세요')
      } else {
        alert('비밀번호를 입력해주세요')
      }
    } else {
      if (!isEmail(userInfo.email)) {
        alert('email 형식으로 입력해주세요')
      } else {
        api
          .post('/login', userInfo)
          .then((response) => {
            // if (response.accessToken) {
            //   localStorage.setItem('token', response.accessToken);
            //   setIsShow(false);
            // }
          })
          .catch((error) => {
            console.log('Error during service worker registration:', error)
          })
          .finally(
            () => alert('로그인이 완료되었습니다.')

            // history.push({
            //   pathname: '/board',
            // }),
          )
      }
    }
  }

  React.useEffect(() => {
    setTermsForm(DUMMY_TERMS_DATA)
  }, [])

  React.useEffect(() => {
    setUserInfo({
      email: email,
      password: pwd,
    })
  }, [email, pwd])

  switch (path) {
    case '/auth/login':
      return (
        <>
          <div css={inputWrapper}>
            <input
              placeholder="Email"
              value={form.id}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, id: e.target.value }))
              }}
            />
            <input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }}
            />
          </div>
          <div css={confirmWrapper}>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk">
              <p>Keep me logged in</p>
            </label>
            <div css={loginButton} onClick={handleClickLogin}>
              <span css={loginButtonBar} />
              <p css={loginButtonContents}>LOGIN NOW</p>
            </div>
          </div>
        </>
      )
    case '/auth/terms':
      return (
        <>
          <div css={termsTitle}>
            <p>
              You need to agree to the terms and conditions to use the service.
            </p>
          </div>
          <div css={termsWrapper}>
            <div
              css={css`
                display: flex;
              `}
              onClick={() =>
                allChecked ? setAllChecked(false) : setAllChecked(true)
              }
            >
              <img
                alt="체크아이콘"
                src={allChecked ? CheckedBox : UnCheckedBox}
              />
              <p style={{ color: allChecked ? 'white' : 'grey' }}>
                Check all I agree
              </p>
              {/* <input type="checkbox" id="check" />
            <label htmlFor="check">
              <p>Check all I agree</p>
            </label> */}
            </div>
            <div
              css={css`
                margin-top: 28px;
                border-bottom: solid 2px #3c3c3c;
                width: 446px;
              `}
            />
            <div css={termsContent}>
              {termsForm?.map((terms: ITerms, index) => (
                <div
                  key={terms.id}
                  css={() => termsItem('chk' + String(terms.id))}
                >
                  <input
                    type="checkbox"
                    id={`chk` + String(terms.id)}
                    checked={terms.isCheck}
                    // onClick={() => {
                    //   handleTermsForm(index, terms)
                    // }}
                  />
                  <label htmlFor={`chk` + String(terms.id)}>
                    <p>{terms.label}</p>
                  </label>
                </div>
              ))}
            </div>
            <div
              css={nextWrapper}
              onClick={() => history.push('/auth/register')}
            >
              <div css={nextButton}>Next</div>
            </div>
          </div>
          <div css={moveButton} onClick={() => history.push('/auth/login')}>
            Go to Sign in
          </div>
        </>
      )
    case '/auth/register':
      return (
        <>
          <div css={registerWrapper}>
          <div css={regiCommonInput} >
              <p>Please enter your email address</p>
              <input
                placeholder="Email"
                onChange={(e) => handleChange(e.target.value, 'email')}
              />
            </div>
            <div css={regiCommonInput} >
              <p>Please enter your password you want to use</p>
              <input
                placeholder="Email"
                onChange={(e) => handleChange(e.target.value, 'email')}
              />
            </div>
        
            <div css={confirmWrapper}>
              <div css={loginButton} onClick={() => handleRegister()}>
                <span css={loginButtonBar} />
                <p css={loginButtonContents}>Register</p>
              </div>
            </div>
          </div>
        </>
      )
  }
  return <></>
}

export default AuthForm

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
  input[id='chk']:checked + label {
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
const termsTitle = css`
  margin-top: 24px;
  margin-bottom: 34px;
  p {
    width: 392px;
    font-size: 20px;
    text-align: center;
    line-height: 33px;
    color: #8b8b8b;
    font-family: 'Gmarket';
  }
`

const termsWrapper = css`
  width: 494px;
  height: auto;
  padding: 30px;
  background-color: black;
  color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 18px;
  img {
    width: 22px;
    height: 22px;
  }
  p {
    font-family: 'Gmarket';
    margin-left: 12px;
    width: 333px;
    line-height: 25px;
  }
  input[id='check'] {
    display: none;
  }
  input[id='check'] + label {
    font-family: 'Gmarket';
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(${UnCheckedBox}) center/22px 22px;
    cursor: pointer;
  }
  :after {
    display: block;
    clear: both;
    content: '';
  }
  input[id='check']:checked + label {
    background: url(${CheckedBox}) center/22px 22px;
  }
`

const termsContent = css``

const termsItem = (id: string) => css`
  margin-top: 35px;
  color: #686868;
  font-size: 17px;
  input[id=${id}] {
    display: none;
  }
  input[id=${id}] + label {
    font-family: 'Gmarket';
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(${UnCheckIcon}) center/22px 22px;
    cursor: pointer;
    p {
      margin-left: 40px;
      width: 340px;
      border-bottom: solid 1px #686868;
    }
  }
  :after {
    display: block;
    clear: both;
    content: '';
  }
  input[id=${id}]:checked + label {
    p {
      border-bottom: solid 1px #ffffff;
    }
    color: white;
    background: url(${CheckIcon}) center/22px 22px;
  }
`

const nextWrapper = css`
  display: flex;
  margin-top: 40px;
  justify-content: center;
`

const nextButton = css`
  color: #484848;
  font-family: 'Gmarket';
  background: #212326;
  border: 1px solid #212326;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 380px;
  height: 58px;
  padding: 19px 17px 17px 170px;
  :hover {
    color: white;
    background: #000000;
    border: 1px solid #f6112d;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`

const moveButton = css`
  margin-top: 58px;
  color: white;
  font-family: 'Gmarket';
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  background: transparent;
  width: 100px;
  height: 21px;
`

const registerWrapper = css`
margin-top: 46px;
`

const regiCommonInput = css`
  color: white;
  font-family: 'Gmarket';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  &:not(:last-child) {
   margin-bottom: 30px;
  }
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
    margin-top: 8px;
  }
`
