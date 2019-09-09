import React from 'react';
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import MyUdacity from './components/udacity'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MyUdacity/>
      <Footer/>
    </div>
  );
}

export default App;
