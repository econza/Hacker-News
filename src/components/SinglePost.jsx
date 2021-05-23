import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { formatDate } from "../helpers/formatDate"
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent
} from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { commentsSelector } from '../redux/selectors';
import { CommentsArea } from './CommentsArea';



const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export const SinglePost = ({ title, url, id, by, time, score }) => {
    const classes = useStyles();
    const comments = useSelector(commentsSelector)

    console.log("О0О0О", title)
    return (
        <Grid item xs={12} md={12}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {score} points by {by} {formatDate(time)}
                        </Typography>

                        {comments.map((comments) => (
                            <CommentsArea
                                key={comments.id}
                                id={comments.id}
                                text={comments.text}
                                by={comments.by}
                                time={comments.time}
                            />

                        ))}
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}
