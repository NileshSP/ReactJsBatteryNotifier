import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Utils from "./Utils";
import Header from "./Header";
import { UserModel } from "./UserModel";
import WebWorker from "./WebWorker";
import backgroundProcess from "./backgroundProcess";

const Home = React.lazy(() => import("./Home"));  
const Settings = React.lazy(() => import("./Settings"));
const About = React.lazy(() => import("./About"));

function Container({ location }) {
	const userModel = new UserModel();
  let appTitle = 'Battery Notifier';
  document.title = appTitle;
  (async () => {
		if (typeof(w) == "undefined") {
			const bgProcess = new WebWorker(backgroundProcess);
			userModel.setUserState(
				userModel.state = {
					...userModel.state,
					workerProcess: { instance: bgProcess, started: false },
			});
			console.log('Webworker is supported!!');
		}
		else {
			console.log('Webworker is not supported!!');
		}
	})();
  console.log('Container - ', userModel);
  console.log('location : ', location);
  console.log('version : ', 1);
  // // eslint-disable-next-line no-restricted-globals
  // console.log('screen orientation: ',('orientation' in screen));
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <div className="headerOverlay">
              <Header />
            </div>
            <React.Suspense fallback={Utils.loadingMessage()} >
              <Switch location={location}>
                {/* only for development purpose */}
                <Route exact path={`/`} render={(props) => <Home {...props.match.params} AppTitle={appTitle} Model={userModel} /> } /> 
                {/* only for development purpose */}
                <Route exact path={`/ReactJsBatteryNotifier`} render={(props) => <Home {...props.match.params} AppTitle={appTitle} Model={userModel} /> } />
                <Route exact path={`/ReactJsBatteryNotifier/settings`} render={(props) => <Settings hidden={true} {...props.match.params} Model={userModel} /> } />
                <Route exact path={`/ReactJsBatteryNotifier/about`} render={(props) => <About hidden={true} {...props.match.params} Model={userModel} /> } />
              </Switch>
            </React.Suspense>  
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .headerOverlay {
    width:99.8vw;
    margin:0;
    padding:0;
    top:4px;
    z-index:1;
    position:absolute;
    display:grid;
    place-items:stretch;
    border:solid 0px red;
  }

`;

export default withRouter(Container);
