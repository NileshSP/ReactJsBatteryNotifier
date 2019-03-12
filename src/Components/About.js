import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <div className="containerDiv animated fadeInRightBig">  
        <h1>About</h1>
        <section>
        <div className="containerContent" >
          <p>Battery notifying app
            <span> by - <a href='https://github.com/NileshSP/ReactJsBatteryNotifier'>github.com/NileshSP</a></span>
          </p>
        </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin:auto;
  min-height:100vh;
  background-color: #f76565;
  text-align:center;
  font-size:.8em;
  border: solid 0px blue;
  
  .containerDiv {
    padding:50px 15px 15px 15px;
    height:100%;
  }

  h1 {
    color: #fff;
    font-size: 30px;
    padding-top:30px;
    margin:0px;
  }

  section {
    color: #fff;
  }

  .containerContent {
    margin:auto;
    width:100%;
    height:100%;
    border: solid 0px red;
  }

  .containerContent > div {
    padding:45px 15px 15px 15px;
    border: solid 0px lightgreen;
  }

  .containerContent > p {
    padding:45px 15px 15px 15px;
  }

  .containerContent > p > span {

  }

  .containerContent > p > span > a {
    color:lightgreen;
  }

`;

export default About;
