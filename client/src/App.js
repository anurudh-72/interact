import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core' ;
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'

import Posts from './componenets/Posts/Posts.js'
import Form from './componenets/Form/Form.js';
import interact from './images/interact.jpg'
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles(); 
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className = {classes.appBar} position = "static" style={{
                background:'rgb(2, 15, 92'
            }}>
                <Typography className={classes.heading} variant="h2" align="center" style={{
                    fontFamily:'algerian', color:'rgb(170, 246, 255)'
                }}>inteReact
                <img className={classes.image} src={interact} alt="interact" height="42" width="60" align="space-between" /></Typography>
            </AppBar>
            <Grow in>
                <Container>
                {/* direction="column-reverse" */}
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    );
}

export default  App;