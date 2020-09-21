import React from 'react';
import clsx from 'clsx';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useDrawerStyles from './drawerStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawerOpen } from './navigationSlice';

function Navbar() {
    const classes = useDrawerStyles();
    const dispatch = useDispatch();
    const open = useSelector(state => state.nav.drawerOpen)
    const toggleDrawer = () => dispatch(toggleDrawerOpen());
    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                color="inherit"
            >
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
