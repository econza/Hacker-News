import {
	Grid,
	LinearProgress,
	Typography,
	Card,
	CardContent,
	makeStyles
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsThunk, getSingleNewsByIdThunk } from '../../redux/actions';
import { getNewsByIdSelector, newsSelector, commentsSelector } from '../../redux/selectors';
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
		<Grid container spacing={1}>
			<Grid item xs={12} md={12}>
				<Card className={classes.card}>

					<CardContent>
						<Typography component="h2" variant="h5">
							{selectedNews.title}
						</Typography>
						
						<Typography variant="subtitle1" color="textSecondary">
							{selectedNews?.score} points by {selectedNews?.by} {formatDate(selectedNews?.time)}
						</Typography>
					</CardContent>
				</Card>
			</Grid>

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
		</Grid>
	);
};

export default PostPage;
