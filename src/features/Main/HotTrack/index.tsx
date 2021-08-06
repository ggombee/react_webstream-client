/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';

export const HotTrack = () => {
  return (
    <MainLayout>
      <div css={HotTrackWrapper}>핫트랙</div>
    </MainLayout>
  );
};

const HotTrackWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
`;
