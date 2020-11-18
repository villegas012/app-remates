import './App.css';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Productos from './componentes/productos/Productos';
import Producto from './componentes/productos/Producto';


function App() {
  return (
    <Router>
      <Route
        exact path='/'
        render={() => <Home />
        }

      />
      <Route
        exact path='/productos'
        render={() => <Productos />
        }
      />

      <Route
        exact path='/productos/:id'
        render={() => <Producto />
        }
      />

    </Router>
  );
}

export default App;
