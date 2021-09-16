export const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated") || 'false'),
  accessToken: JSON.parse(localStorage.getItem("accessToken") || '{}'),
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  redirect_url: process.env.REACT_APP_GITHUB_REDIRECT_URL,
  proxy_url: process.env.REACT_APP_GITHUB_PROXY_URL
};


export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("isAuthenticated", JSON.stringify(action.payload.isAuthenticated))
      localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken))
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
    default:
      return state;
  }
};