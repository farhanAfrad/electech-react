import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, image, name, brand, select, price, rating } = product;
    return (
        <div>
            <div className="card card-side bg-base-100 border">
                <figure><img src={image} alt="Movie" className='w-48' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>brand: {brand}</p>
                    <p>price: {price}</p>
                    <p>rating: {rating}</p>
                    <p>type: {select}</p>
                    <div className="card-actions">
                        <Link to={`/product/${_id}`}>
                            <button className="btn bg-red-300">details</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn bg-red-300">update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;