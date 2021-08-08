/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

/*
 * Auth 레이아웃
 * 1. Login
 *   1) Layout
 * 2. Register
 *   1) Layout
 * 3. FindId
 *   1) Layout
 * 2. FindPwd
 *   1) Layout
 */

interface IAuthProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: IAuthProps) => {
  return <div css={AuthWrapper}>{children}</div>;
};

const AuthWrapper = css`
height: 100vh
top: 0;
position: relative;
background: #000000;
min-height:100vh;
min-width:200vh;
`;
