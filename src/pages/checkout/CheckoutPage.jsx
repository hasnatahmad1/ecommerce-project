import { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckoutHeader } from '../../components/CheckoutHeader';
import './CheckoutPage.css'
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';


export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data);
        }

        fetchCheckoutData();
    }, []);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            const response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        }
        fetchCheckoutData();
    }, [cart]);


    return (
        <>
            <title>Checkout</title>

            <CheckoutHeader
                cart={cart}
            />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary
                        loadCart={loadCart}
                        cart={cart}
                        deliveryOptions={deliveryOptions}
                    />

                    <PaymentSummary
                        paymentSummary={paymentSummary}
                        loadCart={loadCart}
                    />
                </div>
            </div>
        </>
    );
}