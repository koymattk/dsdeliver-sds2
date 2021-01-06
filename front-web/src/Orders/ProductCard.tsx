import {ReactComponent as Pizza} from './pizza.svg'

const ProductCard = () => {
    return(
       <div className="order-card-container">
           <h3 className="order-card-title">
                Pizza Calabresa
           </h3>
            <Pizza className="order-card-image"/>
            <h3 className="order-card-price">
                R$ 35.90
            </h3>
            <div className="order=card-description">
                <h3>Descrição</h3>
                <p>Descrição Uma deliciosa combinação 
                    Linguiça Calabresa, rodelas de cebolas f
                    rescas, azeitonas pretas, mussarela, polpa
                    de tomate, orégano e massa especial.
                </p>
            </div>
       </div> 
    );
}

export default ProductCard;