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

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: ${props => props.overlayColor};
  opacity: ${props => props.opacity};
`

const ResponsiveStyledPlayer = (props = {}) => (
  <RelativePositionWrapper {...props}>
    <AbsolutelyPositionedPlayer {...props} />
    <Overlay {...props} />
  </RelativePositionWrapper>
)

export default ResponsiveStyledPlayer
