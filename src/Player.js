import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Player = (props = {}) => {
  const { className } = props
  return (
    <ReactPlayer className={className} width="100%" height="100%" {...props} />
  )
}

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`

const Overlay = styled.div.attrs({ className: 'Overlay' })`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  background: ${props => props.overlayColor};
  opacity: ${props => props.opacity};
`

const ResponsiveStyledPlayer = (props = {}) => {
  return (
    <RelativePositionWrapper {...props}>
      <AbsolutelyPositionedPlayer {...props} />
      <Overlay {...props} />
    </RelativePositionWrapper>
  )
}

export default ResponsiveStyledPlayer
