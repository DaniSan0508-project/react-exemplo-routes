import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Contatos from './pages/Contatos';
import Home from './pages/Home';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/contatos" component={Contatos} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
