import React from 'react'
import { css } from '@emotion/react'

export interface ITrackSmallCard {
  coverSrc: string
  imgAlt?: string
  ranking: number
  song: string
  singer: string
}

const TrackSmallCard: React.FC<ITrackSmallCard> = (props) => {
  return (
    <div css={container}>
      <div css={trackContents}>
        <div css={imgWrapper}>
          <img css={thumnail} src={props.coverSrc} alt="bts" />
        </div>
        <div css={ranking}>
          <span css={rankingNumber}>{props.ranking}</span>
        </div>
        <div css={musicInfo}>
          <span css={song}>{props.song}</span>
          <span css={singer}>{props.singer}</span>
        </div>
        <div css={icon}>
          <svg
            width="4"
            height="15"
            viewBox="0 0 4 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.75" cy="1.75" r="1.75" fill="#5E6266" />
            <circle cx="1.75" cy="7.19531" r="1.75" fill="#5E6266" />
            <circle cx="1.75" cy="12.6387" r="1.75" fill="#5E6266" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TrackSmallCard

const container = css`
  display: flex;
`

const trackContents = css`
  display: inline-flex;
  margin-bottom: 30px;
  width: 100%;
`

const thumnail = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const imgWrapper = css`
  width: 50px;
  height: 50px;
  overflow: hidden;
  // margin: 0 auto;
`
const ranking = css`
  margin: 0 40px;
  display: flex;
  align-items: center;

  font-size: 18px;
  line-height: 25px;
`

const rankingNumber = css``

const musicInfo = css`
  display: flex;
  flex-direction: column;
`

const song = css`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 3px;
`
const singer = css`
  font-size: 15px;
  line-height: 20px;
  color: #75767c;
`
const icon = css`
  width: 4px;
  height: 14px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  cursor: pointer;
`
