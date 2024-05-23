import React from 'react';
import '../assets/style/index.css'

const CustomCartItem = ({ item }) => {

    const { title, price, linkImage } = item;

    return (
        <div className="custom-cart-item">
            <div className="cart-item-image">
                <img src={linkImage} alt={title} />
            </div>
            <div className="cart-item-info">
                <div>{title}</div>
                <div className='item-price'>{price}₽</div>
            </div>
        </div>
    );
};

export default CustomCartItem;
