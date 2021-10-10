import React from 'react'
import { css } from '@emotion/react'

const Favorites = () => {
  return (
    <div css={Container}>
      <div>it's Favorites</div>
    </div>
  )
}

const Container = css`
  display: flex;
  flex: 1;
  overflow: auto;
`

export default Favorites
