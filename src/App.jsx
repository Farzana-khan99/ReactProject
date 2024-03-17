import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header"
import Footer from "./component/Footer"
import About from "./view/About"
import Services from "./view/Services"
import Home from "./view/Home"
import "./App.css";
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Services/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
