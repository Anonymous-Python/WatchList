import React from 'react';
import Header from './components/Header.js';
import Genre from './components/Genre.js';
import CurrentGenre from './components/CurrentGenre.js';
import WatchList from './components/WatchList.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>  
      <Header/> 
      <main>
        <Genre/>
        <CurrentGenre/>
        <WatchList/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
