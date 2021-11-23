import React from 'react'
import {
  ComponentSelector,
  css,
  CSSObject,
  SerializedStyles,
} from '@emotion/react'

import CheckedBox from '~/assets/icons/checked_box.png'
import UnCheckedBox from '~/assets/icons/unchecked_box.png'
import CheckIcon from '~/assets/icons/checked.png'
import UnCheckIcon from '~/assets/icons/unchecked.png'

import { DUMMY_TERMS_DATA, ITerms } from '../../data/dummy/DUMMY_TERMS_DATA'
import { ArrayCSSInterpolation } from '@emotion/serialize'

interface IAuth {
  path: string
}

function AuthForm(params: IAuth): React.ReactElement {
  const [form, setForm] = React.useState({ id: '', password: '' })

  const path = params.path
  console.log('path', path)

  const handleClickLogin = () => {
    console.log('form', form)
  }

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
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <p>Check all I agree</p>
            </label>
            <div
              css={css`
                margin-top: 28px;
                border-bottom: solid 2px #3c3c3c;
                width: 446px;
              `}
            />
            {DUMMY_TERMS_DATA.map((terms: ITerms) => (
              <div key={terms.id} css={() => termsContent(String(terms.id))}>
                <input type="checkbox" id={'chk' + String(terms.id)} />
                <label htmlFor={'chk' + String(terms.id)}>
                  <p>{terms.title}</p>
                </label>
              </div>
            ))}
            <div css={nextWrapper}>
              <div css={nextButton}>Next</div>
            </div>
          </div>
        </>
      )
    case '/auth/register':
      return <></>
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
  p {
    margin-left: 40px;
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
const termsContent = (
  id:
    | string
    | number
    | boolean
    | ComponentSelector
    | SerializedStyles
    | CSSObject
    | ArrayCSSInterpolation
    | null
    | undefined
) => css`
  margin-top: 35px;
  color: #686868;
  font-size: 17px;
  input[id=chk${id}] {
    display: none;
  }
  input[id=chk${id}] + label {
    font-family: 'Gmarket';
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(${UnCheckIcon}) center/22px 22px;
    cursor: pointer;
    p {
      width: 340px;
      border-bottom: solid 1px #686868;
    }
  }
  :after {
    display: block;
    clear: both;
    content: '';
  }
  input[type='checkbox']:checked + label {
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
  padding: 17px 17px 17px 170px;
`
