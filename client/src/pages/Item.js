import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import Rating from '../components/Rating';


function Item(props) {

    const item = data.items.find((item) =>
        item.id === props.match.params.id);
    if (!item) {
        return <div> No Product Found </div>;
    }
    return (
        <div>
            <Link to='/'>Return to Results</Link>
            <div className="top row">
                <div className="col-2">
                    <img className="large" src={item.image} alt={item.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h2>{item.name}</h2>
                        </li>
                        <li>
                            <Rating rating={item.rating} reviews={item.reviews} />
                        </li>
                        <li>
                            Price: ${item.price}
                        </li>
                        <li>
                            Description: {item.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card-body card">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price: </div>
                                    <div className="price">${item.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status: </div>
                                    <div>{item.stock > 0 ? (<span className="inStock"> In Stock</span>) : (<span className="noStock"> Unavailable</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;