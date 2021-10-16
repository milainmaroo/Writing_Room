import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Details from './components/Details';
import NotFound from './components/NotFound';

function App() {
  // Navbar
  // Home
  // Blog Details
  // Create Blog
  // Not Found
  return (
    <div className="App">
      <Router>
        <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs/:id">
              <Details />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> 
          </Switch>

      </Router>
      
    </div>
  );
}

export default App;
