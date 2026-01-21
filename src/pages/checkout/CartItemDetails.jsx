import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdated, setIsUpdated] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateQuantity = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity)
        });
    };

    const toggleUpdateButton = () => {
        if (isUpdated) {
            updateQuantity();
            loadCart();
            setIsUpdated(false);
        } else {
            setIsUpdated(true);
        }
    };

    const inputChange = (event) => {
        setQuantity(event.target.value);
    };

    const updateKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggleUpdateButton();
        }
        else if (event.key === 'Escape') {
            setQuantity(cartItem.quantity);
            setIsUpdated(false);
        }
    };

    return (
        <div className="cart-item-details">
            <div className="product-name">
                {cartItem.product.name}
            </div>
            <div className="product-price">
                {formatMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
                <span>
                    Quantity: {isUpdated ? (
                        <input
                            type="text"
                            onKeyDown={updateKeyDown}
                            value={quantity}
                            onChange={inputChange}
                            style={{ width: 50 + 'px' }}
                        />
                    ) : (
                        <span className="quantity-label">{cartItem.quantity}</span>
                    )}
                </span>
                <span
                    className="update-quantity-link link-primary"
                    onClick={toggleUpdateButton}
                >
                    Update
                </span>
                <span
                    className="delete-quantity-link link-primary"
                    onClick={deleteCartItem}
                >
                    Delete
                </span>
            </div>
        </div>
    );
}