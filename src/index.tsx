import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

ReactDOM.render(
    <Router>
        <div id="window-holder"></div>
        <App/>
    </Router>,
    document.getElementById("root")
);