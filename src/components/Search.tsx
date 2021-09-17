import React, { useState, useContext, Fragment } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../containers/App";
import search from '../images/search.png';
import logo from '../images/search_logo.png';
import UserProfile from "./UserProfile";

export default function Search() {
  const { state, dispatch } = useContext(AuthContext);
  const [text, setText] = useState('');
  const history = useHistory();

  if (!state.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text === '') {
      
    } else {
      const params = new URLSearchParams();
      if (text) {
        params.append("search", text)
        dispatch({
          type: "SET_SEARCH_QUERY",
          payload: { searchQuery: text }
        });
      } else {
        params.delete("search")
      }
      history.push(`results?${params.toString()}`)
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  return (
    <Wrapper>
      <header>
        <div className="container">
            <div className="d-flex flex-row-reverse">
              <Fragment>
                <UserProfile />
              </Fragment>
            </div>
        </div>
      </header>
      
      <section className="login-container">
        <div>
          <img className="logo" src={logo} alt="github logo" />
          <form onSubmit={onSubmit} className='form'>
            <div className='input-field'>
              <input
                className='search'
                type='text'
                name='text'
                value={text}
                onChange={onChange} />
                <i className="search-icon"><img src={search} alt="search" /></i>
            </div>
            <button
              type='submit'
              className='btn btn-block'>Search Github</button>
          </form>
      </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = Styled.section`
input:focus, textarea:focus, select:focus{
  outline: none;
}
header {
  height:80px;
}
.navbar {
  height: 80px;
  position: relative;
  padding: 0 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
  >.navbar-brand {
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
  }
}
.login-container {
  margin-top:110px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: Arial;
  

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    transition: 0.3s;
    width: 25%;
    height: 45%;

    > .logo {
      margin-bottom: 20px;8
    }


    > .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;  
        > .input-field {
          position: relative;
          > input.search {
            border-radius: 100px;
            border: 1px solid #C4C4C4;
            display: flex;
            width: 514px;
            padding-left: 16px;
            padding-right: 50px;
            font-weight: 700;
            font-size: 16px;
            align-items: center;
              height: 50px;
            }

          i {
              position: absolute;
              top: 0px;
              padding: 13px 20px;
              right: 0px;
          }
        }

        > .btn {
          text-decoration: none;
          margin-top:30px;
          color: #fff;
          border: none;
          cursor: pointer;
          background: #5C5C5C;
          border-radius: 5px;
          text-transform: uppercase;
          padding: 0 30px 0 30px;
                 
          height: 40px;
    
          > span:nth-child(2) {
            margin-left: 5px;
          }
        }
    
    }
  }
}

`;