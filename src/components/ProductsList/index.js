import React, {useEffect} from 'react';
import {getProductsThunk} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import './productsList.css';

const ProductsList = () => {
    const dispatch = useDispatch();

    const {products, isProductsLoading} = useSelector(state => state.products);

    useEffect(() => dispatch(getProductsThunk()), [])

    return (
        <div>
            {
                isProductsLoading
                    ? <p>LOADING...</p>
                    : <div className={'productsList'}>
                        {
                            products.map(p => <Product product={p}/>)
                        }
                    </div>
            }
        </div>
    );
}

export default ProductsList;