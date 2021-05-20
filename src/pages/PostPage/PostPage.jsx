import { Container, Grid, LinearProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsThunk } from '../../redux/actions';
import { SinglePost } from '../../components/SinglePost';

const PostPage = (props) => {
    const { id: paramId } = useParams()
    const { news } = useSelector((state) => state.mainState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsThunk())
    }, []);

    if (!paramId) {
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
