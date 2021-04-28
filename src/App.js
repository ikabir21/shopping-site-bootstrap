import React from 'react';
import Footer from './Components/Footer/Footer';
import { MyNavbar, MyNavbar2 } from './Components/Navbar/Navbar';
import "./App.css";
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Working from './Components/Working/Working';

function App() {
  return (
    <Router>
      <MyNavbar />
      <MyNavbar2 />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/Working" component={Working}></Route>
      </Switch>
    </Router>
  );
}

export default App;
