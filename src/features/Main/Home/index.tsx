/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';
import { Search } from '../Common/Search';
import { BeatMaker } from './BeatMaker';
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
    <MainLayout>
      <div css={HomeWrapper}>
        <Event />
        <HotTrack />
        <BeatMaker />
      </div>
    </MainLayout>
  );
};

const HomeWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
`;
