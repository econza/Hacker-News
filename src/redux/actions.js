export const GET_IDS = "@main/GET_IDS";
export const SET_NEWS = "@main/SET_NEWS";

export const MAX_NEWS_COUNT = 100;

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

  export const getCommentsThunk = () => async (dispatch) => {
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
