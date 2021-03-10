
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './Component/NotMatch/NotMatch';
import Detail from './Component/Detail/Detail';

function App() {
  return (
    <div>
      <Header></Header>
         <Router>
           <Switch>
             <Route path="/home">
                <Home/>
             </Route>
             <Route exact path="/">
            
               <Home/> 
             </Route>
              <Route path="/Detail/:idTeam">
                <Detail/>
              </Route>
              <Route path="*">
                <NotMatch/>
              </Route>
           </Switch>
         </Router>
    </div>
  );
}

export default App;
