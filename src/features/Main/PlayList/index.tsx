/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';

export const PlayList = () => {
  return (
    <MainLayout>
      <div css={PlayListWrapper}>비트메이커</div>;
    </MainLayout>
  );
};

const PlayListWrapper = css`
  margin-left: 185px;

  height: 100vh;
  top: 0;
`;
