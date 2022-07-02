import "./App.css";
import Navbar from './Components/navbar.jsx';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home"
import Booking from "./Pages/booking.jsx";
import Login from "./Pages/login.jsx"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Booking" element={<Booking />}></Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
