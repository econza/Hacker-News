import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Link,
    Divider
} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { getKidsCommentsThunk } from '../redux/actions'
import { formatDate } from '../helpers/formatDate';
import { getSubcommentsById } from '../redux/selectors';



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

export const SingleComment = ({ text, by, time, id, kids }) => {
    const subComments = useSelector(getSubcommentsById(id))
    const classes = useStyles();

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (id && kids) {
            dispatch(getKidsCommentsThunk(id, kids))
        }
    }, [id, kids])

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
                        {subComments?.length && subComments.map((item) => (
                            <div style={{ padding: "10px", display: "flex", flexDirection: "column"}}>
                                <div>
                                    <strong>{item.by}</strong>
                                </div>
                                    <div>
                                    {item.text}
                                </div>
                            </div>
                        ))}
                        
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}
