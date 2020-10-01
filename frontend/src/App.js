import React, { useEffect, useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import theme from './app/theme';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Drawer from './features/navigation/Drawer';
import Navbar from './features/navigation/Navbar';
import links from './features/navigation/links';
import { useDispatch, useSelector } from 'react-redux';
import Login from './features/auth/Login';
import { setCurrentUser } from './features/auth/authSlice';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));

function App() {
    const classes = useStyles();
    const currentUser = useSelector(state => state.auth.currentUser);
    const [checkedLS, setCheckedLS] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!checkedLS) {
            const lsCurrentUser = JSON.parse(
                localStorage.getItem('currentUser')
            );
            if (lsCurrentUser) dispatch(setCurrentUser(lsCurrentUser));
            setCheckedLS(true);
        }
    });

    const renderAuthContent = classes => (
        <div className={classes.root}>
            <Navbar />
            <Drawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    {links
                        .filter(l => l.component)
                        .map(l => (
                            <Route exact path={l.path} key={l.path}>
                                <l.component />
                            </Route>
                        ))}
                    {links
                        .filter(l => l.children)
                        .map(l =>
                            l.children
                                .filter(subLink => subLink.component)
                                .map(sublink => (
                                    <Route exact path={sublink.path}>
                                        <sublink.component />
                                    </Route>
                                ))
                        )}
                    <Route exact path='/'>
                        Hello, world!
                    </Route>
                </Switch>
            </main>
        </div>
    );
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div>
                    {currentUser ? renderAuthContent(classes) : <Login />}
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
