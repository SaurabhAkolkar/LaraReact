// upload Product
import {
    UPLOAD_PRODUCT_FAILURE,
    UPLOAD_PRODUCT_REQUEST,
    UPLOAD_PRODUCT_SUCCESS,
} from "./products.actionTypes";
import Axios from "axios";

// upload a product
let uploadProduct = (product , history) => {
    let  demo = {
        fname:"Saurabh",
lname:"Akolkar",
email:"saurabh12d3@gmail.com",
password:"#saurabh123",
phone:"111111",
username:"@abc11dd",
is_creator:"0"
    }
    return async (dispatch) => {
         try {
             let config = {
                 headers : {
                     'Content-Type' : 'application/json',
                     'Accept':'application/json'
                 }
             };
             dispatch({type : UPLOAD_PRODUCT_REQUEST});
             let response = await Axios.post(`http://192.168.1.21:8001/api/register`,demo , config);
             dispatch({ type : UPLOAD_PRODUCT_SUCCESS , payload : response.data});
             history.push('/');
         }
         catch (error) {
              dispatch({type : UPLOAD_PRODUCT_FAILURE , payload: error});
         }
    }
};

// // get MEN's Collection
// let getMensCollection = () => {
//     return async (dispatch) => {
//         try{
//             dispatch({type : MEN_PRODUCT_REQUEST});
//             let response = await Axios.get('/product/men');
//             dispatch({type : MEN_PRODUCT_SUCCESS , payload : response.data});
//         }
//         catch (error) {
//             dispatch({ type : MEN_PRODUCT_FAILURE , payload : error});
//         }
//     };
// };


export {uploadProduct}
