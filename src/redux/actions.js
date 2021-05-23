export const GET_IDS = "@main/GET_IDS";
export const SET_NEWS = "@main/SET_NEWS";
export const SET_COMMENTS = "@main/SET_COMMENTS";

export const MAX_NEWS_COUNT = 10;
export const MAX_COMMENTS_COUNT = 10;

// @main

export const getIds = (ids) => {
    return {
        type: GET_IDS,
        ids
    };
}

export const setNews = (news) => {
    return {
        type: SET_NEWS,
        news
    }
}

export const setComments = (comments) => {
  return {
      type: SET_COMMENTS,
      comments
  }
}



export const getNewsThunk = () => async (dispatch) => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await res.json(); // [881238, 12838, 12838, 12838, 812388]
  
    if (!data?.length) {
      return "setError";
    }
  
    const filteredData = data.filter((_, id) => id < MAX_NEWS_COUNT);
  
    const news = await Promise.all(
      filteredData.map((id) =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      )
    ).then((results) => Promise.all(results.map((r) => r.json())));

    return dispatch(setNews(news));
  };

  export const getCommentsThunk = (kids) => async (dispatch) => {
    // [881238, 12838, 12838, 12838, 812388]
    const filteredKids = kids.filter((_, id) => id < MAX_COMMENTS_COUNT);
  
    const comments = await Promise.all(
      filteredKids.map((id) =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      )
    ).then((results) => Promise.all(results.map((r) => r.json())));

    console.log('comments', comments)

    return dispatch(setComments(comments));
  };


  export const getKidsCommentsThunk = (commentsKids) => async (dispatch) => {
    // [881238, 12838, 12838, 12838, 812388]
    const filteredKids = commentsKids.filter((_, id) => id < MAX_COMMENTS_COUNT);
  
    const comments = await Promise.all(
      filteredKids.map((id) =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      )
    ).then((results) => Promise.all(results.map((r) => r.json())));

    console.log('KidsComments', comments)

    return 123;
  };


export const getSingleNewsByIdThunk = (selectedId) => async (dispatch) => {
  fetch(`https://hacker-news.firebaseio.com/v0/item/${selectedId}.json?print=pretty`)
    .then(res => res.json())
    .then(data => dispatch(setNews([data])))
}
