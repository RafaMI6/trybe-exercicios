import React, { Component } from 'react'

class Select extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <select value={value} name='palavraChaveFavorita' onChange={handleChange}>
        <option value='estado'>Estado</option>
        <option value='evento'>Evento</option>
        <option value='props'>Props</option>
        <option value='hooks'>Hooks</option>
      </select>
    )
  }
}

export default Select;
