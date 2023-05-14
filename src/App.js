import Navbar from './Components/Dashboard/Navbar';
import Aside from './Components/Dashboard/Aside';
import Home from './Components/Dashboard/Home';
import LogIn from './Components/Dashboard/LogIn';
import SignUp from './Components/Dashboard/SignUp';
import Auth from './Components/Dashboard/Auth';
import { Routes, Route } from 'react-router-dom';
import RouteConstants from './RoutesConstant';
import Footer from './Components/Dashboard/Footer';

function App() {
  return (
    <>
      <Aside></Aside>
      <Navbar></Navbar>
      <div className="wrapper">
        <Routes>
          <Route path={RouteConstants.logIn} element={<LogIn></LogIn>}></Route>
          <Route path={RouteConstants.signUp} element={<SignUp></SignUp>}></Route>
          <Route element={<Auth></Auth>}>
            <Route path={RouteConstants.dashboard} element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
