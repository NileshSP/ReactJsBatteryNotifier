export class UserModel {

	state = {};

	constructor() {
		this.state = {
			batteryLevel: 0,
			batteryState: null,
			currBatteryTime: Date.now(),
			notifyBatteryLevel: 100,
			notifyBatteryState: true,
			notificationSent: false,
			workerProcess: {
				instance: null,
				started: false
			},
		};
	}

	async setUserState(objState) {
		this.state = { ...objState	}
	}
}