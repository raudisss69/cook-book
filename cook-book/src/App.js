import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Create from './components/Create';
import Details from './components/Details';
import { APIContextProvider } from './APIcontext';


function App() {
  return (
  <APIContextProvider>
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element = {<Recipes/>}/>
          <Route path="/create" element = {<Create/>}/>
          <Route path="/details/:id" element = {<Details/>}/>
        </Routes>
    </div>
    </Router>
  </APIContextProvider>    
  );
}

export default App;

