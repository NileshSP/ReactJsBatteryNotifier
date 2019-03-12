// // eslint-disable-next-line import/no-webpack-loader-syntax
export default () => {
	
	let timerInterval, userModel //, utils;// = Utils;

	if('function' === typeof importScripts) {
		onmessage = function (e) {
			let data = e.data;
			console.log('Msg data passed to worker as : ', data)
			switch (data.cmd) {
				case 'start':
					startMonitoring(data);
					postWorkerMessage({'cmd': 'log', 'data': 'WORKER STARTED: ' + data.msg});
					break;
				case 'stop':
					stopMonitoring(data);
					break;
				case 'usermodelstate':
					userModel = data.msg;
					break;
				default:
					postWorkerMessage({'cmd': 'log', 'data': 'Unknown command: ' + data.msg});
			};
		}

		const startMonitoring = function(data) {
			timerInterval = setInterval(() => {
				if (userModel.notificationSent === false 
					&& userModel.batteryState === userModel.notifyBatteryState 
					&& userModel.batteryLevel*100 ===  userModel.notifyBatteryLevel) {
					stopMonitoring({
					'cmd': 'stop',
					'msg': 'from Background worker'
					})
				}
				postWorkerMessage({'cmd': 'intervallog', 'data': Date.now()})
			}, 1000);
		}

		const stopMonitoring = function(data) {
			clearInterval(timerInterval);
			this.close(); // Terminates the worker.
			postWorkerMessage({'cmd': 'stop', 'data': 'WORKER STOPPED: ' + data.msg});
		}

		const postWorkerMessage = function(obj) { 
			this.postMessage(obj); 
		}
	
	}

}