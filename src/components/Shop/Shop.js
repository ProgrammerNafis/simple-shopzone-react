import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [product, setProduct ] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const [cart,setCart] = useState([])

    const AddProduct = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
    }

    return (
        <>
        <div className="shop-container">
            <div className="product-container">
            {
                product.map(product=> <Product key={product.key} AddProduct={AddProduct} product={product}/>)
            }
            </div>
            <div className="cart-container">
            <h3>Chekout The Cart VAlues</h3>
            
           <Cart cart={cart}/>

            </div>
        </div>
    
        </>
    );
};

export default Shop;