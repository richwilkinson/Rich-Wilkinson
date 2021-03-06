import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Portfolio from "./pages/Portfolio.js";
//import Skills from "./pages/Skills.js";
import Home from "./pages/Home";
import "./App.css";


function App() {
  return (
    <Router>  
            {/* use switch if you want to add "*" path */}
            <Switch>
              {/* <Route exact path="/portfolio" component={Portfolio} /> */}
              {/* <Route exact path="/skills" component={Skills} />  */}
              <Route exact path={["/", "/home", "*"]} component={Home} />
            </Switch>  
    </Router>
  );
}

export default App;