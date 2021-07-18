/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Search } from './Search';
import StarIcon from '../../../assets/Main/stars.png';
import ProfileImg from '../../../assets/sample/profile.png';

export const Header = () => {
  return (
    <div>
      <Search />
      <div css={ProfileWrapper}>
        <img src={StarIcon} />
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
        />
      </div>
    </div>
  );
};

const ProfileWrapper = css`
  position: absolute;
  width: 112px;
  height: 36px;
  left: 1300px;
  top: 38px;

  img {
    margin-top: 2px;
  }

  span {
    margin-left: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
  }
`;
