import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BaseRoute, RouteToString } from './ui/routes/paths';
import { Home } from './screens/home/Home';
import { Size } from './screens/size/Size';
import { Toppings } from './screens/toppings/Toppins';
import { Crust } from './screens/crust/Crust';

// TODO: put routes on inside to avoid unnecessart reps
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RouteToString({ route: BaseRoute.HOME })} exact component={Home}/>
        <Route path={RouteToString({ route: BaseRoute.SIZE })} exact component={Size}/>
        <Route path={RouteToString({ route: BaseRoute.TOPPINGS })} exact component={Toppings}/>
        <Route path={RouteToString({ route: BaseRoute.CRUST })} exact component={Crust}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
