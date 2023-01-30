import React from 'react';

class UncontrolledComponent extends React.Component {
  render() {
    return (<div>
      <input id="my-input"/>
      <button onClick={this.click}>전송</button>
    </div>);
  }

  click =() => {
    //input 엘리먼트의 현재 상태값(value)을 전송한다. 
    const input = document.querySelector('#my-input');
    console.log(input);
  }

}

export default UncontrolledComponent;