import React from 'react'
import { css } from '@emotion/react'

const BeatMaker = () => {
  return (
    <div css={Container}>
      <div>it's BeatMaker</div>
    </div>
  )
}

const Container = css`
  display: flex;
  flex: 1;
  overflow: auto;
`

export default BeatMaker
