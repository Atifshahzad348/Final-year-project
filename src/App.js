import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import "./App.css";
import Kitchen from "./Pages/Kitchen";
import PaintServices from "./Pages/PaintServices";
import ElectricalServices from "./Pages/ElectricalServices";
import Plumbing from "./Pages/Plumbing";
import AcInstallation from "./Pages/AcInstallation";
import SofaCleaning from "./Pages/SofaCleaning";
import Curton from "./Pages/Curton";
import DeepCleaning from "./Pages/DeepCleaning";
import CarpetCleaning from "./Pages/CarpetCleaning";
import WaterTank from "./Pages/WaterTank";
import WaterDespensor from "./Pages/WaterDespensor";
import Refrigirator from "./Pages/Refrigirator";
import PestControl from "./Pages/PestControl";
import WashingMachine from "./Pages/WashingMachine";
import MicroWave from "./Pages/MircoWave";
import Electrition from "./Pages/Electrition";







function App() {
  return (
    <>
    
      <Router>
      
        <Routes>
            {/* ##################### navigation bar routing ##################### */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/* ##################### top Services routing ##################### */}
          <Route path="/kitchen" element={<Kitchen/>}/>
          <Route path="/paint" element={<PaintServices/>}/>
          <Route path="/electrical" element={<ElectricalServices/>}/>
          <Route path="/plumbing" element={<Plumbing/>}/>
            {/* ##################### Recomended SErvices routing ##################### */}
          <Route path="/acinstallation" element={<AcInstallation/>}/>
          <Route path="/sofacleaning" element={<SofaCleaning/>}/>
          <Route path="/deepcleaning" element={<DeepCleaning/>}/>
          <Route path="/curton" element={<Curton/>}/>
          <Route path="/carpetcleaning" element={<CarpetCleaning/>}/>
          <Route path="/washingmachine" element={<WashingMachine/>}/>
          <Route path="/microwave" element={<MicroWave/>}/>
          <Route path="/refrigirator" element={<Refrigirator/>}/>
          <Route path="/watertank" element={<WaterTank/>}/>
          <Route path="/waterdespenser" element={<WaterDespensor/>}/>
          <Route path="/pestcontrol" element={<PestControl/>}/>
          <Route path="/electrition" element={<Electrition/>}/>
           


        </Routes>
      </Router>
      
    </>
  );
}

export default App;
