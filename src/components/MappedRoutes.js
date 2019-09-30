import React from 'react';
import { Route,Switch } from 'react-router-dom';

const MappedRoutes = ({routes}) => {
  return(
    <Switch>
      {
        routes.map((route,i)=>
          <Route 
            exact = {route.exact}
            path = {route.path} 
            component = {route.component} 
            key = {i} 
          />
        )
      }
    </Switch>
  )
}

export default MappedRoutes;