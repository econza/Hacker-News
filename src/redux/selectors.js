import { createSelector } from 'reselect'

export const newsSelector = (store) => store.mainState.news

export const getNewsByIdSelector = (selectedId) => createSelector(
    newsSelector,
    (news) => {
        const selectedNews = news.find((item) => item.id == selectedId)

        return selectedNews?.kids
    }
)
