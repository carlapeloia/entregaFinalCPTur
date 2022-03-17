import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Navbar/index'
import Footer from './components/Footer/index'
import Home from './components/pages/Home'
import Destinos from './components/pages/Destinos';
import Promocoes from './components/pages/Promocoes';
import Contato from './components/pages/Contato';
import Inserir from './components/pages/Inserir';
import Deletar from './components/pages/Deletar';
import Atualizar from './components/pages/Atualizar';
import AcessoAgente from './components/pages/AcessoAgente';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos/>}/>
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/inserir" element={<Inserir />} />
        <Route path="/deletar" element={<Deletar />} />
        <Route path="/atualizar" element={<Atualizar />} />
        <Route path="/acessoAgente" element={<AcessoAgente />} />
        <Route path="/promocoes" />
        <Route path="/contato" />
        <Route path="/inserir" />
        <Route path="/deletar" />
        <Route path="/atualizar" />
        <Route path="/acessoAgente" />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
