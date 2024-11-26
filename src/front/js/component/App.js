
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import PostForm from './PostForm';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login setToken={setToken} />
                </Route>
                <Route path="/create">
                    <PostForm />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
