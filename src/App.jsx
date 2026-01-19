import axios from 'axios';
import { HomePage } from './pages/homepage/HomePage'
import { Routes, Route } from 'react-router'
import './App.css'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orderspage/OrdersPage';
import { TrackingPage } from './pages/trackingpage/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      });
  }, []);


  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
