import { HomePage } from './pages/homepage/HomePage'
import { Routes, Route } from 'react-router'
import './App.css'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orderspage/OrdersPage';
import { TrackingPage } from './pages/trackingpage/TrackingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App
