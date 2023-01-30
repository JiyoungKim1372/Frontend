import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Links from './components/Links';
import NavLinks from './components/NavLinks';

const isLogin = true; 


function App(props) {
  return (
   <BrowserRouter>
   <Links />
   <NavLinks />
   <Routes>
    {/* <Route path="/login"  element = {<Login props={props}/>}/> */}
    <Route path="/login" render = {() => (isLogin ? <redirect to="/" />:<Login/>)}    />
    <Route path="/"  element = {<Home/>}/>
    <Route path="/profile/:id" element = {<Profile/>}/>
    <Route path="/profile"  element = {<Profile/>} />
    <Route path="/about"  element = {<About/>} />
    <Route path="/*" element = {<NotFound/>} />
    </Routes> 
   </BrowserRouter>
  );
}

export default App;
