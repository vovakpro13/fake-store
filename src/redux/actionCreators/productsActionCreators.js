import {
    ADD_PRODUCT_TO_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART,
    REMOVE_PRODUCT_FROM_WISHLIST,
    RESET_PRODUCTS_LOADING,
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING
} from "../actionTypes";

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setProductsLoading = () => ({type: SET_PRODUCTS_LOADING});
export const resetProductsLoading = () => ({type: RESET_PRODUCTS_LOADING});
export const addProductToWishlist = (payload) => ({type: ADD_PRODUCT_TO_WISHLIST, payload});
export const removeProductFromWishlist = (payload) => ({type: REMOVE_PRODUCT_FROM_WISHLIST, payload});
export const addProductToCart = (payload) => ({type: ADD_TO_CART, payload});
export const removeProductFromCart = (payload) => ({type: REMOVE_FROM_CART, payload});

export const getProductsThunk = () =>
     async (dispatch) => {
        dispatch(setProductsLoading());
        const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        dispatch(setProducts(products));
        dispatch(resetProductsLoading());
    }