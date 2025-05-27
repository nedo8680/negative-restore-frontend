import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Digitize from './pages/Digitize';
import Contact from './pages/Contact';
import About from "./pages/About";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import ThankYou from './pages/Thankyou';
// import DonateButton from "./components/DonateButton";

function App() {
  

  return (
    <>
      <PayPalScriptProvider options={{ clientId: "AemaVSlFR38Xdxyfoqpyl2Hw4IgKTbO2BF5PAq_zDG_yZfXhelBDj-8YHtPE1J_3fgv2Hw4_6qajY0Us" }}>
        <Router>
          <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/digitize-negatives" element={<><Digitize /></>} />
            <Route path="/about" element={<><About /></>} />
            <Route path="/contact" element={<><Contact /></>} />
            {/* <Route path="/" element={<><Home /><DonateButton /></>} /> agregar esta linea para la opcion de donar */}
            {/* <Route path="/thankyou" element={<ThankYou />} /> */}
          </Routes>
        </Router>
      </PayPalScriptProvider>
    </>
  )
}

export default App
