import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import SwiftRooterServicesPage from "./pages/Services";
import SwiftRooterContactPage from "./pages/Contact";
import SwiftRooterAboutPage from "./pages/About";
import Navbar from "./components/Navbar";
import LocationsComponent from "./components/Location";

export default function App() {
  return (
    <>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/about' element={<SwiftRooterAboutPage />} />
  <Route path="/services" element={<SwiftRooterServicesPage />} />
  <Route path="/contact" element={<SwiftRooterContactPage />} />
  <Route path="/locations" element={<LocationsComponent />} />
  <Route path="*" element={<Home />} />
</Routes>
<Footer />
</BrowserRouter>
    </>
  )
}