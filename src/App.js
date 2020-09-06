import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

