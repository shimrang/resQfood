import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Ngo from "./pages/Ngo";
import Addngo from "./pages/Addngo";
import Addrest from "./pages/Addrest";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup'  element={<Signup/>}></Route>
        <Route exact path='/addngo'  element={<Addngo/>}></Route>
        <Route exact path='/addres'  element={<Addrest/>}></Route>
        <Route exact path='/rest'  element={<Restaurant/>}></Route>
        <Route exact path='/ngo'  element={<Ngo/>}></Route>
        <Route exact path='/'  element={<Home/>}></Route>


      </Routes>

    </BrowserRouter>

  );
}

export default App;
