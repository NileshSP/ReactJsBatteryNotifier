import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "./global-styles";
import Utils from "./Components/Utils";
const Container = React.lazy(() => import('./Components/Container'));

const App = () => {
	return (
		<Router >
   		<React.Suspense fallback={Utils.loadingMessage()} >
				<Container />
			</React.Suspense>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
