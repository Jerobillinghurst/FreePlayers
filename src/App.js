import './App.css';
import Navbar from "./components/Navbar+CartWidget";
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">
     <Navbar/>
      <Switch>
        <Route path="/checkout-page">
          <CheckoutPage/>  
        </Route>
        <Route path="/">
          <Products/>  
        </Route>
      </Switch>  
    </div>
    </Router>
  );
}

export default App;
