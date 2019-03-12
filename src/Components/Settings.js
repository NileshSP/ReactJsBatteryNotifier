import React from "react";
import styled from "styled-components";
import Utils from "./Utils";

class Settings extends React.Component {
  userModel = null;
  userState = null;

  constructor(props) {
    super(props);
    this.state = {
      userState : this.props.Model.state
    }
    this.userModel = this.props.Model;
    this.userState = this.props.Model.state;
    console.log('Settings - ' + Object.getOwnPropertyNames(this.props.Model));
    console.log('User state - ' + this.userState);
  }

  storeChangesLocally = async (batteryOptions) => {
    this.setState({
      userState: this.userModel.setUserState(
        this.userState = await Utils.setBatteryState(batteryOptions, this.userState)
      )
    },async () => {
      await Utils.storeItemsLocally(Utils.getDbContext(), this.userState);
      console.log('changes persisted locally');  
    });
  }

  render() {
    return (
      <Wrapper>
        <div className="containerDiv">  
          <h1 className=" animated fadeInUpBig" >Settings</h1>
          <section className=" animated fadeInUpBig">
            <div className="containerContent" >
              <div className="labelTxt" >Notify @</div>
              <div className="" >
                <select defaultValue={Utils.getBatteryStateText(this.userState.notifyBatteryState)} 
                  className="selectOptions" 
                  onChange={(e => {
                    // this.setState({
                    //   userState: this.props.Model.setUserState(
                    //     this.userState = {
                    //       ...this.userState,
                    //       notifyBatteryState: e.target.value === 'Charging' ? true : false,
                    //       notificationSent : false,
                    //     }
                    //   )
                    // },);
                    this.storeChangesLocally({ 
                      notifyBatteryState: e.target.value === 'Charging' ? true : false,
                      notificationSent : false 
                    });
                    console.log(e.target.value);
                  })} 
                  >
                  <option value="Charging" >Charging</option>
                  <option value="Discharging" >Discharging</option>
                </select>
              </div>
              <div className="labelTxt" >with</div>
              <div className="" >
                <select defaultValue={this.userState.notifyBatteryLevel} 
                  className="selectOptions" 
                  onChange={(e => {
                    // this.setState({
                    //   userState: this.props.Model.setUserState(
                    //     this.userState = {
                    //       ...this.userState,
                    //       notifyBatteryLevel: parseInt(e.target.value),
                    //       notificationSent : false,
                    //     }
                    //   )
                    // },);
                    this.storeChangesLocally({ 
                      notifyBatteryLevel: parseInt(e.target.value),
                      notificationSent : false 
                    });
                    console.log(e.target.value);
                  })} 
                >
                {
                  [...Array(100).keys()].map(val => { 
                    val++;
                    return <option className="optionItem" key={val} value={val} >{val}</option> 
                  })
                }
                </select>
              </div>
              <div className="labelTxt" >%</div>
            </div>

          </section>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin:auto;
  min-height:100vh;
  background-color: #00bfff;

  .containerDiv {
    height:100%;
    margin:auto;
    text-align:center;
    padding:50px 15px 15px 15px;
    border: solid 0px red;
  }

  h1 {
    color: #fff;
    font-size: 30px;
    padding-top:30px;
    margin:0px;
  }

  section {
    color: #fff;
    padding-top:50px;
  }

  .containerContent {
    margin:auto;
    padding:0px;
    display: flex;
    flex-direction:columns;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    border: solid 0px red;
  }

  .containerContent > div {
    margin:8px;
    padding:12px;
    width:240px;
    border: solid 0px yellow;
    text-align:center;
    font-size: calc(8px + 4vmin);
  }

  .labelTxt {
    color: lightgreen;
  }

  .selectOptions {
    width:100%;
    font-size: calc(8px + 3vmin);
    background-color:transparent;
    border:0px;
    text-align:center;
    text-align-last: center;
  }

  .optionItem {
    background-color:transparent;
    text-align:center;    
  }
`;

export default Settings;
