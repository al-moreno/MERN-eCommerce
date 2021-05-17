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
                        <tr><td><img className="small" src={item.image} alt={item.name} /></td>
                            <td className='name-cell'><span className='item-name'>{item.name}</span><br />
                                <span className='item-desc'>{item.description}</span></td>
                            <td className='item-price'><b>Price: </b> ${item.price.toFixed(2)}</td>
                            <td className='item-quantity'><b>Quantity: </b>{item.quantity}</td>
                            <td className='item-price'><b>Total: ${item.quantity * item.price}</b></td>
                        </tr>
                    </table>
                </div>
            }) : 'No Items in the cart'}
        </main>
    )
}

export default Cart;