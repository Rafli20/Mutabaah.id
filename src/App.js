import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './conponent/Home'
import Navbar from './conponent/Navbar';
import DataMt from './conponent/DataMt';
import AbsenMt from './conponent/AbsenMt';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/data-mutabaah" component={DataMt} />
        <Route path="/absen-mutabaah" component={AbsenMt} />
      </div>
    </BrowserRouter>

  );
}

export default App;
