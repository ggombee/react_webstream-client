/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import LogoImg from '../../../assets/Main/logo.png';
import GoHomeImg from '../../../assets/Main/gohome_rec.png';
import LoginCheck from '../../../assets/Main/login_check.png';
import LoginUncheck from '../../../assets/Main/login_uncheck.png';
import SelectedTrack from '../../../assets/Main/track_selected.png';
import FacebookImg from '../../../assets/Main/facebook.png';
import GoogleImg from '../../../assets/Main/google.png';
import NaverImg from '../../../assets/Main/naver.png';
import KakaoImg from '../../../assets/Main/kakao.png';
import LoginImg from '../../../assets/Main/login_hover.png';

import { AuthLayout } from '../../../Layout/auth';
import { useHistory } from 'react-router';
import { number } from 'prop-types';

/*
 * TODO
 * 1. Main
 *   1) Layout (Menu 클릭시 컨테이너 변경)
 *   2) Contatiner
 * 2. Auth
 *   1) Layout (뒤로가기 클릭시 메인으로 이동)
 *   2) Contatiner
 *   3) 연동 로그인
 */

export const Login = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const [isCategory, setIsCategory] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickButton = (no: number) => {
    if (no === 0) {
      history.goBack();
    } else {
      alert('준비중입니다');
    }
  };

  const handleCLickKeepLogin = (active: boolean) => {
    active ? setIsActive(false) : setIsActive(true);
  };

  return (
    <AuthLayout>
      <div css={LoginWrapper}>
        <div css={BackButton} onClick={() => handleClickButton(0)}>
          <button
            css={css`
              border: none;
              color: #ffffff;
              background: transparent;
              margin-top: 30px;
              margin-left: 10px;
            `}
          >
            <img />
            <a>Go Home</a>
          </button>
        </div>
        <div>
          <img
            src={LogoImg}
            css={css`
              position: absolute;
              width: 175.3px;
              height: 40.08px;
              left: 872px;
              top: 174px;
            `}
          />
          <div
            onClick={() => handleClickButton(1)}
            css={css`
              display: block;
              position: absolute;
              width: 51px;
              height: 21px;
              left: 770px;
              top: 309px;
              font-family: Poppins;
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              color: #ffffff;
            `}
          >
            <span
              css={css`
                margin-right: 70px;
                width: 51px;
                display: block;
                cursor: pointer;
              `}
              style={isCategory === 1 ? { color: '#ffffff' } : { color: '#5e6266' }}
            >
              Sign in
            </span>
            {isCategory === 1 && (
              <img
                src={SelectedTrack}
                css={css`
                  display: block;
                  width: 48px;
                  height: 2px;
                  background: #f6112d;
                  margin-top: 5px;
                  cursor: pointer;
                `}
              />
            )}
          </div>
          <div
            onClick={() => handleClickButton(2)}
            css={css`
              display: block;
              position: absolute;
              width: 52px;
              height: 21px;
              left: 861px;
              top: 309px;
              font-family: Poppins;
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;

              color: #ffffff;
            `}
          >
            <span
              css={css`
                margin-right: 70px;
                width: 52px;
                display: block;
                cursor: pointer;
              `}
              style={isCategory === 2 ? { color: '#ffffff' } : { color: '#5e6266' }}
            >
              Sign up
            </span>
            {isCategory === 2 && (
              <img
                src={SelectedTrack}
                css={css`
                  display: block;
                  width: 52px;
                  height: 2px;
                  background: #f6112d;
                  margin-top: 5px;
                  cursor: pointer;
                `}
              />
            )}
          </div>
          <div
            css={css`
              position: absolute;
              width: 380px;
              height: 58px;
              left: 770px;
              top: 361px;
              background: #000000;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
              border-radius: 5px;
            `}
            style={email.length > 0 ? { border: '1px solid #ffffff' } : { color: '#5e6266' }}
          >
            <input
              placeholder="Email"
              css={css`
                :focus {
                  outline: none;
                }
                position: absolute;
                margin-left: 25px;
                margin-top: 12px;
                width: 335px;
                height: 30px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 21px;
                color: #484848;
                background: transparent;
                border: none;
              `}
              value={email}
              style={email.length > 0 ? { color: '#ffffff' } : { color: '#5e6266' }}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div
            css={css`
              position: absolute;
              width: 380px;
              height: 58px;
              left: 770px;
              top: 427px;
              background: #000000;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
              border-radius: 5px;
            `}
            style={password.length > 0 ? { border: '1px solid #ffffff' } : { color: '#5e6266' }}
          >
            <input
              placeholder="Password"
              css={css`
                :focus {
                  outline: none;
                }

                position: absolute;
                margin-left: 25px;
                margin-top: 12px;
                width: 335px;
                height: 30px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 21px;
                color: #484848;
                background: transparent;
                border: none;
              `}
              value={password}
              style={password.length > 0 ? { color: '#ffffff' } : { color: '#5e6266' }}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div
            css={css`
              position: absolute;
              width: 150px;
              height: 22px;
              left: 770px;
              top: 501px;
            `}
            onClick={() => handleCLickKeepLogin(isActive)}
          >
            {isActive ? (
              <img
                src={LoginCheck}
                css={css`
                  vertical-align: middle;
                  margin-right: 10px;
                `}
              />
            ) : (
              <img
                src={LoginUncheck}
                css={css`
                  vertical-align: middle;
                  margin-right: 10px;
                `}
              />
            )}

            <a
              css={css`
                font-size: 13px;
                color: #ffffff;
                width: 90px;
              `}
            >
              Keep me logged in
            </a>
          </div>

          <div css={LoginButton} onClick={() => handleClickButton(3)}>
            <img />
            <a>LOGIN NOW</a>
          </div>
          <div
            css={css`
              position: absolute;
              width: 18px;
              height: 23px;
              left: 951px;
              top: 613px;
              font-family: Poppins;
              font-style: normal;
              font-weight: 600;
              font-size: 15px;
              line-height: 22px;
              color: #ffffff;
            `}
          >
            or
          </div>
          <div>
            <img
              src={FacebookImg}
              css={css`
                position: absolute;
                width: 390px;
                height: 70px;
                left: 770px;
                top: 652px;
              `}
              onClick={() => handleClickButton(4)}
            />
            <img
              src={GoogleImg}
              css={css`
                position: absolute;
                width: 390px;
                height: 70px;
                left: 770px;
                top: 718px;
              `}
              onClick={() => handleClickButton(5)}
            />
            <img
              src={NaverImg}
              css={css`
                position: absolute;
                width: 390px;
                height: 70px;
                left: 770px;
                top: 784px;
              `}
              onClick={() => handleClickButton(6)}
            />
            <img
              src={KakaoImg}
              css={css`
                position: absolute;
                width: 390px;
                height: 70px;
                left: 770px;
                top: 850px;
              `}
              onClick={() => handleClickButton(7)}
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

const LoginWrapper = css`
  position: absolute;
`;

const BackButton = css`
  border: none;
  width: 300px;
  margin: 0;
  border: none;
  color: #ffffff;
  :hover {
    img {
      background: url(${SelectedTrack});
    }
  }
  img {
    position: absolute;
    width: 136px;
    height: 2px;
    left: 0px;
    top: 84px;
    background: url(${GoHomeImg});
  }
  a {
    cursor: pointer;
    position: absolute;
    width: 66px;
    height: 21px;
    left: 70px;
    top: 58px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
  }
`;

const LoginButton = css`
  position: absolute;
  width: 380px;
  height: 58px;
  left: 770px;
  top: 539px;
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  :hover {
    background: #141515;
    color: #ffffff;
    border: 1px solid #f6112d;
    a {
      color: #ffffff;
    }
    img {
      background: url(${LoginImg});
    }
  }

  img {
    margin: 29px 0px 0px 40px;
    width: 160px;
    height: 2px;
    background: url(${GoHomeImg});
  }

  a {
    margin: 17px 0px 0px 40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #484848;
  }
`;
