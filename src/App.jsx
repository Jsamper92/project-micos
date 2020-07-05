import React from 'react';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Cookies from './components/Cookies/Cookies';

function App() {
  let slides = [
    {
      color: 'yellow',
      background: 'gray',
      content: 'Primer item'
    },
    {
      color: 'red',
      background: 'grey',
      content: 'Segundo item'
    },
    {
      color: 'green',
      background: 'orange',
      content: 'Tercer item'
    }
  ]
  return (
    <div className="App">
      <Header slides={slides} />
      <Carousel slides={slides}></Carousel>
      <Cookies></Cookies>
    </div>
  );
}

export default App;
