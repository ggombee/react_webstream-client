/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Search } from './Search';
import StarIcon from '../../../assets/Main/stars.png';
import ProfileImg from '../../../assets/sample/profile.png';
import { useHistory } from 'react-router';

export const Header = () => {
  const history = useHistory();

  const handleClickProfile = () => {
    history.push({
      pathname: '/auth/login',
    });
  };

  return (
    <div>
      <Search />
      <div css={ProfileWrapper} onClick={handleClickProfile}>
        <button>Login</button>
        {/* <img src={StarIcon} />
        <span>Bob</span>
        <img
          src={ProfileImg}
          css={css`
            margin-left: 12px;
            width: 36px;
            height: 36px;
            left: 1824px;
            top: 38px;
          `}
        /> */}
      </div>
    </div>
  );
};

const ProfileWrapper = css`
  position: absolute;
  width: 112px;
  height: 36px;
  left: 1750px;
  top: 38px;
  button {
    border-radius: 80px;
    fint-size: 30px;
    padding: 10px 20px;
    background: #d5162b;
    border: none;
    color: #ffffff;
    box-sizing: border-box;
    cursor: pointer;
  }

  img {
    margin-top: 2px;
    vertical-align: middle;
  }

  span {
    display: inline;
    margin-left: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
  }
`;
