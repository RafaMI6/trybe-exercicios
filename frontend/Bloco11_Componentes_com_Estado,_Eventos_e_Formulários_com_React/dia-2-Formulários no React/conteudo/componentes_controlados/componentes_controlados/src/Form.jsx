import React, { Component } from 'react'
import './Form.css'
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import Check from './Check';
import Select from './Select'

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: 'props',
      formularioComErros: false,
    };
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  erros = () => {
    this.setState({ formularioComErros: true})
  }
  // vaiAparecer = () => { outro jeito de usar o estado do checkbox
  //   if(this.state.comparecer === 'off'){
  //     this.setState((prevState) => ({
  //       comparecer: !prevState.comparecer}));
  //     }
  //     this.setState((prevState) => ({
  //       comparecer: !prevState.comparecer}));
  // }

  render() {
    const { estadoFavorito, idade, palavraChaveFavorita } = this.state;
    return (
        <main>
          <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
          <form className="form">
            <label className="vertical">
              Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <TextArea value={estadoFavorito} handleChange={this.handleChange} falhas={this.erros} />
            </label>
            <fieldset>
              <InputNumber value={idade} handleChange={this.handleChange} falhas={this.erros} />
            </fieldset>
            <label id='check'>
              Vai Comparecer?
              <Check handleChange={this.handleChange} />
            </label>
            <Select value={palavraChaveFavorita} handleChange={this.handleChange} />
          </form>
        </main>
    );
  }
}

export default Form;