import React, { Component } from 'react'
import { render } from 'react-dom'
import ResponsiveStyledPlayer from './Player'
import { StyledCover } from './Cover'
import Block2 from './Block2'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sectionHeight: 60,
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { target = {} } = e
    const { value } = target
    this.setState({ sectionHeight: value })
  }
  render() {
    const { props = {}, state = {} } = this
    const { text } = props
    const { sectionHeight = 50 } = state
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

    const coverContentProps = {
      heading: 'Heading',
      subheading: 'Subheading',
    }

    return (
      <div className="App" style={{ position: 'relative' }}>
        <div>
          <input
            placeholder="section height"
            type="number"
            defaultValue={sectionHeight}
            onChange={this.onChange}
          />
        </div>
        <div className="Block1" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              display: 'flex',
            }}
          >
            <StyledCover {...coverContentProps} />
          </div>
          <div
            className="SectionHeightContainer"
            style={{ maxHeight: `${sectionHeight}vh`, overflow: 'hidden' }}
          >
            <ResponsiveStyledPlayer {...playerProps} {...overlayProps} />
          </div>
        </div>
        <Block2 />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
