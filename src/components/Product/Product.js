import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap';


const Product = (props) => {
    
    const {img, name,author,price,description} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>

            <div className='product-info' >
                <h4 className="product-name">{name}</h4>
                <h5>{description}</h5>
                <p><small>by: {author}</small></p> 
                <p className="price-text">${price}</p>
                
                <Button className="main-button"
                 onClick={()=> props.handleAddProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now </Button>

            </div>

        </div>
    );
};

export default Product;
