import React from 'react';
import Footer from './Components/Footer/Footer';
import { MyNavbar, MyNavbar2 } from './Components/Navbar/Navbar';
import "./App.css";
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <MyNavbar />
      <MyNavbar2 />
      <Home />
      <Footer />
    </>
  );
}

export default App;
