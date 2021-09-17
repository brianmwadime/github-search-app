

import { useContext, useEffect, useState } from "react";
import Styled from "styled-components";
import { AuthContext } from "../containers/App";
import avatar from "../images/avatar.png";

export default function UserProfile() {
  const { state, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const closeDropDown = () => setOpen(!open);

  useEffect(() => {
    
    
  }, [state, dispatch])

  return (
    <ProfileWrapper>
      <div className="dropdown text-end">
        <button onClick={closeDropDown} className="d-block btn btn-link btn-toggle" data-bs-toggle="dropdown" aria-expanded="true">
          <img src={avatar} alt="avatar" width="50" height="50" className="rounded-circle avatar"/> <span data-testid="name" className="name">John Doe</span>
        </button>
        <ul className={`${(open ? 'dropdown-menu text-small show' : 'dropdown-menu text-small')}`} style={{inset: '0px 0px auto auto',margin: '0px', transform: 'translate(5px, 60px)'}}>
          
          <li><button className="dropdown-item logout btn btn-link" onClick={() => dispatch({type: "LOGOUT"})} >Sign out</button></li>
        </ul>
      </div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = Styled.div`
  float:right;

  .text-end {
    text-align: right!important;
  }
  .dropdown, .dropend, .dropstart, .dropup {
    position: relative;
  }
  .avatar {
    margin-right:10px;
  }
  .dropdown-toggle {
    outline: 0;
    text-decoration: none;
    color: #1C1C1C;
  }
  .rounded-circle {
    border-radius: 50%!important;
  }
  .btn-toggle {
    display: inline-flex;
    color: #000000;
    text-decoration: none;
  }
  .name {
    margin-right: 10px;
  }
  .btn-toggle::after {
    width: 12px;
    vertical-align: middle;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,1' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    transition: transform .35s ease;
    transform-origin: .5em 50%;
  }

  .btn-toggle[aria-expanded="true"]::after {
    transform: rotate(90deg);
  }
  .d-block {
    display: block!important;
  }

  .avatar {
    vertical-align: middle;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: .5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(196, 203, 214, 0.3);
    border-radius: 3px;
  }

  .logout {
    color: #FF1733!important;
    font-size: 16px;
    font-weight: 400;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  .dropdown-menu::after {
    content:'';
    position: absolute;
    border-style: solid;
    border-width: 0 15px 15px;
    border-color:#FFFFFF transparent;
    display:block;
    width:0;
    z-index:1;
    right: 10px;
    top: -15px;
  }

  .dropdown-menu::before {
    content:'';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 16px;
    border-color: rgba(196, 203, 214, 0.3) transparent;
    display:block;
    width:0;
    z-index:0;
    right: 8px;
    top: -17px;
  }

  .dropdown-menu.show {
    display: block;
  }

`;