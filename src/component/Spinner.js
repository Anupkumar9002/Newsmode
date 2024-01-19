import React, { Component } from 'react'
import loading from './giphy.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center items-center'>
        <img  src={loading} alt='loading'/>
      </div>
    )
  }
}
