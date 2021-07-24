/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Search } from '../Common/Search';
import { Event } from './Event';
import { HotTrack } from './HotTrack';

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

export const Home = () => {
  return (
    <div css={HomeWrapper}>
      <Event />
      <HotTrack />
      {/* <div css={HomeContent}>홈컨테이너</div> */}
    </div>
  );
};

const HomeWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
`;

const HomeContent = css`
  position: absolute;
  width: 68px;
  height: 36px;
  left: 282px;
  top: 135px;
`;
