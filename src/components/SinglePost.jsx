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

    return (
        <Grid item xs={12} md={12}>
            <CardActionArea component="a" href={`/news/${id}`}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {score} points by {by} {formatDate(time)}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
}
