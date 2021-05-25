import React, { useEffect } from 'react'
import { Container, Grid, LinearProgress } from '@material-ui/core';

import { FeaturedPost } from '../../components/FeaturedPost';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsThunk } from '../../redux/actions';

const NewsPage = () => {
    const { news } = useSelector((state) => state.mainState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsThunk())
    }, []);

    if (!news.length) {
        return <LinearProgress />
    }

    return (
        <main>
            <Container fixed>
                <Grid container spacing={2}>
                    {news.map((post) => (
                        <FeaturedPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            url={post.url}
                            by={post.by}
                            time={post.time}
                            score={post.score} />
                    ))}
                </Grid>
            </Container>
        </main>
    )
}

export default NewsPage
