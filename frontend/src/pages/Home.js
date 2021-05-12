import React from 'react';
import data from '../data';
import Item from '../components/Item';


export default function Home() {

    return (
        <div>
            <div className= "center row">
                {data.items.map((item) => { 
                return <Item key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}
