import './App.css';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CatalogoRemate from './componentes/productos/CatalogoRemate';
import Ingresa from './componentes/login/Ingresa';
import Registro from './componentes/login/Registro';
import DashboardUser from './componentes/user/dashboardUser';



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
        exact path='/dashboardUser'
        render={() => <DashboardUser />
        }
      />



    </Router>
  );
}

export default App;
