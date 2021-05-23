import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Link
} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { formatDate } from '../helpers/formatDate';



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

export const CommentsArea = ({ text, by, time }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={12}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component="subtitle2" variant="subtitle2">
                           by {by} {formatDate(time)} 
                        </Typography>
                        <br />
                        <Typography component="body2" variant="body2">
                            {text}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}
