import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import {store} from "./config/store";
import {history} from "./config/history";

import App from "./Components/App";
import TagPage from "./Components/TagPage";

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path="/#:id" component={TagPage}/>
        </Switch>
    </ConnectedRouter>
</Provider>
    ,document.getElementById("app"));