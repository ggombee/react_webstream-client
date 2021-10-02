import React from 'react'
import { css } from '@emotion/react'

export interface IEventCard {
  imgSrc: string
  title: string
  caption: string
}

const EventCard: React.FC<IEventCard> = (props) => {
  return (
    <div css={container}>
      <div css={imgWrapper}>
        <img css={thumnail} src={props.imgSrc} alt={'event'} />
      </div>
      <p css={title}>{props.title}</p>
      <p css={caption}>{props.caption}</p>
    </div>
  )
}

const container = css`
  display: inline-block;
  vertical-align: top;
  margin: 0 30px 0 0;
  width: 400px;
  height: 343px;
`

const imgWrapper = css`
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
`

const thumnail = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const title = css`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  margin: 16px 0 0 0;
`

const caption = css`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #75767c;
  margin: 2px 0 0 0;
`

export default EventCard
