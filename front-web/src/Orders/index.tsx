import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './style.css';

const Orders = () => {
    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductList/>
        </div>
            
    );
}

export default Orders;