import React from "react";

function umTextoQualquer() {
  console.log('um texto qualquer');
}

class UmTextoQualquer extends React.Component {
  render() {
    return <button onClick={umTextoQualquer}>Um Texto Qualquer</button>
  }
}

export default UmTextoQualquer;