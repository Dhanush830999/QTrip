import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navgation from "./NavBar";
import Homepage from "./Home";
import CityDetails from "./Banglore";
import Loginpage from "./Login";
import Registerpage from "./Register";
import AdventureDetail from "./Insidecities";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Navgation fixed="top" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} /> 
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Register" element={<Registerpage />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
       <Route path="/city/:cityName/adventure/:adventureId" element={<AdventureDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
