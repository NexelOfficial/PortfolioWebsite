import ReactDOM from "react-dom";
import Home from "./Home";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export var toggles = {
    themesMenuShown: false,
    navigationMenuShown: false,
};

function App() {
    return (
        <Switch>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
);