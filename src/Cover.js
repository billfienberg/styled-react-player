import React from 'react'
import styled from 'styled-components'

const Cover = (props = {}) => {
  const { className, heading, subheading } = props
  return (
    <div className={className}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ margin: '1%' }}>
          <h1 style={{ margin: 0 }}>{heading}</h1>
        </div>
        <div style={{ margin: '1%' }}>
          <h2 style={{ margin: 0 }}>{subheading}</h2>
        </div>
        <div style={{ margin: '1%' }}>
          <input />
        </div>
        <div style={{ margin: '1%' }}>
          <button type="button">Button 1</button>
          <button type="button">Button 2</button>
        </div>
      </div>
      {/*
      */}
    </div>
  )
}

export const StyledCover = styled(Cover).attrs({ className: 'StyledCover' })`
  flex: 1;
  color: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 5% 20%;
`

export default Cover
