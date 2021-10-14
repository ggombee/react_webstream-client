import React from 'react'
import { css } from '@emotion/react'
import StarIcon from '~/assets/icons/stars.png'
import DefaultProfile from '~/assets/sample/default_user.png'

const UserButton = () => {
  return (
    <div css={container}>
      <div css={userBadge}>
        <img src={StarIcon} alt={'badge'} />
      </div>
      <div css={userName}>
        <span>Bob</span>
      </div>
      <div css={userPicture}>
        <img src={DefaultProfile} alt={'user'} />
      </div>
    </div>
  )
}

export default UserButton

const container = css`
  float: right;
  margin-right: 60px;
  display: inline-flex;
  align-items: center;
  color: #fff;
`
const userBadge = css``

const userName = css`
  margin-left: 6px;
  font-size: 17px;
`

const userPicture = css`
  margin-left: 22px;
`
