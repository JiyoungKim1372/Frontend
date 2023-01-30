import './App.css';
import React, { useRef, useState } from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';

// const Person = React.memo((({name, age}) => {
// //   componentDidMount() {
// //     console.log('FOO componenetDidMount', this.props.children)
// //   }
  
// //  componentWillUnmount() {
// //     console.log('FOO componentWillUnmount', this.props.children)
// //   }

// //   static getDerivedStateFromProps(nextProps, prevProps) {
// //     console.log("Foo getDerivedStateFromProps", nextProps, prevProps)
// //     return {};
// //   }
//   // shouldComponentUpdate(previousProps) {
//   //   for(const key in this.props) {
//   //     if (previousProps[key] !== this.props[key]) {
//   //       return true; 
//   //     }
//   //   }
//   //   return false;
//   // }
//   console.log("Person render");
//   return  (<div>{name} / {age} </div>);
// }
// ));

// function App () {
//   const [state, setState] = React.useState({ 
//     text: "",
//     persons: [
//       {id: 1, name: "Mark", age: 39},
//       {id: 2, name: "Hanna", age: 28},
//     ]
//   });

//   const toPersonClick = React.useCallback(() => {},[]);
//   const {text, persons} = state;

//   return (<div>
//     <input type="text" value={text} onChange ={change} />
//     <ul>{persons.map(person => {
//       return <Person {...person} key={person.id} onClick={toPersonClick} />
//     })}</ul>
//     </div>);
  
//   function change(e) {
//     setState({
//       ...state, 
//       text: e.target.value, 
//     }); 
//   } 

// }

// function App() {
//   const [visible, setVisible] = useState(false);
  
//   const open = () => {
//     setVisible(true);
//   }

//   const close = () => {
//     setVisible(false);
//   }

//   return <div>
//     <button onClick={open}>open</button>
//     {visible && (
//       <Modal>
//         <div style={
//           {width: '100vw',
//             heigtht: '100vh',
//             background: 'rgba(0,0,0,0.5)' ,
//           }
//         } onClick={close}>Hello</div></Modal>)}
//         </div>

// }

function App() {
  const muInputRef = useRef(); 
  const click = () => {
    console.log(muInputRef.current.value);
  }

  return <div> 
    <MyInput ref={muInputRef} />
    <button onClick={click}>send</button>
  </div>
}

export default App;
