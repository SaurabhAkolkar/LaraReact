import {
    UPLOAD_PRODUCT_FAILURE,
    UPLOAD_PRODUCT_REQUEST,
    UPLOAD_PRODUCT_SUCCESS
} from "./products.actionTypes";

export const PRODUCT_FEATURE_KEY = 'product';

let initialState = {
    loading : false,
    products : [],
    selectedProduct : {},
    errorMessage : ''
};

let productReducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case UPLOAD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPLOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case UPLOAD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return state;
    }
};
export {productReducer};
