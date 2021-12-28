import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Example from './Example';

ReactDOM.render(
  <React.StrictMode>
   {/* Provide the REDUX Store for Whole React Application  */}
    <Provider >
        <Example/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('example')
);


