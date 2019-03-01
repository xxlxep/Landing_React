import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';


class App extends Component {
  render() {
    return (
      <div className="App" >
         <Header />
         <Featured />
         <VenueNfo />
         <Highlights />
         <Pricing />
      </div>
    );
  }
}

export default App;
