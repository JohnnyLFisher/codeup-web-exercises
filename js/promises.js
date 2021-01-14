"use strict";
$(document).ready(function() {
	const connected = () => {console.log('JS & jQuery Connections Successful'); console.log('')}; connected();

	/* Old JS Methods*/
	// function getLastCommitDate (username)  {
	// 	fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': githubToken}})
	// 		.then(function(response) {
	// 			return response.json()
	// 		})
	// 		.then(function(data) {
	// 			let pushEvents = []
	// 			data.forEach(function (event) {
	// 				if (event.type === 'PushEvent') {
	// 					pushEvents.push(event)
	// 				}
	// 			})
	// 			console.log(`The last push ${username} made was on: ${pushEvents[0].created_at}`)
	// 			return pushEvents[0]
	// 		})
	// }

	const getLastCommitDate = username => {
		fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': githubToken}})
			.then(response => response.json())
			.then(data => data.filter(event => event.type === 'PushEvent'))
			.then(pushEvents => pushEvents[0])
			.then(lastEvent => console.log(`The last push ${username} made was on: ${lastEvent.created_at}`))
	}
	getLastCommitDate('JohnnyLFisher')


	const wait = seconds => {
		let ms = seconds * 1000
		return new Promise((resolve, reject) => setTimeout(resolve,ms))
			.then(() => console.log(`You'll see this after ${seconds} second(s)`))
	}
	wait(1)
	wait(2)
	wait(3)
	wait(0)

});