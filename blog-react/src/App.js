import React from 'react';
import logo from './logo.svg';
import './App.css';
import Peliculas from './components/peliculas'
import Header from './components/header'
import Slider from './components/slider'
import Sidebar from './components/sidebar'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Slider></Slider>
    <Sidebar></Sidebar>
    <Footer></Footer>
    </div>
  );
}

export default App;
