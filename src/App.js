import React from 'react';
import './App.css';
import SideBar from "./SideBar";
import Chat from "./Chat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <div className="app__body">
                <Router>
                    <SideBar/>
                    <Switch>
                        <Route path='/rooms/:roomId'>
                            <Chat/>
                        </Route>
                        <Route path='/'>
                            <h1>home page</h1>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
