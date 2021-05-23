import { createSelector } from 'reselect'

export const newsSelector = (store) => store.mainState.news
export const commentsSelector = (store) => store.mainState.comments

export const getNewsByIdSelector = (selectedId) => createSelector(
    newsSelector,
    (news) => {
        const selectedNews = news.find((item) => item.id == selectedId)

        return selectedNews
    }
)

export const getCommentsByIdSelector = (selectedId) => createSelector(
    commentsSelector,
    (comments) => {
        const selectedComments = comments.find((item) => item.id == selectedId)

        return selectedComments?.kids
    }
)

export const getSubcommentsById = (commentId) => createSelector(
    (state) => state.mainState.subComments,
    (subComments) => subComments && subComments[commentId]
)
