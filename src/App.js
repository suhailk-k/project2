import React from 'react';
import Home from './Home/Home';
import Solution1 from './Solutions/Solution1';
import Solution2 from './Solutions/Solution2';
import Solution3 from './Solutions/Solution3';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/question1" element={  <Solution1/>}/>
        <Route path="/question2" element={ <Solution2/>}/>
        <Route path="/question3" element={ <Solution3/>}/>
     
    

          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
