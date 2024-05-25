import React from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './pages/Footer/Footer';


function App() {

  return (

    <>
      <Header />
      <div className="app">
        <Home />
      </div>
      <Footer />

  
    </>

  );
}

export default App;
