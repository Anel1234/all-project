import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      <Navbar isStepPage={true} />
      <Outlet />
      {/* Tombol WhatsApp dengan gambar */}
      <Whatsapp
        phoneNumber="62895359762347"
        message="Halo, saat ini saya sedang mengakses website JobPortal dan saya butuh bantuan"
      />

      </>
  );
}

export default App;
