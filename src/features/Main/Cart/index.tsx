/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';
import ComingImg from '../../../assets/Main/comingsoon.jpg';

export const Cart = () => {
  return (
    <MainLayout>
      <div css={CartWrapper}>
        <img src={ComingImg} />
      </div>
    </MainLayout>
  );
};

const CartWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
  img {
    margin-left: 600px;
    margin-top: 275px;
  }
`;
