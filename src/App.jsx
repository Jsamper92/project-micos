import React from 'react';
import './App.css';
import './sass/main.scss';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Cookies from './components/Cookies/Cookies';

function App() {
  let slides = [
    {
        color: 'yellow',
        background: 'gray',
        content: <Header></Header>
    },
    {
      color: 'red',
      background: 'grey',
      content: 'vista 2'
    },
    {
        color: 'green',
        background: 'orange',
        content: 'no tengo contenido'
    },
]
  return (
    <div className="App">
      <Header/>
     {/*  <Carousel slides={slides}></Carousel> */}
      <Cookies></Cookies>
    </div>
  );
}

export default App;
