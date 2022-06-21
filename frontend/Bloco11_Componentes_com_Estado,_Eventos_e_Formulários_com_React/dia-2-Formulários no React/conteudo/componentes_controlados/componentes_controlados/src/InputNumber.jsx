import React, { Component } from 'react'

class InputNumber extends Component {
  render(){
    const { value, handleChange, falhas } = this.props;
    const numero = Number(value) //tô com erro na validação
    return(
    <div>
      {numero >= 18 || numero === 0 ? '' : falhas}
      <input
      type="number"
      name="idade"
      placeholder='Sua Idade'
      value={value}
      onChange={handleChange}
      />
    </div>
    )
  }
}

export default InputNumber;
