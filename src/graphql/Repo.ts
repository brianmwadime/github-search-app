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
      search(query: "${queryString}", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
              licenseInfo {
                name
              }
              updatedAt
              nameWithOwner
              stargazerCount
              url
              primaryLanguage {
                name
              }
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