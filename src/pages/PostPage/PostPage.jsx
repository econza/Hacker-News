import {
	Grid,
	LinearProgress,
	Typography,
	Card,
	CardContent,
	makeStyles,
	IconButton
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsThunk, getSingleNewsByIdThunk } from '../../redux/actions';
import { getNewsByIdSelector, newsSelector, commentsSelector } from '../../redux/selectors';
import { SingleComment } from '../../components/SingleComment';
import { formatDate } from "../../helpers/formatDate";
import RefreshIcon from '@material-ui/icons/Refresh';

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

const REQUEST_DELAY = 60 * 1000;

const useCommentsRefresher = (kids) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (kids?.length) {
			dispatch(getCommentsThunk(kids));
			const request = setInterval(() => dispatch(getCommentsThunk(kids)), [REQUEST_DELAY]);

			return () => clearInterval(request)
		}
	}, [kids]);
}

const PostPage = () => {
	const { id: selectedId } = useParams();
	const news = useSelector(newsSelector);
	const selectedNews = useSelector(getNewsByIdSelector(selectedId));
	const comments = useSelector(commentsSelector)

	const classes = useStyles();
	const dispatch = useDispatch();

	useCommentsRefresher(selectedNews?.kids)

	useEffect(() => {
		if (!news.length) {
			dispatch(getSingleNewsByIdThunk(selectedId));
		}
	}, [news]);

	const handleRefresh = () => {
		dispatch(getCommentsThunk(selectedNews?.kids))
	}

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
					<IconButton onClick={() => handleRefresh()}>
						<RefreshIcon />
					</IconButton>
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
