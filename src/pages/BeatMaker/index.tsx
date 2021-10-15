import React from 'react'
import { css } from '@emotion/react'
import { DUMMY_MAKER_DATA } from 'data/dummy/DUMMY_MAKERS_DATA'
import MakerItem from './MakerItem'

const BeatMaker = () => {
  return (
    <div css={Container}>
      <div css={beatMakerWrapper}>
        <div css={titleWrapper}>
          <p css={title}>Beat Maker</p>
        </div>
        <div css={content}>
          {DUMMY_MAKER_DATA.map((x) => {
            return <MakerItem key={x.id} {...x} />
          })}
        </div>
      </div>
    </div>
  )
}

const Container = css`
  display: flex;
  flex: 1;
  overflow: auto;
`

const beatMakerWrapper = css`
  padding-left: 13px;
  width: 100%;
`

const titleWrapper = css`
  display: flex;
  align-items: center;
  button {
    background-color: transparent;
    font-size: 15px;
    line-height: 36px;
    color: #ffffff;
    border: none;
    margin-left: 40px;
    text-align: center;
  }
`

const title = css`
  font-size: 26px;
  line-height: 36px;
  color: #ffffff;
`

const content = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`

export default BeatMaker
