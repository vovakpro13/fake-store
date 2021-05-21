import React from 'react';
import './product.css';
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart, addProductToWishlist, removeProductFromCart, removeProductFromWishlist} from "../../../redux";

const Product = ({product}) => {
    const {title, image, description, price, id} = product;

    const {wishlist, cart} = useSelector(state => state.products);
    const dispatch = useDispatch();

    const addToWishlist = () => dispatch(addProductToWishlist(product));
    const removeFromWishlist = () => dispatch(removeProductFromWishlist(product));
    const addToCart = () => dispatch(addProductToCart(product));
    const removeFromCart = () => dispatch(removeProductFromCart(product));

    const isProductInWishlist = wishlist.find(p => p.id === id);
    const isProductInCart = cart.find(p => p.id === id);

    return (
        <div className={'product'}>
            <div>
                <h3>{title} - ${price}</h3>
                <small>{description}</small>
            </div>
            <img src={image} alt={title}/>
            <div>
                <button onClick={isProductInCart ? removeFromCart : addToCart}>
                    {isProductInCart ? 'Remove from ' : 'Add to '}
                    cart
                </button>
                <button onClick={isProductInWishlist ? removeFromWishlist : addToWishlist}>
                    {
                        isProductInWishlist ? 'Remove from ' : 'Add to '
                    }
                    wishlist
                </button>
            </div>
        </div>
    );
}

export default Product;