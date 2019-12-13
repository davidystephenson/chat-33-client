/* global EventSource */

import React, { Component } from 'react'

class App extends Component {
  stream = new EventSource('http://localhost:4000/stream')

  componentDidMount () {
    this.stream.onmessage = event => {
      console.log('event.data test:', event.data)

      const parsed = JSON.parse(event.data)

      console.log('parsed test:', parsed)
    }
  }

  render () {
    return <div>client</div>
  }
}

export default App
