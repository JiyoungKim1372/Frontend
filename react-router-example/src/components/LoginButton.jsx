import {useNavigate } from 'react-router-dom';

export default function LoginButton(props) {
  const navigate = useNavigate();
 
  console.log(props);

  function login() {
    setTimeout(() => {
      //PaymentResponse.history.push('/');
      navigate('/')
    },1000);
  }

  return <button onClick={login}>로그인하기</button>
};