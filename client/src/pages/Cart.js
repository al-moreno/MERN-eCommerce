import React, { useState, useEffect } from 'react';
import cartService from '../components/cart';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(cartService.getCart());
    }, []);

    return (
        <main>
            {cart && cart.length > 0 ? cart.map((item, idx) => {
                return <div key={idx} className='card'>
                    <table className='single-row'>
                        <tr>
                            <td className='name-cell'><span className='item-name'>{item.name}</span><br /> <br />
                            <img className="small" src={item.image} alt={item.name} /></td>
                            <td className='item-price'><b>Price: </b> <br />${item.price.toFixed(2)}</td>
                            <td className='item-quantity'><b>Quantity: </b><br />{item.quantity}</td>
                            <td className='item-price'><b>Total:<br /> ${item.quantity * item.price}</b></td>
                        </tr>
                    </table>
                </div>
             
            }) : 'No Items in the cart'}
                    <ul>
                        <li>
                            <button className="block">
                            <a href="checkout">Proceed to Checkout</a></button>
                        </li>
                    </ul>
        </main>
    )
}

export default Cart;