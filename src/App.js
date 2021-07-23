import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './logincomponent/Register'
import Login from './logincomponent/Login'
import Addproduct from './components/Addproduct'
import Updateproduct from './components/Updateproduct'
import { BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      
      <Route exact path ="/register">
      <Register />
      </Route>
      <Route exact path ="/">
      <Login />
      </Route>
      <Route exact path ="/add">
      <Addproduct />
      </Route>
      <Route exact path ="/update">
      <Updateproduct />
      </Route>
      
      </Router>
    </div>
  );
}

export default App;
