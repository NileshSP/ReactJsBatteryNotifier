import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/ReactJsBatteryNotifier" >Home</Link>
        </li>
        <li>
          <Link to="/ReactJsBatteryNotifier/settings" >Settings</Link>
        </li>
        <li>
          <Link to="/ReactJsBatteryNotifier/about" >About</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 
  margin: 0;
  padding:0px 0px 0px 0px;
  height: 5%;
  display: grid;
  place-items: center;
  background-color: transparent;
  border:solid 0px yellow;

  ul {
    margin: 0;
    padding:5px 3px 5px 3px;
    border:solid 0px yellow;
    border-radius:5px;
    background-color:rgb(255,255,255,0.8);
    transform: scale(1);
    transition:transform ease-in-out 250;
  }

  li {
    display: inline-block;
    padding:2px;
    transform:scale(1);
    transition:transform ease-in-out 250;

    a {
      background-color: lightgreen;
      padding:2px 3px 2px 3px;
      text-decoration: none;
      font-size: 1em;
      color: black;
      font-weight:bold;
      border-radius:4px;
    }
  }

  ul:hover, li:hover {
    transform:scale(1.070);
  }
`;

export default Header;
