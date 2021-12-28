
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {Provider,useDispatch} from "react-redux";
import { store } from "./redux/store"
import {useHistory} from 'react-router-dom';
import {uploadProduct} from "./redux/products/products.actions";

let Example  = (props) =>  {
    let dispatch = useDispatch();
    let history = useHistory();

    let [product, setProduct] = useState({
        name : '',
        price : ''
    });

    // handle Input
    let handleInput = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        });
    };


    // submitUploadProduct
    let submitUploadProduct = (e) => {
        e.preventDefault();
        dispatch(uploadProduct(product , history));
    };

    return (
        <React.Fragment>
            <section className="p-3 bg-brains">
                <div className="container ">
                    <div className="row animated flipInY">
                        <div className="col">
                            <p className="h3">
                               <i className="fa fa-cloud-upload-alt"/> Upload Products</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-3 animated zoomInLeft">
                    <div className="card">
                        <div className="card-header bg-dark text-brains">
                            <p className="h4">Upload Here</p>
                        </div>
                        <div className="card-body bg-brains">
                            <form onSubmit={submitUploadProduct}>
                                <div className="form-group">
                                    <input
                                        required
                                        name="name"
                                        value={product.name}
                                        onChange={handleInput}
                                        type="text" className="form-control" placeholder="Product Name"/>
                                </div>
                                
                                <div className="form-group">
                                    <input
                                        required
                                        name="price"
                                        value={product.price}
                                        onChange={handleInput}
                                        type="text" className="form-control" placeholder="Product price"/>
                                </div>
                               
                                <div className="form-group">
                                    <input type="submit" className="btn btn-dark text-brains btn-sm" value="Upload"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Example;


if (document.getElementById('example')) {
    ReactDOM.render(
        <React.StrictMode>
         {/* Provide the REDUX Store for Whole React Application */}
         <Provider store={store} >
             <Example/>
         </Provider>
         </React.StrictMode>, document.getElementById('example'));
}
