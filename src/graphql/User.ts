const userQuery = (
  pageCount: any, 
  queryString: any, 
  paginationKeyword: any, 
  paginationString: any
) => {
  return {
    query: `
    {
      search(query: "${queryString}", type: USER, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        userCount
        edges {
          cursor
          node {
            ... on User {
              id
              bio
              name
              url
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `,
  };
};

export default userQuery;