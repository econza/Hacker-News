import { Container, Grid, LinearProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsThunk, getSingleNewsByIdThunk } from '../../redux/actions';
import { getNewsByIdSelector, newsSelector } from '../../redux/selectors';
import { SinglePost } from '../../components/SinglePost';

const PostPage = (props) => {
    const { id: selectedId } = useParams()
    const news = useSelector(newsSelector)
    const kids = useSelector(getNewsByIdSelector(selectedId))
    const dispatch = useDispatch()

    useEffect(() => {
        if (!news.length) {
            dispatch(getSingleNewsByIdThunk(selectedId))
        }
    }, [news])

    useEffect(() => {
        if (kids) {
            dispatch(getCommentsThunk(kids))
        }
    }, [kids]);

    if (!selectedId) {
        return <Redirect to="/news" />
    }

    if (!news.length) {
        return <LinearProgress />
    }

    return (
        <div>
            <main>
                <Container fixed>
                    <Grid container spacing={4}>
                        <SinglePost
                            key={props.id}
                            id={props.id}
                            title={props.title}
                            url={props.url}
                            by={props.by}
                            time={props.time}
                            score={props.score} />
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default PostPage;
