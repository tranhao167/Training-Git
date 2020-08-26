import React from "react";
import Routes from "./Routes";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <Router>
      <Routes/>
      <ToastContainer/>
    </Router>
  );
}

export default App;
