import React from 'react';
import styled from "styled-components";
import logo from "../ic_launcher.png";
import Utils from './Utils';

class Home extends React.Component {

  timerInterval = 0;
  userModel = null;
  userState = null;
  workerProcess = null;
  swRegistration = null;

  constructor(props) {
    super(props);
    this.state = {
      userState : this.props.Model.state,
      toastMessage: '',
      toastClassName: ''
    }
    this.userModel = this.props.Model;
    console.log('Home - ', this.props.Model);
    this.userState = this.props.Model.state;
    console.log('User state - ', this.userState);
    this.swRegistration = navigator.serviceWorker.ready;
  }

  async onWorkerMessage(ev) {
    switch (ev.data.cmd) {
      case 'log':
        console.log(ev.data.data)
        break;
      case 'intervallog':
        console.log('Worker Interval at:', Utils.getBatteryTimeText(ev.data.data))
        break;
      case 'stop':
          this.setBatteryState({workerProcess: { instance: this.workerProcess, started: false }})
          this.callNotification();
          console.log(ev.data.data)
      break;
      default:
        console.log('Unknown worker message received', ev.data)
    };
  }

  setBatteryState = async (batteryOptions) => {
    this.setState({
      userState: this.userModel.setUserState(
        this.userState = await Utils.setBatteryState(batteryOptions, this.userState)
      )
    },() => { 
        if(this.workerProcess) 
          this.workerProcess.postMessage({'cmd': 'usermodelstate', 'msg': JSON.parse(JSON.stringify(this.userState)) })
      }
    );
  }

  getBatteryAPI = async () => await navigator.getBattery().then(battery => this.setBatteryState({ batteryLevel: battery.level, batteryState: battery.charging, currBatteryTime: Date.now(), }));

  getBatteryTimeText = (time) => Utils.getBatteryTimeText(time)

  registerNotificationwithAccess = async () => {
    console.log('Notification access called')
    console.log('SW registrations : ', await navigator.serviceWorker.getRegistrations())
    console.log('SW registration : ', this.swRegistration)
    if(this.swRegistration === undefined || (await navigator.serviceWorker.getRegistrations()).length === 0){
      await this.displayToastMessage({toastMessage : [<span>Local Notification capability currently not available - { this.getBatteryTimeText(this.userState.currBatteryTime) } </span>] }, 10000);
      console.log('Notification API currently not available')
    }
    else {
      if (Notification.permission !== "granted") {
        this.displayToastMessage({ toastMessage: [<span>Kindly grant notification access for this app to work</span>] })
        Notification.requestPermission(function (status) {
          if (Notification.permission !== status) {
            Notification.permission = status;
          }
        }).then(status => {
          console.log('Notification Status : ',status)
          if(status === 'granted') {
            this.displayToastMessage({ toastMessage: '' })
          }             
        });
      }
      else {
        console.log('Notification access is already granted')
      }
    }
  }

  callNotification = async () => {
    const notificationBody = Utils.getBatteryStateText(this.userState.notifyBatteryState) + ' with ' + this.userState.notifyBatteryLevel.toString() + '% is now complete.';
    const result = await Utils.showNotification(this.props.AppTitle, logo, notificationBody);
    if (result) { 
      this.setBatteryState({ notificationSent : true });
      await this.displayToastMessage({toastMessage : [<span>Notification posted @ { this.getBatteryTimeText(this.userState.currBatteryTime) } </span>] }, 10000);
    }
  }

  displayToastMessage = async(message, hideAfter) => {
    const setStateMessage = async (msg) => { 
        if(this.state !== undefined) {
          await this.setState({...this.state, ...msg},() => console.log('Notification toast called with message: ',this.state.toastMessage, this.getBatteryTimeText(new Date())));
        }
      }

    const callSetStateWithTimeOut = async (msg, timeOutValue) => await setTimeout(async() => { 
      await setStateMessage(msg)
      console.log('close toast called!!');
    }, timeOutValue);

    await setStateMessage({...message, toastClassName: 'animated fadeInUpBig'});
    if(hideAfter !== undefined) { 
        await callSetStateWithTimeOut({...message, toastClassName: 'animated fadeOutDownBig'}, hideAfter);
        await callSetStateWithTimeOut({toastMessage : '', toastClassName: ''}, hideAfter+1000);        
    }
  }

  getChangesLocally = async () => {
    console.log('checking for local values ..');
    const localValues = await Utils.getItemsLocally(Utils.getDbContext());
    console.log('local values count : ',[...localValues].length);   
    [...localValues].forEach(s => {
      const localValues = {notifyBatteryLevel: s.notifyBatteryLevel, notifyBatteryState: s.notifyBatteryState }
      this.setBatteryState(localValues);
      console.log('local value is : ',localValues);
    })
  }

  async componentDidMount() {
    //this.displayToastMessage({ toastMessage: [<span>Battery API is not supported in current browser, please try the link in <a target="blank" href="https://www.google.com/chrome/">Chrome</a> browser</span>] }, 5000);
    if ('getBattery' in navigator) {
      console.log(this.getBatteryTimeText(this.userState.currBatteryTime) + ' - The Battery Status API is supported on this platform.');
      this.getChangesLocally();
      setTimeout(() => this.registerNotificationwithAccess(), 3000);
    } 
    else {
      this.displayToastMessage({ toastMessage: [<span>Battery API is not supported in current browser, please try the link in <a target="blank" href="https://www.google.com/chrome/">Chrome</a> browser</span>] });
    }

    this.timerInterval = setInterval(async () => { 
      await this.getBatteryAPI() 
      //console.log('current user model state : ', this.userState)
      if(this.swRegistration !== undefined 
        && this.userState.notificationSent === false 
        && this.userState.batteryState === this.userState.notifyBatteryState 
        && this.userState.batteryLevel*100 ===  this.userState.notifyBatteryLevel) {
        //console.log('Display local notification called with current user model state : ', this.userState)
        this.callNotification();
        //clearInterval(this.timerInterval);
      }
      else if(this.userState.batteryState === this.userState.notifyBatteryState 
        && ((this.userState.batteryState && this.userState.batteryLevel*100 >= this.userState.notifyBatteryLevel) 
            || (!this.userState.batteryState && this.userState.batteryLevel*100 <= this.userState.notifyBatteryLevel))) {
        //clearInterval(this.timerInterval);
      }
    }, 1000);

    // if(this.userState.workerProcess !== undefined && this.workerProcess === null) {
    //   this.workerProcess = this.userState.workerProcess.instance;
    //   console.log('did mount process status:', this.userState.workerProcess.started);
    //   if(!this.userState.workerProcess.started) {
    //     this.workerProcess.postMessage({'cmd': 'usermodelstate', 'msg': JSON.parse(JSON.stringify(this.userState)) });
    //     this.workerProcess.postMessage({'cmd': 'start', 'msg': 'from Home component' });
    //     this.setBatteryState({ workerProcess: { instance: this.workerProcess, started: true }});
    //     console.log('background worker process started');
    //   }
    //   this.workerProcess.addEventListener('message', (e) => this.onWorkerMessage(e));
    //   console.log('background worker onmessage attached');
    // }
  }

  async componentWillUnmount() {
    clearInterval(this.timerInterval);
    if(this.workerProcess) {
      this.workerProcess.postMessage({'cmd': 'stop', 'msg': 'from main thread'});
      await this.setBatteryState({ workerProcess: { instance: this.workerProcess, started: true }});
      console.log('did unmount process status:', this.userState.workerProcess.started);
      this.workerProcess = null;
      console.log('background worker process is still working although home component is unmounted');
    }
  }

  render() {     
    const batteryLevel = this.userState.batteryLevel*100;
    return (
      <Wrapper>
        <div className="App App-body animated heartBeat">
            <div className="circle animated shake delay-1s" 
                style={{ backgroundColor: Utils.bgColor(batteryLevel)
                        , color: Utils.fontColor(batteryLevel) }} >
              <div className="innerCircleContents" >
                <div className="contentHeader" ref="contentHeader">
                  {Utils.getBatteryStateText(this.userState.batteryState)}
                </div>
                <div className="contentBody animated flash" ref="contentBody">
                  {Utils.getBatteryLevelText(this.userState.batteryLevel)}
                </div>
                <div className="contentFooter" ref="contentFooter">
                  {this.getBatteryTimeText(this.userState.currBatteryTime)}
                </div>
              </div>
            </div>
        </div>
        {Utils.showToastMessage(this.state.toastMessage, this.state.toastClassName)}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
.App {
  text-align: center;  
  background-color: #282c34;
  min-height: 100vh;
}

.App-body {
  display: grid;
  place-items:center;
}

.circle {
  width:45vmax;
  height:45vmax;
  border-radius:50%;
  box-sizing: border-box;
  position:relative;
  background:rgb(240, 16, 102);
  color: black;
  font-family: Helvetica, Arial Black, sans;
  border:solid 0px greenyellow;
  transform: scale(1);
  transition:transform ease-in-out 250;
}

.circle:hover {
  transform:scale(1.010);
}

.innerCircleContents {
  margin:auto;
  padding:25% 0;
  width:100%;
  height:50%;
  place-items:center;
  display: grid;
  grid-auto-flow:row;
  grid-gap: 5px;
}

.contentHeader {
  width:50%;
  border:0px solid greenyellow;
  font-size: calc(8px + 4vmin);
}

.contentBody {
  width:100%;
  border:0px solid greenyellow;
  font-size: calc(8px + 20vmin);
}

.contentFooter {
  border:0px solid greenyellow;
  width:50%;
  font-size: calc(8px + 2vmin);
  word-wrap: break-word;
  overflow-wrap: break-word;
}

`
export default Home;
