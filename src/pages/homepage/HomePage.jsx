import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Header } from '../../components/Header'
import './HomePage.css'
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    const navigateToNotFoundPage = useNavigate();



    /*
    fetch('http://localhost:3000/api/products')
        .then((response) => {
            response.json().then((data) => {
                console.log(data);
            })
        });
    */

    //Same as above but clean method

    /*
    fetch('http://localhost:3000/api/products')
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
    });
    */

    // Same as above but clean method but using axios package/Library laikin hum n yahan useEffect is wja s use kia ta k jb bhi hum HomePage load ya reload krain to dobara dobara request send na ho.
    useEffect(() => {
        /*
        axios.get('http://localhost:3000/api/products')
            .then((response) => {
                console.log('Products loaded:', response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
        */

        //Using Async Await
        const getHomeData = async () => {
            if (search) {
                const response = await axios.get(`/api/products/?search=${search}`)
                if ((response.data).length === 0) {
                    navigateToNotFoundPage('/product-not-found');
                }
                else {
                    setProducts(response.data);
                }
            }
            else {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            }
        };

        getHomeData();
    }, [search, navigateToNotFoundPage]);

    return (
        <>
            <title>Ecommerece Project</title>

            <Header
                cart={cart}
            />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}