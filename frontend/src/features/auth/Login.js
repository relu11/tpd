import React, { useState } from 'react';
import {
    Button,
    Container,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from './authSlice';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(4),
        textAlign: 'center',
    },
    formField: {
        marginTop: theme.spacing(2),
        display: 'block',
    },
    title: {
        marginBottom: theme.spacing(6),
    },
}));

function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector(state => state.auth.error);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postLogin({ email, password }));
    };

    const renderError = () => {
        if (error) {
            return <Typography color='error'>{error}</Typography>;
        }
    };

    return (
        <Container maxWidth='sm' component={Paper} className={classes.root}>
            <Typography variant='h4' className={classes.title}>
                Login to ITWorx
            </Typography>
            {renderError()}
            <form onSubmit={handleSubmit}>
                <TextField
                    variant='outlined'
                    label='Email'
                    type='email'
                    fullWidth
                    className={classes.formField}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <TextField
                    variant='outlined'
                    label='Password'
                    type='password'
                    fullWidth
                    className={classes.formField}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button
                    variant='outlined'
                    color='secondary'
                    className={classes.formField}
                    type='submit'
                >
                    Login
                </Button>
            </form>
        </Container>
    );
}

export default Login;
