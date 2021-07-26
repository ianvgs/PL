import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Usuario from './pages/Users';


function Routes ()
 {
    return(
        <BrowserRouter>        
        <Switch>                     
            
            <Route path="/" exact component={Login} />
            <Route path="/users" exact component={Usuario} />
          
        </Switch>
        </BrowserRouter>
    )

};

export default Routes;
