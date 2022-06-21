import React, { Component } from 'react'

class TextArea extends Component { 
  render() {
      const { value, handleChange, falhas } = this.props;
    return(<div>
      {value.length < 10 ? falhas : null}
      <textarea name="estadoFavorito" rows='5' value={value} onChange={handleChange} />
    </div>
    ) 
  }
}

export default TextArea;
