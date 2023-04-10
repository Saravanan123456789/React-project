import './App.css';
import CalculatorComponent from './components/Calculatorcomponent';

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link><br/>
        <Link to='/Calculator'>Calculator</Link><br/>
        
        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/Calculator" element={<CalculatorComponent/>}></Route>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;