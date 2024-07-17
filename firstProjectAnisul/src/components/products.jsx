import React from 'react';
import Card from './card';

const ProductList = (props) => {
    const { products } = props;

    return (
        <div className="container">
            {
                products.map((product, index) => (
                    <Card key={index} product={product} />
                ))
            }
        </div>
    );
};

export default ProductList;
