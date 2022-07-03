import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'

import useStyles from './styles'


const Post = ({ post }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} typographyColor="red">
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => { }}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2" style={{
                    fontSize:'medium', fontFamily:'cursive'
                }}>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2" >{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    fontSize:'medium', fontFamily:'arial'
                }}>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="medium" style={{color:'green'}} onClick={() => {}}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="medium" color="secondary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
}
export default Post