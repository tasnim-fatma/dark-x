import React from 'react';
import Home from './components/home/Home';
import Static from './components/statics/Static';
import Card from './components/cards/Card';
import Trade from './components/trade/Trade';
import Box from './components/box/Box';
import Get from './components/get/Get';
import Client from './components/client/Client';
import Trade2 from './components/trade copy/Tradecopy';
import Footer from './components/footer/Footer';	
import Last from './components/last/Last';
import Nav from './components/Nav/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import House from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact component={House} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>

      <Home />
      <Static />
      <Card />
      <Trade />
      <Trade2 />
      <Box />
      <Get />
      <Client />
      <Footer />
      <Last />
    </div>
  );
}


export default App;
