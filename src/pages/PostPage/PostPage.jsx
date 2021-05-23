import {
	Container,
	Grid,
	LinearProgress,
	Typography,
	Card,
	CardActionArea,
	CardContent,
	makeStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsThunk, getSingleNewsByIdThunk, getKidscommentThunk } from '../../redux/actions';
import { getcommentsByIdSelector, getNewsByIdSelector, newsSelector, commentsSelector } from '../../redux/selectors';
import { SingleComment } from '../../components/SingleComment';
import { formatDate } from "../../helpers/formatDate"

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

const PostPage = () => {
	const { id: selectedId } = useParams();
	const news = useSelector(newsSelector);
	const selectedNews = useSelector(getNewsByIdSelector(selectedId));
    const comments = useSelector(commentsSelector)

	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!news.length) {
			dispatch(getSingleNewsByIdThunk(selectedId));
		}
	}, [news]);

	useEffect(() => {
		if (selectedNews?.kids) {
			dispatch(getCommentsThunk(selectedNews?.kids));
		}
	}, [selectedNews?.kids]);

	if (!selectedId) {
		return <Redirect to="/news" />;
	}

	if (!news.length && !selectedNews) {
		return <LinearProgress />;
	}

	return (
		<div>
			<main>
				<Container fixed>
					<Grid container spacing={4}>
						<Grid item xs={12} md={12}>
							<Card className={classes.card}>
								<div className={classes.cardDetails}>
									<CardContent>
										<Typography component="h2" variant="h5">
											{selectedNews.title}
										</Typography>
										<Typography variant="subtitle1" color="textSecondary">
											{selectedNews?.score} points by {selectedNews?.by} {formatDate(selectedNews?.time)}
										</Typography>

										{comments.map((comment) => (
											<SingleComment
												key={comment.id}
												id={comment.id}
												text={comment.text}
												by={comment.by}
												time={comment.time}
                                                kids={comment.kids}
											/>
										))}
									</CardContent>
								</div>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	);
};

export default PostPage;
