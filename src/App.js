import Main from "./components/homepage/Main";
import PostDetail from './components/detail/PostDetail';
import "./index.css";

// React route
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="heading__title">Blog posts assignment</h1>
        <p className="heading__credits">Coded and Desiged by <a href="https://github.com/AsadHassanFarooqi" className="heading__link">Ahfarooqi</a></p>
      </header>
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route  path="/post/detail/:id">
              <PostDetail />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
