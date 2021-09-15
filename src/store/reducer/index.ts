export const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated") || 'false'),
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  client_id: process.env.GITHUB_CLIENT_ID,
  redirect_url: process.env.GITHUB_REDIRECT_URL,
  proxy_url: process.env.GITHUB_PROXY_URL
};


export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user
      }
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }

    }
    default:
      return state;
  }
};