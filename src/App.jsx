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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/orders" element={<OrdersAdmin />} />
        <Route path="/admin/news_edit/:id" element={<EditNews />} />
        <Route path="/admin/cards" element={<CardsAdmin />} />
        <Route path="/admin/card/add" element={<AddCard />} />
        <Route path="/admin/card/edit/:id" element={<EditCard />} />
        <Route path="/admin/clients" element={<AdminClient />} />
        <Route path="/admin/clients/add" element={<AddClients />} />
        <Route path="/admin/clients/edit/:id" element={<EditClientsForm />} />
        <Route path="/admin/statistic/all" element={<StatisticsPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/more/:id' element={<More />} />
        <Route path='/cards' element={<CardsCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
