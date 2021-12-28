import {combineReducers} from "redux";
import {PRODUCT_FEATURE_KEY, productReducer} from "./products/products.reducer";

let rootReducer = combineReducers({
    [PRODUCT_FEATURE_KEY] : productReducer,
  
});
export {rootReducer};
