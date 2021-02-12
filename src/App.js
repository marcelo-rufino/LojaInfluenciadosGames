import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Contatos from './pages/contatos'
import Endereco from './pages/endereco'
import Produtos from './pages/produtos'
import Menu from './components/menu'
import Rodape from './components/rodape'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/contatos' component={Contatos}/>
          <Route path='/endereco' component={Endereco}/>
          <Route path='/produtos' component={Produtos}/>
        </Switch>
      <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;
