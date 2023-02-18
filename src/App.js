
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Commande from './Pages/Commande';
import Service from './Pages/Service';
import Historique from './Pages/Historique';
import Reservation from './Pages/Reservation';
import Menu from './Components/Menu';
import Logo from './Components/Logo';
import Infos from './Components/Infos';
import { useState } from 'react';
import Auth from './Pages/Auth';
import Client from './Pages/Client';

function App() {
  const [reservations, setReservations] = useState([])
  const [clients, setClients] = useState([])


  function handleaddreservation(reservation) {
    console.log('handleaddreservation', reservation);
    setReservations([...reservations, reservation]);
  }
  function handleaddclient(client) {
    console.log('handleaddclient', client);
    setClients([...clients, client]);
  }

  return (
    <BrowserRouter>
      <div>  <Logo /> </div>
      <div>  <Menu /> </div>

      <Routes>
        <Route path="/" element={< Commande />} />
        <Route path="/service" element={< Service />} />
        <Route path="/reservation" element={< Reservation handleaddreservation={handleaddreservation} />} />
        <Route path="/Historique" element={< Historique reservations={reservations} />} />
        <Route path="/authentification" element={< Auth handleaddclient={handleaddclient} />} />
        <Route path="/client" element={< Client clients={clients} />} />




      </Routes>
      <div>  <Infos /> </div>
    </BrowserRouter>
  );
}

export default App;
