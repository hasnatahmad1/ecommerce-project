import './Header.css';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';

export function Header({ cart }) {
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    const navigateToHomePage = useNavigate();

    let searchBarText = '';

    const toggleSearchBarText = (event) => {
        searchBarText = event.target.value;
    };

    const toggleSearchButton = () => {
        // console.log(searchBarText);
        navigateToHomePage(`/?search=${searchBarText}`);
    };
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src="images/logo-white.png" />
                        <img className="mobile-logo"
                            src="images/mobile-logo-white.png" />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input
                        className="search-bar"
                        type="text"
                        onChange={toggleSearchBarText}
                        placeholder="Search"
                    />

                    <button
                        className="search-button"
                        onClick={toggleSearchButton}
                    >
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}