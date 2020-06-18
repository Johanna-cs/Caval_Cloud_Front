import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 00dd4aaf49b6c493c61fd115c31fb97400266ea3
=======
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import 'bootstrap-toggle/css/bootstrap-toggle.min.css';
>>>>>>> 2b3529eb5390b1ca65253779df5d356f3c438fc1


>>>>>>> a78afa3ee7d49e52a8f727cb4c004e71ec8c2e77
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
