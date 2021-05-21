import React from 'react';
import './header.css';
import {useSelector} from "react-redux";

const Header = () => {
    const {wishlist, cart} = useSelector(state => state.products);

    const commonWishlistCost = wishlist.reduce((acc, product) =>{
        return acc += product.price;
    }, 0);

    const commonCartCost = cart.reduce((acc, product) =>{
        return acc += product.price;
    }, 0);

    return (
        <div className={'header'}>
            <h3>The best Store</h3>
            <div className={'row'}>
                <div  title={commonCartCost}>Cart: {cart.length}</div>
                <div title={commonWishlistCost}>WishList: {wishlist.length}</div>
            </div>
        </div>
    );
};

export default Header;