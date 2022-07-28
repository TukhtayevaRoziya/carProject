import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login'
import OrdersAdmin from './pages/orders_admin/orders_admin'
import EditNews from './pages/edit_clients/edit_clients'
import CardsAdmin from './pages/cards/cards'
import AddCard from './pages/add_card/add_card'
import EditCard from './pages/edit_card/edit_card'
import AdminClient from './pages/clients_admin/clients_admin'
import AddClients from './pages/add_clients/add_clients'
import EditClientsForm from './pages/edit_clients/edit_clients'
import StatisticsPage from './pages/statistics/statistics'
import Home from './components/home/Home';
import More from './pages/more/More'
import CardsCar from './pages/cardsCar/CardsCar';
import 'antd/dist/antd.css';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState( false );
  console.log(login);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login  setLogin={setLogin}/>} />

        <Route path="/admin/orders" element={<OrdersAdmin />} />
        <Route path="/admin/news_edit/:id" element={<EditNews />} />
        <Route path="/admin/cards" element={<CardsAdmin login={login} />} />
        <Route path="/admin/card/add" element={<AddCard  login={login} />} />
        <Route path="/admin/card/edit/:id" element={<EditCard  login={login} />} />
        <Route path="/admin/clients" element={<AdminClient  login={login} />} />
        <Route path="/admin/clients/add" element={<AddClients login={login} />} />
        <Route path="/admin/clients/edit/:id" element={<EditClientsForm login={login}  />} />
        <Route path="/admin/statistic/all" element={<StatisticsPage login={login}  />} />
        <Route path='/' element={<Home />} />
        <Route path='/more/:id' element={<More />} />
        <Route path='/cards' element={<CardsCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
