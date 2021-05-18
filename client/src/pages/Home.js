import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import data from '../data';
import Item from '../components/Item';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import './Home.css';



export default function Home() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const loadData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/items');
                setLoading(false);
                setItems(data);
            }
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        
            <div>
                {loading ? <Loading></Loading> : error
                    ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                        <div className="col-2">
                            <div className="center row">
                    
                        {items.map((item) => {
                            return <Item key={item._id} item={item} />
                        })}
                    </div>
                    </div>
                }
            </div>
      
    );
}
