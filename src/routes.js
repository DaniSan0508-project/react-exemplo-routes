import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Contatos from './pages/Contatos';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Erro from './pages/Erro';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/contatos" component={Contatos} exact/>
                <Route path="/produtos/:id" component={Produtos}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
