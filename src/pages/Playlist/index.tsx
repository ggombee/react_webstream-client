import React from 'react'
import { css } from '@emotion/react'

const Playlist = () => {
  return (
    <div css={Container}>
      <div>it's Playlist</div>
    </div>
  )
}

const Container = css`
  display: flex;
  flex: 1;
  overflow: auto;
`

export default Playlist
