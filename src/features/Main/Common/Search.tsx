/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';

export const Search = () => {
  return (
    <div css={SearchWrapper}>
      <input type="text" placeholder="검색어를 입력해주세요." />
    </div>
  );
};

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
`;
