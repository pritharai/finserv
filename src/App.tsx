import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import Contact from "./pages/Contact";
import SipCalculator from "./pages/SipCalc";
import SipPerformanceForm from "./pages/sip2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path="SipCalc" element={<SipCalculator />}/>
         <Route path="/SipPerformanceForm" element={<SipPerformanceForm />} />
         
        <Route path="Aboutus" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
