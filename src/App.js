import './App.css';
import BottomSection from './Components/BottomSection/BottomSection';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import OrderConfirm from './Components/OrderConfirm/OrderConfirm';
import Switch from 'react-bootstrap/esm/Switch';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>   
      <Switch>
      <div className="App">

      <Route exact path='/orderConfirm' component={OrderConfirm} />
      <div>
      <Route exact path='/' component={Header} /></div>
      <div className='main-section'>
      <Route exact path='/' component={MainContent} />
      <Route exact path='/' component={BottomSection} />
      </div>
      <div>
      <Route exact path='/' component={Footer} /></div>
      
    </div>
      </Switch>
    </Router>

  );
}

export default App;
