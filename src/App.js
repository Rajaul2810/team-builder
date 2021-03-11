
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotMatch from './Component/NotMatch/NotMatch';
import Detail from './Component/Detail/Detail';

function App() {
  return (
    <div>
     
         <Router>
           <Switch>
             <Route path="/home">
             <Header></Header>
                <Home/>
             </Route>
             <Route exact path="/">
             <Header></Header>
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
