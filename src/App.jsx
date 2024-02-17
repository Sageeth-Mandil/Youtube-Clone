import React from "react";
import './index.css';
import NavBar from "./Compornent/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video"

const App =() =>{
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}
export default App;