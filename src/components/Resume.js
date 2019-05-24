import React, { Component } from 'react'

class Resume extends Component {
  componentDidMount() {

  }

  render() {
    const { children } = this.props

    return <article id={'resume'} className={'grid'}>
      {children}
    </article>
  }
}

export default Resume