import './App.css';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CatalogoRemate from './componentes/productos/CatalogoRemate';
import DashboardUser from './componentes/user/dashboardUser';
import Remate from './componentes/productos/Remate'
import Registro from './componentes/user/login/Registro';
import Ingresa from './componentes/user/login/Ingresa';
import CrearRemate from './componentes/remates/CrearRemate';
import ModificarRemate from './componentes/remates/ModificarRemate';



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

      <Route
        exact path='/registrate'
        render={() => <Registro />
        }
      />

      <Route
        exact path='/ingresa'
        render={() => <Ingresa />
        }
      />

      <Route
        exact path='/user/:id'
        render={() => <DashboardUser />
        }
      />

      <Route
        exact path='/user/:id/crearRemate'
        render={() => <CrearRemate />
        }
      />

      <Route
        exact path='/user/:id/modificarRemate'
        render={() => <ModificarRemate />
        }
      />

    </Router>
  );
}

export default App;
