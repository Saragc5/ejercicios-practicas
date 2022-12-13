import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import './App.css';
import Ejercicio1Pages from './Pages/Ejercicio1Pages'
import Ejercicio2Pages from './Pages/Ejercicio2Pages'
import Ejercicio3Pages from './Pages/Ejercicio3Pages'
import Ejercicio4Pages from './Pages/Ejercicio4Pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter className="contenedor">
          <NavLink to="/Ejercicio1Pages" >Ejercicio 1</NavLink>
          <NavLink to="/Ejercicio2Pages" >Ejercicio 2</NavLink> 
          <NavLink to="/Ejercicio3Pages" >Ejercicio 3</NavLink>
          <NavLink to="/Ejercicio4Pages" >Ejercicio 4</NavLink>
       <Routes>
          <Route exact path="Ejercicio1Pages" element={<Ejercicio1Pages />} />
          <Route exact path="/Ejercicio2Pages" element={<Ejercicio2Pages />}/> 
          <Route exact path="/Ejercicio3Pages" element={<Ejercicio3Pages />}/>
          <Route exact path="/Ejercicio4Pages" element={<Ejercicio4Pages />}/>
       </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
