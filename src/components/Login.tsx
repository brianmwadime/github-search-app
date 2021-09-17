import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../containers/App";
import LoginGithub from "react-login-github";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";

export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false, authToken: null });

  const onSuccess = (response: any) => {
    setData({
      ...data,
      isLoading: true,
      authToken: response.code,
    })
  };
  const onFailure = (response: any) => {
    setData({
      ...data,
      errorMessage: response,
      isLoading: false,
    })
  };

  useEffect(() => {
    
    if(data.authToken != null && !state.isAuthenticated) {

      const requestData = {
        code: data.authToken
      };

      const proxy_url = state.proxyUrl || "";
      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(result => {
          dispatch({
            type: "LOGIN",
            payload: { accessToken: result.data.access_token, isAuthenticated: true }
          });
        })
        .catch(error => {
          console.log("error", error);
          setData({
            ...data,
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <div className="login-container">
        <div>
          <LoginGithub clientId={state.clientId} className={"login-link"} buttonText={"Login to Github"} scope={"repo, user"}
          onSuccess={onSuccess}
          onFailure={onFailure}/>
        </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial;
  

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    transition: 0.3s;
    width: 25%;
    height: 45%;


    > .login-link {
      text-decoration: none;
      color: #fff;
      border: none;
      background: #5C5C5C;
      border-radius: 5px;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0 30px 0 30px;
      display: flex;
      font-weight: 700;
      font-size: 16px;
      align-items: center;          
      height: 50px;

      > span:nth-child(2) {
        margin-left: 5px;
      }
    }
  }
}

`;