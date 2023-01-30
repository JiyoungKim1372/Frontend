import {NavLink}  from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const activeStyle= {color: "green"};


export default function NavLinks() {
  
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  const isMark = (name==="mark"? true:false)


  return (

    <ul>
      <li>
        <NavLink to="/"  style={({ isActive }) => (isActive ? activeStyle : undefined) } end>
        Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile"  style={({ isActive }) => (isActive ? activeStyle : undefined) } end>Profile</NavLink>
      </li>   
      <li>
        <NavLink to="/profile/1"  style={({ isActive }) => (isActive ? activeStyle : undefined) } end>Profile/1</NavLink>
      </li>
      <li>
        <NavLink to="/about"  style={( {isActive} ) =>  (isActive && isMark==false ? activeStyle : undefined) } end>About </NavLink>
      </li>
      <li>
        <NavLink to="/about?name=mark"  style={({isActive}) => (isActive && isMark==true ? activeStyle : undefined)} end>About?name=mark</NavLink>
      </li>
    </ul>

  );


}