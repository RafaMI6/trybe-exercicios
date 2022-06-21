import React, { Component } from 'react'

class Check extends Component {
  render(){
    const { handleChange } = this.props
    return(
      <input
        type="checkbox"
        name="vaiComparecer"
        onClick={handleChange}
      />
    )
  }
}

export default Check;
