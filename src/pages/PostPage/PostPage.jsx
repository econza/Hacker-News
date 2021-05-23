import { Container, Grid, LinearProgress, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsThunk, getSingleNewsByIdThunk, getKidsCommentsThunk } from '../../redux/actions';
import { getCommentsByIdSelector, getNewsByIdSelector, newsSelector } from '../../redux/selectors';
import { SinglePost } from '../../components/SinglePost';

const PostPage = () => {
    const { id: selectedId } = useParams()
    const news = useSelector(newsSelector)
    const kids = useSelector(getNewsByIdSelector(selectedId))
    const commentsKids = useSelector(getCommentsByIdSelector(selectedId))
    console.log('commentsKids', commentsKids)

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

    useEffect(() => {
        if (commentsKids) {
            dispatch(getKidsCommentsThunk(commentsKids))
        }
    }, [commentsKids]);

    if (!selectedId) {
        return <Redirect to="/news" />
    }

    if (!news.length) {
        return <LinearProgress />
    }
    console.log("=====>", news)
    return (
        <div>
            <main>
                <Container fixed>
                    <Grid container spacing={4}>                            
                        <SinglePost
                            key={news.id}
                            id={news.id}
                            title={news.title}
                            url={news.url}
                            by={news.by}
                            time={news.time}
                            score={news.score} />
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default PostPage;
