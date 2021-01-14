// const myPromise = fetch('https://api.github.com/users');
// console.log(myPromise);
// myPromise.then((response) => {
//     console.log(response)
// });
// myPromise.catch(error => console.error(error));

const myPromise = fetch('https://api.github.com/users')
	.then(response => console.log(response))
	.catch(error => console.error(error));

const swapiurl = "https://swapi.dev/api/planets/"
const pokeapiurl = "https://pokeapi.co/api/v2/pokemon/"

document.getElementById("button").addEventListener("click",()=>{
	let id = document.getElementById("input").value;
	console.log("fetching: " + pokeapiurl + id);
	let promise = fetch(pokeapiurl+id)
		.then(response=>response.json())
		.then(data=>{
			console.log(data)
			let name = data.name;
			document.getElementById("output").innerText = name;
		})
		.catch(err=>{
			console.log(err)
		})
})

let catFetch = fetch("https://api.thecatapi.com/v1/images/search")
	.then(response=>{
		console.log(response);
		return response.json();
	})
	.then(data=>{
		console.log(data)
		// console.log(data[0].url);
		return data[0].url;
	})

let dogFetch = fetch("https://api.thedogapi.com/v1/images/search")
	.then(response=>{
		console.log(response)
		return response.json()
	})
	.then(data=>{
		// console.log(data)
		console.log(data[0].url);
		return data[0].url;
	})

Promise.race([catFetch,dogFetch])
	.then(url => {
		console.log(url);
		let img = document.createElement("img");
		img.setAttribute("width", "300px");
		img.setAttribute("src", url);
		document.getElementById("pic").append(img);
	})


const getGithubUsernames = () => {
	return fetch('https://api.github.com/users')
		.then(response => response.json())
}

// let githubUsernames = getGithubUsernames(); // NO! promises are asynchronous
getGithubUsernames().then( users => {
	console.log(users.length)
	users.forEach( userObj => {
		// do something with each username
		console.log(userObj.login);
	});
}).catch(error => console.error(error));

const makeRequest = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('Here is your data: ...');
			} else {
				reject('Network Connection Error!');
			}
		}, 1500);
	});
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(banana => console.log('Promise rejected!', banana));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"

Promise.resolve('one').then((one) => {
	console.log(one);
	return 'two';
}).then((two) => {
	console.log(two);
	return 'three';
}).then((three) => {
	console.log(three);
});

// write your wait function here
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));