import React from 'react'
import Rating from './Rating';

export default function Item(props) {

    const {item} = props;
    return (
        <div key={item._id} className="card">
            <a href={`/item/${item._id}`}>
                <img className="medium" src={item.image} alt={item.name} />
            </a>
            <div className="card-body">
                <a href={`/item/${item._id}`}>
                    <h2>{item.name}</h2>
                </a>
                <Rating rating={item.rating} numReviews={item.numReviews} />
                <div className="price">${item.price}
                </div>
            </div>
        </div>
    )
}




