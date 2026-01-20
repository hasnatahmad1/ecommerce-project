import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header'
import './HomePage.css'
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);



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
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };

        getHomeData();
    }, []);

    return (
        <>
            <title>Ecommerece Project</title>

            <Header
                cart={cart}
            />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}