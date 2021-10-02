import React from 'react'
import { css } from '@emotion/react'

export interface IBeatMakerCard {
  imgSrc: string
  producer: string
  followerNum: number
  isFollow?: boolean
  isFavorite?: boolean
}

const BeatMakerCard: React.FC<IBeatMakerCard> = (props) => {
  return (
    <div css={container}>
      <div css={cardWrapper}>
        <div css={imgWrapper}>
          <img css={coverImg} src={props.imgSrc} alt="beat" />
        </div>
        <div css={titleWrapper}>
          <span css={producerName}>{props.producer}</span>
          <div css={icon}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49227 0.416016C3.58227 0.416016 0.416016 3.58935 0.416016 7.49935C0.416016 11.4093 3.58227 14.5827 7.49227 14.5827C11.4093 14.5827 14.5827 11.4093 14.5827 7.49935C14.5827 3.58935 11.4093 0.416016 7.49227 0.416016ZM9.78018 11.3173L7.49935 9.9431L5.21852 11.3173C4.94935 11.4802 4.61643 11.2393 4.68727 10.9348L5.28935 8.34227L3.28477 6.60685C3.05102 6.40143 3.17852 6.01185 3.49018 5.98352L6.13935 5.75685L7.17352 3.3131C7.29393 3.02268 7.70477 3.02268 7.82518 3.3131L8.85935 5.74977L11.5085 5.97643C11.8202 6.00477 11.9477 6.39435 11.7069 6.59977L9.70227 8.33518L10.3043 10.9348C10.3752 11.2393 10.0493 11.4802 9.78018 11.3173Z"
                fill="#6D72FB"
              />
            </svg>
          </div>
        </div>
        <div css={infoWrapper}>
          <span css={infoText}>Follower</span>
          <span css={infoText}>3.5k</span>
          <div css={infoFollowIcon}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25065 10.9993C10.2757 10.9993 11.9173 9.35773 11.9173 7.33268C11.9173 5.30764 10.2757 3.66602 8.25065 3.66602C6.22561 3.66602 4.58398 5.30764 4.58398 7.33268C4.58398 9.35773 6.22561 10.9993 8.25065 10.9993Z"
                fill="#606469"
              />
              <path
                d="M8.25033 12.832C5.80283 12.832 0.916992 14.0604 0.916992 16.4987V17.4154C0.916992 17.9195 1.32949 18.332 1.83366 18.332H14.667C15.1712 18.332 15.5837 17.9195 15.5837 17.4154V16.4987C15.5837 14.0604 10.6978 12.832 8.25033 12.832Z"
                fill="#606469"
              />
              <path
                d="M18.3333 9.16602V6.41602H16.5V9.16602H13.75V10.9993H16.5V13.7493H18.3333V10.9993H21.0833V9.16602H18.3333Z"
                fill="#606469"
              />
            </svg>
          </div>
          <div css={infoFavorIcon}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5683 16.7755C9.96666 17.3505 9.04041 17.3505 8.43874 16.7672L8.35166 16.6839C4.19541 12.7255 1.47999 10.1339 1.58291 6.90054C1.63041 5.48388 2.31916 4.12554 3.43541 3.32554C5.52541 1.82555 8.10624 2.52555 9.49957 4.24221C10.8929 2.52555 13.4737 1.81721 15.5637 3.32554C16.68 4.12554 17.3687 5.48388 17.4162 6.90054C17.5271 10.1339 14.8037 12.7255 10.6475 16.7005L10.5683 16.7755Z"
                fill="#606469"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

const container = css`
  width: 220px;
  height: 290px;
  display: inline-block;
  vertical-align: top;
  margin-right: 25px;
`

const cardWrapper = css`
  display: flex;
  flex-direction: column;
`

const imgWrapper = css`
  border-radius: 15px;
  overflow: hidden;
  width: 206px;
  height: 206px;
`

const coverImg = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const titleWrapper = css`
  display: inline-flex;
  margin-top: 18px;
  align-items: center;
`

const producerName = css`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`

const icon = css`
  margin-left: 8px;
`

const infoWrapper = css`
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
`

const infoText = css`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #75767c;
  margin-right: 7px;
`

const infoFollowIcon = css`
  margin-left: auto;
`
const infoFavorIcon = css`
  margin-left: 13px;
`

export default BeatMakerCard
