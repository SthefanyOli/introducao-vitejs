import  {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import Exemplo03 from './pages/exemplos/ex-03';
import Exemplo04 from './pages/exemplos/ex-04';
import Atividade01 from './pages/atividades/atv-01';
import Atividade02 from './pages/atividades/atv-02';
import Atividade03 from './pages/atividades/atv-03';


function App() {
  return (
   <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/exemplo/01" element = {<Exemplo01/>} />
    <Route path = "/exemplo/02" element = {<Exemplo02/>} />
    <Route path = "/exemplo/03" element = {<Exemplo03/>} />
    <Route path = "/exemplo/04" element = {<Exemplo04/>} />
    <Route path = "/atividade/01" element = {<Atividade01/>} />
    <Route path = "/atividade/02" element = {<Atividade02/>} />
    <Route path = "/atividade/03" element = {<Atividade03/>} />
   </Routes>
  )
}

export default App;
