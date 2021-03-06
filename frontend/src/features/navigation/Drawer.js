import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Drawer as MaterialDarawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import useDrawerStyles from './drawerStyles';
import { closeDrawer, openDrawer } from './navigationSlice';
import links from './links';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

function Drawer() {
    const classes = useDrawerStyles();
    const open = useSelector(state => state.nav.drawerOpen);
    const dispatch = useDispatch();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isCustomDrawerAction = useSelector(
        state => state.nav.customDrawerAction
    );

    useEffect(() => {
        if (!isCustomDrawerAction) {
            if (isSmallScreen && open) {
                dispatch(closeDrawer());
            } else if (!isSmallScreen && !open) {
                dispatch(openDrawer());
            }
        }
    });

    return (
        <MaterialDarawer
            variant='permanent'
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <Link to='/'>
                    <img src='/logo-wide.png' alt='itworx logo' />
                </Link>
            </div>
            <Divider />
            <List>
                {links
                    .filter(l => l.inDrawer)
                    .map(l => (
                        <Accordion
                            key={l.id}
                            className={classes.accordion}
                            {...(l.children
                                ? {}
                                : {
                                      expanded: false,
                                      component: Link,
                                      to: l.path,
                                  })}
                        >
                            <AccordionSummary
                                className={classes.accordionSummary}
                                aria-controls='panel1a-content'
                            >
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon
                                        className={classes.listItemIcon}
                                    >
                                        {l.icon ? (
                                            <l.icon color='secondary' />
                                        ) : (
                                            <InboxIcon color='secondary' />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={l.title} />
                                </ListItem>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {l.children &&
                                        l.children.map(subLink => (
                                            <div>
                                                <Accordion
                                                    key={l.id}
                                                    className={
                                                        classes.accordion
                                                    }
                                                    {...(subLink.children
                                                        ? {}
                                                        : {
                                                              expanded: false,
                                                              component: Link,
                                                              to: subLink.path,
                                                          })}
                                                >
                                                    <AccordionSummary
                                                        className={
                                                            classes.accordionSummary
                                                        }
                                                        aria-controls='panel1a-content'
                                                    >
                                                        <ListItem
                                                            className={
                                                                classes.listItem
                                                            }
                                                        >
                                                            <ListItemIcon
                                                                className={
                                                                    classes.listItemIcon
                                                                }
                                                            >
                                                                {subLink.icon ? (
                                                                    <subLink.icon color='secondary' />
                                                                ) : (
                                                                    <InboxIcon color='secondary' />
                                                                )}
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={
                                                                    subLink.title
                                                                }
                                                            />
                                                        </ListItem>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <List>
                                                            {subLink.children &&
                                                                subLink.children.map(
                                                                    subsubLink => (
                                                                        <ListItem
                                                                            key={
                                                                                subsubLink
                                                                            }
                                                                            className={
                                                                                classes.listItem
                                                                            }
                                                                            component={
                                                                                Link
                                                                            }
                                                                            to={
                                                                                subsubLink.path
                                                                            }
                                                                        >
                                                                            <ListItemIcon
                                                                                className={
                                                                                    classes.listItemIcon
                                                                                }
                                                                            >
                                                                                {l.icon ? (
                                                                                    <subsubLink.icon color='secondary' />
                                                                                ) : (
                                                                                    <InboxIcon color='secondary' />
                                                                                )}
                                                                            </ListItemIcon>
                                                                            <ListItemText
                                                                                primary={
                                                                                    subsubLink.title
                                                                                }
                                                                            />
                                                                        </ListItem>
                                                                    )
                                                                )}
                                                        </List>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </List>
        </MaterialDarawer>
    );
}

export default Drawer;
