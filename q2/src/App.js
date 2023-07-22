import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetail from './components/TrainDetail';


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={TrainList} />
      <Route path="/train/:id" component={TrainDetail} />
    </Router>
  );
};

export default App;
