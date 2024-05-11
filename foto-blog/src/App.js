import { Routes, Route } from "react-router-dom"
import Posts from './vistas/Posts/Posts'
import Login from './vistas/Login/Login'
import Perfil from './vistas/Perfil/Perfil'
import RutaProtegida from './vistas/RutaProtegida/RutaProtegida'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RutaProtegida />}>
        <Route path="posts" element={<Posts />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}

export default App;
