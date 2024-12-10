import { PeliculasGrid } from './Components/PeliculasGrid';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { PeliculaDetalle } from './pages/PeliculaDetalle';

function App() {
  return (
   <BrowserRouter> 

      <header>
        <Link to="/">
          <h1 className="title">PELICULAS</h1>
        </Link>
      </header>
      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/pelicula/:peliculaId' element={<PeliculaDetalle/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
