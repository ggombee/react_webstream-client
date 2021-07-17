/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';

export const Event = () => {
  return (
    <div css={EventWrapper}>
      <p>Event</p>
      <div css={EventContent}></div>
    </div>
  );
};

const EventWrapper = css`
  position: absolute;
  width: 68px;
  height: 400px;
  left: 282px;
  top: 135px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 36px;
    color: #ffffff;
  }
`;

const EventContent = css`
  position: absolute;
  width: 68px;
  height: 36px;
  left: 282px;
  top: 135px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 36px;
    color: #ffffff;
  }
`;
