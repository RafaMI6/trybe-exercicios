import React from 'react';
import './caracteristicasDoBotão.css'

class Oi extends React.Component {
  constructor(){
    super()
    this.state = {
      numeroDeClick: 0
    }
    this.oi = this.oi.bind(this)
  }

  oi(){
    this.setState((numeroAntigo, _props) => ({
      numeroDeClick: numeroAntigo.numeroDeClick + 1
    }))
  }

  cor(numeroAtual){
    if (numeroAtual % 2 === 0) {
      console.log('verde')
      return 'par'
    }
    console.log('branco')
    return'normal'
  }

  render(){
    return <button onClick={ this.oi }
    className={ this.cor(this.state.numeroDeClick) }
    >{ this.state.numeroDeClick }</button>
  }
}

export default Oi;
