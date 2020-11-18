import './App.css';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Remate from './componentes/productos/Remate';
import CatalogoRemate from './componentes/productos/CatalogoRemate';


function App() {
  return (
    <Router>
      <Route
        exact path='/'
        render={() => <Home />
        }

      />
      <Route
        exact path='/catalogo'
        render={() => <CatalogoRemate />
        }
      />

      <Route
        exact path='/catalogo/:id'
        render={() => <Remate />
        }
      />

    </Router>
  );
}

export default App;
