import React from 'react'
import styled from 'styled-components'

const Cover = (props = {}) => {
  return (
    <div className={props.className}>
      <h1>{props.text}</h1>
    </div>
  )
}

export const StyledCover = styled(Cover)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

export default Cover
