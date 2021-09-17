
const userProfileQuery = (username: string) => {
  return {
    query: `
    {
      user(login: ${username}) {
        name
        email
        bio
        id
        avatarUrl
      }
    }
    `
  };
};
  
export default userProfileQuery;