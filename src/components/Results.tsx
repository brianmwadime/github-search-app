import React, { useState, useEffect, useContext, useCallback, Fragment } from "react";
import { Redirect, useHistory } from "react-router-dom";
import repoQuery from '../graphql/Repo';
import Styled from "styled-components";
import { AuthContext } from "../containers/App";
import logo from '../images/results_logo.png';
import UserProfile from "./UserProfile";
import SearchField from "./SearchField";
import RepoInfo from "./RepoCard";
import Pagination from "./Pagination";
import { numberFormatter } from "../utility";
import userQuery from "../graphql/User";
import UserCard from "./UserCard";


export default function Results() {
  const { state, dispatch } = useContext(AuthContext);
  const [repoList, setRepoList] = useState<any[]>([]);
  const [userList, setUserList] = useState<any[]>([]);
  const [totalRepoCount, setTotalRepoCount] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);
  const [tab, setTab] = useState("repos");

  const [startCursor, setStartCursor] = useState(null);
  const [endCursor, setEndCursor] = useState(null);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [paginationKeyword, setPaginationKeyword] = useState('first');
  const [paginationString, setPaginationString] = useState('');

  const [startUserCursor, setStartUserCursor] = useState(null);
  const [endUserCursor, setEndUserCursor] = useState(null);
  const [hasPreviousUserPage, setHasPreviousUserPage] = useState(false);
  const [hasNextUserPage, setHasNextUserPage] = useState(true);
  const [paginationUserKeyword, setPaginationUserKeyword] = useState('first');
  const [paginationUserString, setPaginationUserString] = useState('');
  const history = useHistory();

  const fetchRepos = useCallback(() => {
    const queryText = JSON.stringify(repoQuery(state.pageCount, state.searchQuery, paginationKeyword, paginationString));

    fetch(`${process.env.REACT_APP_GITHUB_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${state.accessToken}`
      },
      body: queryText,
    })
    .then(response => response.json())
    .then(data => {
      const viewer = data.data.viewer;
      const repos = data.data.search.edges;
      const total = data.data.search.repositoryCount;
      const start = data.data.search.pageInfo?.startCursor;
      const end = data.data.search.pageInfo?.endCursor;
      const next = data.data.search.pageInfo?.hasNextPage;
      const prev = data.data.search.pageInfo?.hasPreviousPage;

      setRepoList(repos);
      setTotalRepoCount(total);

      setStartCursor(start);
      setEndCursor(end);
      setHasNextPage(next);
      setHasPreviousPage(prev);
    })
    .catch(err => {
      console.log(err);
    }); 
  }, [paginationKeyword, paginationString, state]);

  const fetchUsers = useCallback(() => {
    const queryText = JSON.stringify(userQuery(state.pageCount, state.searchQuery, paginationUserKeyword, paginationUserString));

    fetch(`${process.env.REACT_APP_GITHUB_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${state.accessToken}`
      },
      body: queryText,
    })
    .then(response => response.json())
    .then(data => {
      const viewer = data.data.viewer;
      const users = data.data.search.edges;
      const total = data.data.search.userCount;
      const start = data.data.search.pageInfo?.startCursor;
      const end = data.data.search.pageInfo?.endCursor;
      const next = data.data.search.pageInfo?.hasNextPage;
      const prev = data.data.search.pageInfo?.hasPreviousPage;

      setUserList(users);
      setTotalUserCount(total);

      setStartUserCursor(start);
      setEndUserCursor(end);
      setHasNextUserPage(next);
      setHasPreviousUserPage(prev);
    })
    .catch(err => {
      console.log(err);
    }); 
  }, [paginationUserKeyword, paginationUserString, state.pageCount, state.searchQuery]);

  useEffect(() => {
    if (tab === "repos") {
      fetchRepos();
    } else if(tab === "users") {
      fetchUsers()
    }
    
    
  }, [tab, fetchRepos, fetchUsers, dispatch])

  const onChange = (value: string) => {
    const params = new URLSearchParams();
      
    params.append("search", value)
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: { searchQuery: value }
    });
      
    history.push(`results?${params.toString()}`)
    
  };

  if (!state.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <ResultsWrapper>
      <header>
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-md-between">
              <div className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img className="logo" src={logo} alt="app logo" />
              </div>
              <Fragment>
                <SearchField text={state.searchQuery ?? ''} onQueryChange={onChange} />
                <UserProfile />
              </Fragment>
            </div>
        </div>
      </header>
      <div className="container results-bg">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <div className="sidebar">
              <div className="d-flex flex-column flex-shrink-0 p-3">
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <a href="javascript:void(0)" className={tab === 'repos' ? "nav-link active" :  "nav-link"} aria-current="page" onClick={(e) => setTab("repos")}>
                      Repositories <span className="badge rounded-pill bg-count float-end">{numberFormatter(totalRepoCount)}</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className={tab === 'users' ? "nav-link active" :  "nav-link"} onClick={(e) => setTab("users")}>
                      Users <span className="badge rounded-pill bg-count float-end">{numberFormatter(totalUserCount)}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {tab === "repos" ? (
            <div className="col-md-7">
              <h5>{totalRepoCount} repository results</h5>
                { repoList && (
                <ul className='list-group list-group-flush'>
                  { repoList.map((repo) => (
                    <RepoInfo key={repo.node.id} repo={repo.node} url={repo.node.url} name={repo.node.nameWithOwner} description={repo.node.description} stargazerCount={repo.node.stargazerCount} id={repo.node.id} licenseInfo={repo.node.licenseInfo?.name} primaryLanguage={repo.node.primaryLanguage?.name} updatedAt={repo.node.updatedAt} />
                    ))}
                </ul>
              )}
          </div>
          ) : (
            <div className="col-md-7">
              <h5>{totalUserCount} users</h5>
                { userList && (
                  <ul className='list-group list-group-flush'>
                    { userList.map((user) => (
                      <UserCard key={user.node.id} url={user.node.url} name={user.node.name} bio={user.node.bio} id={user.node.id} email={user.node.email} />
                    ))}
                  </ul>
                )}
              </div>
          )}
        </div>

        <div className="row">
          <div className="col-md-3 offset-md-1">

          </div>
          <div className="col-md-7">
          {tab === "repos" ? (
            <Pagination
              start={startCursor} 
              end={endCursor} 
              next={hasNextPage} 
              previous={hasPreviousPage} 
              onPage={(myKeyword: string, myString: string) => {
                setPaginationKeyword(myKeyword);
                setPaginationString(myString);
            }} />
          ) : (
            <Pagination
              start={startUserCursor} 
              end={endUserCursor} 
              next={hasNextUserPage} 
              previous={hasPreviousUserPage} 
              onPage={(myKeyword: string, myString: string) => {
                setPaginationUserKeyword(myKeyword);
                setPaginationUserString(myString);
            }} />
          )}
            
          </div>
        </div>

        

      </div>
      
    </ResultsWrapper>
  );
};

const ResultsWrapper = Styled.div`
  background: #FAFBFC;
  header {
    height: 80px;
    background: white;
    margin-bottom: 30px;
    box-shadow: 0px 0px 5px rgba(196, 203, 214, 0.7);
    > container {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
  .logo {
    width: auto;
  }

  .bg-count {
    background-color: #DCDCDF;
    color: #5C5C5C;
  }

  .pagination {
    justify-content: flex-end;
  }

  .nav-item {
    font-size: 14px;
    font-weight: 400;
    > .nav-link {
      color: #5C5C5C;
      &.active {
        background-color: #F7F7F8;
      }
    }
  }

  .results-bg {
    min-height: 100vh;
  }

  .sidebar {
    background: white;
    width: 280px;
    box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
    border-radius: 3px;
    height: fit-content;
    position: fixed;
    top: 110px;
    z-index: 1;
  }
 
  .list-group-item {
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 6px 58px rgba(196, 203, 214, 0.1)!important;
    border-radius: 3px;
    > div {
      a {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
      p {
        
        font-weight: 400;
        color: #91929E;
        &.description {
          font-size: 14px;
        }
        &.small {
          margin: 0;
          font-size: 12px;
        }
      }
    }
  }

`;