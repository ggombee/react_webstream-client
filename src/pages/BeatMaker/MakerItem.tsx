import React from 'react'
import { css } from '@emotion/react'

import { Maker } from 'data/dummy/DUMMY_MAKERS_DATA'
import TrackSmallCard from '~/components/TrackSmallCard'
import makerImg from 'assets/sample/maker.png'
import followOnIco from 'assets/icons/follow_on.png'
import followOffIco from 'assets/icons/follow_off.png'

const MakerItem: React.FC<Maker> = (props: Maker) => {
  console.log({ props })
  return (
    <div css={container}>
      <div css={makerInfo}>
        <div css={image}>
          <img src={makerImg} />
        </div>

        <div css={information}>
          <p
            css={css`
              font-size: 22px;
            `}
          >
            {props.makerName}
          </p>
          <div
            css={css`
              margin-top: 15px;
              color: #7e868d;
              font-size: 16px;
            `}
          >
            <span>Beats</span>
            <span
              css={css`
                margin-left: 10px;
                color: #ffffff;
              `}
            >
              {props.totalBeats}
            </span>
            <span
              css={css`
                margin-left: 31px;
              `}
            >
              Follower
            </span>
            <span
              css={css`
                margin-left: 10px;
                color: #ffffff;
              `}
            >
              {props.totalFollower}
            </span>
          </div>
          <div css={moodInfo}>
            {props.moodInfo.map((x) => {
              return (
                <div key={x.id} css={moodButton}>
                  {x.moodname}
                </div>
              )
            })}
          </div>
        </div>

        <div css={follow}>
          <img src={followOffIco} />
        </div>
      </div>
    </div>
  )
}

export default MakerItem

const container = css`
  width: 505px;
  height: 400px;
  display: flex;
  background: #151516;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding-left: 25px;
  padding-top: 25px;
  :hover {
    background: #1d1d1f;
  }
  &:not(:last-child) {
    margin-right: 43px;
    margin-bottom: 47px;
  }
`

const makerInfo = css`
  width: 455px;
  height: 350px;
  display: flex;
  &:not(:last-child) {
    margin-right: 40px;
  }
  margin-bottom: 40px;
`

const image = css`
  width: 115px;
  height: 115px;
`

const information = css`
  padding-top: 15px;
  margin-left: 27px;
  color: white;
  display: flex;
  flex-direction: column;
`
const moodInfo = css`
  margin-top: 16px;
  display: flex;
  align-items: center;
`
const moodButton = css`
  border: 1px solid #3e3f42;
  box-sizing: border-box;
  border-radius: 50px;
  height: 25px;
  line-height: 22px;
  font-size: 14px;
  padding: 0 11px;
  color: #3e3f42;
  &:not(:last-child) {
    margin-right: 11px;
  }
`

const follow = css`
  margin-left: auto;
`

const beatInfo = css``
