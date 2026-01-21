import { Header } from "../../components/Header";
import './ProductNotFoundPage.css'

export function ProductNotFoundPage({ cart }) {
    return (
        <>
            <title>Product Not Found</title>
            <Header cart={cart} />

            <div className="product-not-found">Product Not Found</div>
        </>
    );
}