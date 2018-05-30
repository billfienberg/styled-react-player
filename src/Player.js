import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Player = (props = {}) => (
  <ReactPlayer
    className={props.className}
    width="100%"
    height="100%"
    {...props}
  />
)

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const ResponsiveStyledPlayer = (props = {}) => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer {...props} />
  </RelativePositionWrapper>
)

export default ResponsiveStyledPlayer
