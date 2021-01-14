"use strict";

$(document).ready(function () {
	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];
	console.log('All users: ');
	console.log(users);
	console.log('');

	const langArr = users.filter(function (user) {
		return user.languages.length >= 3;
		});
	console.log('Users with 3 or more languages: ');
	console.log(langArr);
	console.log('');

	const emailArr = users.map(function (user) {
		return user.email;
	});
	console.log('All emails: ');
	console.log(emailArr);
	console.log('');

	const averageExp = users.reduce(function (total, user) {
		return total + user.yearsOfExperience / users.length;
	}, 0);
	console.log("Average Years of Experience: ")
	console.log(averageExp + ' years');
	console.log('');

	const lngstEmail = users.reduce(function (longest, user) {
		if (user.email.length > longest.length){
			longest = user.email;
		}
		return longest
	}, []);
	console.log('Longest email: ');
	console.log(lngstEmail);
	console.log('');

	const nameArr = users.reduce(function (names, user) {
		return [...names, user.name];
	}, []);
	let userString = 'Your instructors are: ' + nameArr.join(', ') + '.'
	console.log(userString);

})
