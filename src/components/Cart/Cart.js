import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalCart = cart.reduce((total,prd)=>total+prd.price, 0)

    let shipping = 0

    if(totalCart > 35){
        shipping = 0
    }
    else if(totalCart>15){
        shipping = 4.99
    }
    else if(totalCart >0){
        shipping =  12.99
    }

    const TAx = totalCart / 3

    const Totall = (totalCart + shipping + Number(TAx)).toFixed(2)

    return (
        <div>
        <p>Ordered items: {cart.length} </p>
        <p>Your Shipping cost: {shipping}</p>
        <p>Product Price: {totalCart}</p>
        <p>Tax And VAT : {TAx}</p>
        <p>Price Total:{Totall}</p> 
        </div>
    );
};

export default Cart;