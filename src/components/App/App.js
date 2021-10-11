import './App.css';
import { Route, Switch} from 'react-router-dom';
import Games from '../Games/Games';
import SavedGames from '../SavedGames/SavedGames';
import Nav from '../Navigation/Navigation';


function App() {
  return (
    <div className="page">
      <Nav />
      <Switch>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/saved-games">
          <SavedGames />
        </Route>
        <Route exact path="/">
          <Games />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
