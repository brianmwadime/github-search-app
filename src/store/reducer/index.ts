export const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated") || 'false'),
  accessToken: localStorage.getItem("accessToken") || null,
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  redirect_url: process.env.REACT_APP_GITHUB_REDIRECT_URL,
  proxy_url: process.env.REACT_APP_GITHUB_PROXY_URL,
  searchQuery: localStorage.getItem("searchQuery") || null,
};


export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("isAuthenticated", JSON.stringify(action.payload.isAuthenticated))
      localStorage.setItem("accessToken", action.payload.accessToken)
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
      }
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        user: null
      }

    }
    case "SET_SEARCH_QUERY": {
      localStorage.setItem("searchQuery", action.payload.searchQuery)
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      }

    }
    default:
      return state;
  }
};