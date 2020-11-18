import './App.css';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Producto from './componentes/productos/Producto';
import CatalogoProducto from './componentes/productos/CatalogoProducto';




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
        render={() => <CatalogoProducto />
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
