import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core' ;
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'

import Posts from './componenets/Posts/Posts.js'
import Form from './componenets/Form/Form.js';
import interact from './images/interact.jpg'
import useStyles from './styles'


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container>
            <AppBar className = {classes.appBar} position = "static" color="secondary">
                <Typography className={classes.heading} variant="h2" align="center" str><strong>interAct</strong></Typography>
                <img className={classes.image} src={interact} alt="interact" height="70" width="65" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    );
}

export default  App;