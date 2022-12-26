import { Route, Switch} from 'react-router-dom';
import './App.css';
import MainNavigation from './components/MainNavbar/MainNavigation';
import SubNavigation from './components/SubNavbar/SubNavigation';
import CurrentTime from './pages/CurrentTime';

function App() {
  return (<div>
    <MainNavigation></MainNavigation>
    <SubNavigation></SubNavigation>
    <Switch>
      <Route path='/'>
        <CurrentTime></CurrentTime>
      </Route>
      </Switch>
 
  </div>
  );
}

export default App;
