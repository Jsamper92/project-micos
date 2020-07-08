import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';

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
      <Home slides={slides}/>
      <Footer/>
    </div>
  );
}

export default App;
