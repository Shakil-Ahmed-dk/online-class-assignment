import React from 'react';
import './Cart.css';
import {Button} from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    const total = ( cart.reduce((total,prd) => total + prd.price,0)).toFixed(2);

    return ( 
        <div className='order-summary'>
            <h4>Order Summary</h4>  
            <p>Course Ordered: {cart.length}</p>
            <p className='total-price'>Total Price: ${total} </p>
            <Button>Enroll Now</Button>
        </div>
    );
};

export default Cart;