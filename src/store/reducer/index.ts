export const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated") || 'false'),
  accessToken: localStorage.getItem("accessToken") || null,
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
  redirectUrl: process.env.REACT_APP_GITHUB_REDIRECT_URL,
  proxyUrl: process.env.REACT_APP_GITHUB_PROXY_URL,
  searchQuery: localStorage.getItem("searchQuery") || null,
  pageCount: 10
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