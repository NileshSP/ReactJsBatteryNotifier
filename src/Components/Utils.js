import React from "react";
import idb from "idb";
import logo from "../ic_launcher.png";

let Utils = {
	
	setBatteryState: async (batteryOptions, userState) => {
		return {...userState,	...batteryOptions,}
  },

	loadingMessage: (props) => {
			const loadingDivStyle = {
				margin:'auto',
				height:'100vh',
				backgroundColor:'lightgrey',
				textAlign:'center',
				alignItems:'center',
			}
			const containerDivStyle = {
				paddingTop:'90px',
				display: 'grid',
				gridAutoFlow:'row',
				gridGap: '5px',
				placeItems:'center'
			}
		
			const spanStyle = {
				color:'black',
				fontSize: '25px'
			}
		
			return (
				<div style={loadingDivStyle}>
					<div style={containerDivStyle}>
						<img src={logo} alt="" />  
						<span style={spanStyle}>loading...</span>
					</div>
				</div>
			);		
	},

	toastMessage: (props) => {
		const styles = {
			visibility:(props.message.length === 0 ? 'hidden': 'visible'),
			width:'45vw',
			backgroundColor: 'rgba(255, 255, 153, .8)', /* background color */
			color: 'black', /* text color */
			textAlign: 'center', /* Centered text */
			borderRadius: '5px', /* Rounded borders */
			padding: '12px', /* Padding */
			position: 'fixed', /* Sit on top of the screen */
			zIndex: '1', /* Add a z-index if needed */
			left: '25%', /* Center the snackbar */
			bottom: '30px', /* 30px from the bottom */
			fontSize:'.8em'
		
		}
		return (
			<div className={props.className} style={styles} >
				{[...props.message].map((text, index) => <div key={index} >{text}</div>)}
			</div>
		);
	},

	showToastMessage: (message, className) => {
		return	(
							<Utils.toastMessage 
								className={className}
								// {message === '' ? "animated fadeOutDownBig" : "animated fadeInUpBig delay-2s"} 
								message={message}>
							</Utils.toastMessage>
						)
	},
	
	logText: (...rest) => console.log(rest),

	bgColor: (percent) => {
			const r = percent < 50 || percent === 0 ? 255 : Math.floor(255-(percent*2-100)*255/100);
			const g = percent > 50 ? 255 : Math.floor(((percent*2)*255)/100);
			const parsedRColor = !isNaN(parseInt(r.toString())) ? parseInt(r.toString()) : 0;
			const parsedGColor = !isNaN(parseInt(g.toString())) ? parseInt(g.toString()) : 0;
			//console.log('bgColor for '+ percent.toString() +' : rgb(' + parsedRColor.toString() + ',' + parsedGColor.toString() + ',0)');
			return 'rgb(' + parsedRColor.toString() + ',' + parsedGColor.toString() + ',0)';
	},

	fontColor: (percent) => {
			return 'black';//(percent >= 45 && percent <= 60) ? 'black' : 'white';
	},

	getBatteryStateText: (batState) => {
		if (batState != null) {
			if (batState === true) {
				return 'Charging';
			} else if (batState === false) {
				return 'Discharging';
			} else {
				return 'Full';
			}
		} else {
			return '';
		}
	},

	getBatteryLevelText: (batLvl) => {
		return Math.floor(batLvl * 100) + '%';
	},

	getBatteryTimeText: (timeTxt) => {
		const dateVal = new Date(timeTxt)
		return dateVal.toLocaleDateString() + ' ' + dateVal.toLocaleTimeString();
	},

	showNotification: async (title, logo, body) => {
		const appTitle = title;
		const text = body;
		const swRegistration = await navigator.serviceWorker.ready;//.getRegistration(new URL(process.env.PUBLIC_URL, window.location.href));
		console.log('swRegistration : ', swRegistration);
	
		// const notifyWithNoSW = async () => {
		// 	try {
		// 		new Notification(appTitle+':NoSW', {
		// 			body: text,
		// 			icon: logo,
		// 			tag: 'soManyNotification'
		// 		});					
		// 	} catch (err) {
		// 		console.log(`Error for new Notification : ${err}`);
		// 		return false;
		// 	}
		// 	return true;
		// }

		const notifywithSWReadyRegister = async (registration) => {
			//navigator.serviceWorker.getRegistration(new URL(process.env.PUBLIC_URL, window.location.href))
			// navigator.serviceWorker.ready
			// .then(async (registration) => {
				try {
					registration.showNotification(appTitle, {
						body: text,
						icon: logo,
						//vibrate: [200, 100, 200, 100, 200, 100, 200],
						tag: title,
						data: {
							dateOfArrival: Date.now(),
							primaryKey: 1
						},
						// actions: [
						// 	{action: 'explore', title: 'Explore this new world',
						// 		icon: 'images/checkmark.png'},
						// 	{action: 'close', title: 'Close notification',
						// 		icon: 'images/xmark.png'},
						// ]
					});
					return true;
				}
				catch(err) {
					console.log(`Error for notifywithSWReadyRegister : ${err}`);
					return false;//await notifyWithNoSW();
				}

		// 		})
		// 		.catch(async err => {
		// 			console.log(`Error for notifywithSWReadyRegister : ${err}`);
		// 			return await notifyWithNoSW();
		// 		});
		// 		return true;
		};	

		const callNotify = async () => {
			if(swRegistration !== undefined) {
				return await notifywithSWReadyRegister(swRegistration);
			}
			else {
				return false;
			}
			// else {
			// 	return await notifyWithNoSW(); 
			// }			
		}

		if (window.Notification && Notification.permission === "granted") {
			return await callNotify();
		} else if (window.Notification && Notification.permission !== "denied") {
			Notification.requestermission(async (status) => {
				if (status === "granted") {
					return await callNotify();
				} else {
					console.log("permission not granted - 2");
				}
			});
		} else {
			console.log("permission not granted - 1");
		}
	},

	getDbContext: async () => {
    return idb.open('BatteryNotifierDatabase', 1, upgradeDB => {
      switch (upgradeDB.oldVersion) {
        case 1:
          upgradeDB.createObjectStore('BatteryNotifierList', {keyPath: 'id', autoIncrement:true});
          break;
        default:
          upgradeDB.createObjectStore('BatteryNotifierList', {keyPath: 'id', autoIncrement:true});  
      }
    });
  },

  storeItemsLocally: async (dbcontext, obj) => {
		obj = JSON.parse(JSON.stringify(obj))
		console.log('data is being peristed to indexedDB as: ', obj)
    dbcontext
        .then(db => {
          const tx = db.transaction('BatteryNotifierList', 'readwrite');
          tx.objectStore('BatteryNotifierList').clear();
					tx.objectStore('BatteryNotifierList').put({...obj})
          return tx.complete;
        })
        .catch(err => {
          console.log(`Error: ${err}`)
          return false;
        });
  },

  getItemsLocally: async (dbcontext) => {
    let listItems = new Set();
    return dbcontext
						.then(db => {
							return db.transaction('BatteryNotifierList').objectStore('BatteryNotifierList').getAll();
						})
						.then(allObjs => {
							[...allObjs].map(s => listItems.add({ ...s }));
							return listItems;
						})
						.catch(err => {
							console.log(`Error: ${err}`)
							return listItems;
						});
	},
}

export default Utils;
