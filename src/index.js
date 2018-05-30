import React from 'react'
import { render } from 'react-dom'
import ResponsiveStyledPlayer from './Player'
import { StyledCover } from './Cover'

const App = text => {
  // https://github.com/CookPete/react-player#props
  const playerProps = {
    playing: true,
    muted: true,
    controls: false,
    loop: true,
    url: 'https://www.youtube.com/watch?v=Dx-XMAJ1mwU',
  }

  const overlayProps = {
    opacity: 0.8,
    overlayColor: 'black',
  }

  return (
    <ResponsiveStyledPlayer {...playerProps} {...overlayProps}>
      <StyledCover text="Words" />
    </ResponsiveStyledPlayer>
  )
}
render(<App />, document.getElementById('root'))
