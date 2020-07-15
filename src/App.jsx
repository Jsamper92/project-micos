import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';
import Installation from './pages/Installation/Installation';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  let slides = [
    {
      color: 'yellow',
      title: 'QUIENES SOMOS',
      content: <Welcome/>
    },
    {
      color: 'red',
      title: 'INSTALACIONES',
      content: <Installation/>
    },
    {
      color: 'green',
      title: 'SERVICIOS',
      content: <Services/>
    },
    {
      color: 'green',
      title: 'CONTACTO',
      content: <Contact/>
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
