import React from 'react';
import './App.css';
import './sass/main.scss';
import Carousel from './components/Carousel/Carousel';

function App() {
  let slides = [
    {
        color: 'red'
    },
    {
        color: 'yellow'
    },
    {
        color: 'black'
    },
]
  return (
    <div className="App">
      <Carousel slides={slides}></Carousel>
    </div>
  );
}

export default App;
