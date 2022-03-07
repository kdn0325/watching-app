import React from 'react';
import "swiper/swiper.min.css"
import "./assets/boxicons-2.1.1/css/boxicons.min.css"
import "./App.scss"
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './component/header/Header';
import Footer from "./component/footer/Footer";
import Router from './config/Router';

const App = () => {
  return (
    <BrowserRouter>
        <Route render={props=>(
          <>
            <Header {...props}/>
            <Router/>
            <Footer/>
          </>
        )}/>
    </BrowserRouter>
  );
};

export default App;