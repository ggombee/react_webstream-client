/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Background from '../assets/Main/background.png';

interface IAuthProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: IAuthProps) => {
  return <div css={AuthWrapper}>{children}</div>;
};

const AuthWrapper = css`
  height: 100vh;
  position: relative;
  min-height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;
