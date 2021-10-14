import './App.css';
import BottomSection from './Components/BottomSection/BottomSection';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import OrderConfirm from './Components/OrderConfirm/OrderConfirm';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <Router>   
      <Switch>
     
      <div className="App">
      <Route exact path='/orderConfirm' component={OrderConfirm} />
      <Route exact path='/' component={Header} />
      <Route exact path='/' component={MainContent} />
      <Route exact path='/' component={BottomSection} />
    </div>
      </Switch>
    </Router>

  );
}

export default App;
