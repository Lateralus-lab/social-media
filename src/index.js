import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore';
import './App.css';
import reportWebVitals from './reportWebVitals';

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireThree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
