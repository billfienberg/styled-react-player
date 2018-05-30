import React from 'react'
import { render } from 'react-dom'
import Player from './Player'

const App = () => {
  // https://github.com/CookPete/react-player#props
  const playerProps = {
    playing: true,
    muted: true,
    controls: false,
    loop: true,
    url: 'https://www.youtube.com/watch?v=Dx-XMAJ1mwU',
  }

  const overlayProps = {
    opacity: 0.5,
    overlayColor: 'black',
  }

  return (
    <div>
      <Player {...playerProps} {...overlayProps} />
    </div>
  )
}
render(<App />, document.getElementById('root'))
