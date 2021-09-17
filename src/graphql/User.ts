// ! , orderBy: {field: PUSHED_AT, direction: DESC}
// Cool users:
// mitchellh
// wojtekmaj
// motdotla

const repoQuery = (
  pageCount: any, 
  queryString: any, 
  paginationKeyword: any, 
  paginationString: any
) => {
  return {
    query: `
    {
      search(query: "${queryString}", type: USER, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        repositoryCount
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

export default repoQuery;