import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import About from "./component/About";
import CustomNavbar from "./component/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/noteState";
import Alert from "./component/Alert";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (

    <NoteState>
      <BrowserRouter>
        <CustomNavbar />
        <Alert alert={alert}
        />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>}  />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>}  />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
