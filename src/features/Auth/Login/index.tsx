/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import LogoImg from '../../../assets/Main/logo.png';
import ArrowIcon from '../../../assets/Main/arrow_back.png';
import LoginCheck from '../../../assets/Main/login_check.png';
import LoginUncheck from '../../../assets/Main/login_uncheck.png';

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

  const handleClickMove = (no: number) => {
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
        <div css={BackButton} onClick={() => handleClickMove(0)}>
          <button
            css={css`
              border: none;
              color: #ffffff;
              background: transparent;
              margin-top: 30px;
              margin-left: 10px;
            `}
          >
            <img src={ArrowIcon} />
            <a>메인화면으로 돌아가기</a>
          </button>
        </div>
        <div css={LoginForm}>
          <img
            src={LogoImg}
            css={css`
              margin-left: 50px;
              margin-right: 50px;
              width: 200px;
            `}
          />
          <div
            css={css`
              justify-content: space-between;
            `}
          >
            <input
              placeholder="아이디"
              css={css`
                width: 140px;
              `}
            />
            <a>@</a>
            <select>
              <option value="" disabled selected hidden>
                도메인 선택
              </option>
              <option value="0">naver.com</option>
              <option value="1">nate.com</option>
              <option value="2">daum.com</option>
            </select>
          </div>
          <input
            placeholder="비밀번호"
            css={css`
              width: 310px;
            `}
          />
          <div>
            <button
              css={css`
                background: #9354ed;
                border: none;
                border-radius: 80px;
                margin-top: 10px;
                width: 310px;
                font-size: 13px;
                height: 29px;
                color: #ffffff;
              `}
              onClick={() => handleClickMove(1)}
            >
              로그인
            </button>
          </div>
          <div
            css={css`
              margin-top: 15px;
              text-align: center;
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
              `}
            >
              로그인 유지하기
            </a>
          </div>
          <div>
            <button
              css={css`
                background: #2478ff;
                border: none;
                border-radius: 80px;
                margin-top: 20px;
                width: 310px;
                font-size: 13px;
                height: 29px;
                color: #ffffff;
              `}
              onClick={() => handleClickMove(2)}
            >
              Facebook 로그인
            </button>
          </div>
          <div>
            <button
              css={css`
                background: #ededed;
                border: none;
                border-radius: 80px;
                margin-top: 10px;
                width: 310px;
                font-size: 13px;
                height: 29px;
                color: #000000;
              `}
              onClick={() => handleClickMove(3)}
            >
              Google 로그인
            </button>
          </div>
          <div>
            <button
              css={css`
                background: #ffffff;
                border: none;
                border-radius: 80px;
                margin-top: 10px;
                width: 310px;
                font-size: 13px;
                height: 29px;
                color: #000000;
              `}
              onClick={() => handleClickMove(4)}
            >
              Apple 로그인
            </button>
          </div>
          <div>
            <button
              css={css`
                background: #0bc904;
                border: none;
                border-radius: 80px;
                margin-top: 10px;
                width: 310px;
                font-size: 13px;
                height: 29px;
                color: #ffffff;
              `}
              onClick={() => handleClickMove(5)}
            >
              Naver 로그인
            </button>
          </div>
          <div>
            <button
              css={css`
                background: #fff612;
                border: none;
                border-radius: 80px;
                margin-top: 10px;
                width: 310px;
                font-size: 13px;
                height: 29px;
                color: #000000;
              `}
              onClick={() => handleClickMove(6)}
            >
              Kakao 로그인
            </button>
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
  img {
    vertical-align: middle;
  }
  a {
    margin-left: 5px;
  }
`;

const LoginForm = css`
  color: #5e6266;
  display: block;
  margin-top: 150px;
  margin-left: 750px;
  input {
    margin-top: 10px;
    border: none;
    background: #151515;
    height: 26px;
    border-radius: 80px;
    color: #5e6266;
    font-size: 13px;
  }

  a {
    margin-top: 100px;
    margin-left: 3px;
  }
  select {
    margin-left: 5px;
    width: 145px;
    border: none;
    font-size: 13px;
    margin-top: 100px;
    background: #151515;
    height: 26px;
    border-radius: 80px;
    color: #5e6266;
  }
`;
