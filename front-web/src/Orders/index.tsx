import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './style.css';
import { OrderLocationdata, Product } from './types';

const Orders = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation] = useState<OrderLocationdata>()
    useEffect(()=>{
        
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(err => console.log('error: ' + err));
    }, []);
    
    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products = {products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
            
    );
}

export default Orders;