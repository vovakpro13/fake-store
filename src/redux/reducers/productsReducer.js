import {
    ADD_PRODUCT_TO_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART,
    REMOVE_PRODUCT_FROM_WISHLIST,
    RESET_PRODUCTS_LOADING,
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING
} from "../actionTypes";

const initialState = {
    products: [],
    wishlist: [],
    cart: [],
    isProductsLoading: false
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload};
        case SET_PRODUCTS_LOADING:
            return {...state, isProductsLoading: true};
        case RESET_PRODUCTS_LOADING:
            return {...state, isProductsLoading: false};
        case ADD_PRODUCT_TO_WISHLIST:
            const isProductInWishlist = state.wishlist.find(p => p.id === action.payload.id);
            const wishlist = [...state.wishlist];
            !isProductInWishlist && wishlist.push(action.payload);
            return {...state, wishlist};
        case REMOVE_PRODUCT_FROM_WISHLIST:
            return {...state, wishlist: state.wishlist.filter(p => p.id !== action.payload.id)};
        case ADD_TO_CART:
            const isProductInCart= state.cart.find(p => p.id === action.payload.id);
            const cart = [...state.cart];
            !isProductInCart && cart.push(action.payload);
            return {...state, cart};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(p => p.id !== action.payload.id)};
        default:
            return state;
    }
};