/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';

export const Favorites = () => {
  return (
    <MainLayout>
      <div css={FavoritesWrapper}>비트메이커</div>;
    </MainLayout>
  );
};

const FavoritesWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
`;
