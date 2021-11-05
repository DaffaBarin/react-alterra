import Home from "./components/Home";
import "./App.css"
import Profile from "./components/Profile"
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className =  "App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/profile/:name" component={Profile} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
