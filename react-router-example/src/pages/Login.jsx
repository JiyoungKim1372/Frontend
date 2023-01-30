//import {useNavigate} from 'react-router-dom';
import LoginButton from "../components/LoginButton";

export default function Login(props) {
  // const navigate = useNavigate();
  
  // function login() {
  //   setTimeout(() => {
  //     //페이지를 이동 
  //     // props.history.push('/');
  //     navigate('/')
  //   }, 1000);
  // }

  return  (
    <div>
      <h2>Login 페이지 입니다.</h2>
      {/* <button onClick={login}>로그인하기</button> */}
      <LoginButton />
    </div>

  )
  
}