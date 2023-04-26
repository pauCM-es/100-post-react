import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/componentes/Navbar/Navbar';
import './App.css';
import Sidebar from './shared/componentes/Sidebar/Sidebar';


function App (): JSX.Element {

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Outlet />
    </Fragment>
  );
}

export default App;
