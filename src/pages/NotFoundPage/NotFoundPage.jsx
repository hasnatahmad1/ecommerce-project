import { Header } from "../../components/Header";
import './NotFoundPage.css'

export function NotFoundPage({ cart }) {
    return (
        <>
            <title>Page Not Found</title>
            <Header cart={cart} />

            <div className="page-not-found">Page Not Found</div>
        </>
    );
}