import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Components from "./pages/Components";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/components" exact component={Components} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
