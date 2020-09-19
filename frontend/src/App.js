import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './app/theme';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Drawer from './features/navigation/Drawer';
import Navbar from './features/navigation/Navbar';
import Login from './features/auth/Login';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Drawer />
                    <Navbar />
                    <Switch>
                        <Route exact path='/'>
                            Hello, world!
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
