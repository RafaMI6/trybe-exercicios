import React from "react";
import './caracteristicasDoBotão.css'

class UmTextoQualquer extends React.Component {
  constructor(){
    super()
    this.state = {
      numeroDeClicks: 0
    }
    this.umTextoQualquer = this.umTextoQualquer.bind(this)
  }
  

  umTextoQualquer() {
    this.setState((numeroAntigo, _props) => ({
      numeroDeClicks: numeroAntigo.numeroDeClicks + 1
    }))
  }
  comportamento(number){
    if(number % 2 === 0) {
      console.log('verde');
      return 'par'
    }
    console.log('branco')
    return 'normal'
  }
  render() {
    return <button onClick={this.umTextoQualquer}
    className={this.comportamento(this.state.numeroDeClicks)}>{this.state.numeroDeClicks}</button>
  }
}

export default UmTextoQualquer;