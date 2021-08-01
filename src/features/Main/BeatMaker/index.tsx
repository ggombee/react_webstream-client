/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';

export const BeatMaker = () => {
  return (
    <MainLayout>
      <div css={BeatMakerWrapper}>비트메이커</div>;
    </MainLayout>
  );
};

const BeatMakerWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
`;
