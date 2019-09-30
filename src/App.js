import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import MappedRoutes from './components/MappedRoutes';
import routes from './data/routes';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MappedRoutes routes = {routes}/>
    </div>
  );
}

export default App;