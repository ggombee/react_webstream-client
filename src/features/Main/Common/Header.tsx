/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Search } from './Search';
import StarIcon from '../../../assets/Main/stars.png';
import SearchImg from '../../../assets/Main/search.png';

export const Header = () => {
  return (
    <div css={HeaderWrapper}>
      <div css={SearchWrapper}>
        <select>
          <option value="0">All</option>
          <option value="1">Maker</option>
          <option value="2">Beat</option>
        </select>
        <input type="text" placeholder="Search by title, artist, #" />
        <img src={SearchImg} />
      </div>
      {/* <Search /> */}
      <div css={ProfileWrapper}>
        <img src={StarIcon} />
        Bob
      </div>
    </div>
  );
};

const HeaderWrapper = css`
  width: 140vh;
  height: 400px;
  left: 282px;
  top: 34px;
`;

const SearchWrapper = css`
  position: absolute;
  width: 371px;
  height: 39px;
  left: 245px;
  top: 34px;
  background: #151515;
  border: 1px solid #2c2c2f;
  box-sizing: border-box;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 80px;
  select {
    border: none;
    background: #151515;
    color: white;
    margin-top: 2px;
    margin-left: 20px;
    width: 40px;
  }
  input {
    width: 240px;
    border: none;
    margin-top: 2px;
    background: #151515;
    margin-left: 15px;
    height: 26px;
  }

  img {
    position: absolute;
    left:50%
    top:50%
    transform: translate(-50%, -50%);
    margin-top: 5px;
    margin-left: 15px;
  }
`;

const ProfileWrapper = css`
  width: 371px;
  height: 39px;
  left: 450px;
  top: 34px;
`;
