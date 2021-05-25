import React, { useEffect } from 'react';
import {
    Typography,
    Grid,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { getKidsCommentsThunk } from '../redux/actions'
import { formatDate } from '../helpers/formatDate';
import { getSubcommentsById } from '../redux/selectors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const SingleComment = ({ text, by, time, id, kids }) => {
    const subComments = useSelector(getSubcommentsById(id))
    const dispatch = useDispatch()

    useEffect(() => {
        if (id && kids) {
            dispatch(getKidsCommentsThunk(id, kids))
        }
    }, [id, kids])

    return (
        <Grid item xs={12} md={12}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box>
                        <Typography variant="subtitle2">
                            by {by} {formatDate(time)}
                        </Typography>
                        <br></br>
                        <Typography variant="body2">
                            {text}
                        </Typography>
                    </Box>
                </AccordionSummary>
                {subComments?.length && subComments.map((item) => (
                    <AccordionDetails style={{ padding: "15px", display: "flex", flexDirection: "column" }}>
                        <Typography variant="subtitle2" style={{ marginLeft: "15px"}}>- by {item.by}</Typography>
                        <Typography variant="body2" style={{ marginLeft: "20px"}}>{item.text}</Typography>
                    </AccordionDetails>
                ))}
            </Accordion>
        </Grid>
    )
}
