mapboxgl.accessToken = mapboxToken;

var startingLocation = {
	lng: -98.4916,
	lat: 29.4252
}

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
	center: startingLocation,
	zoom: 8
});

var marker = new mapboxgl.Marker({
	draggable: true
})
	.setLngLat(startingLocation)
	.addTo(map);

var searchValue = document.getElementById('search')

function displayCurrent (data){
	var wind = data.wind.speed
	var { description, icon } = data.weather[0]
	var { sunrise, sunset } = data.sys
	var { temp, humidity, feels_like } = data.main

	var current = document.createElement('h5')
	var cards = document.createElement('div')
	var cardInfo = document.createElement('div')
	var innerContainer = document.createElement('div')
	var currentDetail = document.createElement('div')
	var currentGeneral = document.createElement('div')
	var theSun = document.createElement('div')
	var icons = document.createElement('img')
	var descriptionInfo = document.createElement('p')
	var sunUp = document.createElement('p')
	var sunDown = document.createElement('p')
	var tempInfo = document.createElement('p')
	var feel = document.createElement('p')
	var humidInfo = document.createElement('p')
	var windSpeed = document.createElement('p')


	sunrise = new Date(sunrise * 1000)
	sunset = new Date(sunset * 1000)


	cards.setAttribute('class', 'card currentWeather my-3')

	current.innerText = 'Today\'s weather:'
	current.setAttribute('class', 'card-header text-light')
	current.setAttribute('id', 'current')

	tempInfo.innerText = 'Temperature: ' + temp + 'F'
	feel.innerText = 'Feels Like: ' + feels_like + 'F'
	humidInfo.innerText = 'Humidity: ' + humidity + '%'
	windSpeed.innerText = 'Wind: ' + wind + 'MPH'

	icons.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)

	descriptionInfo.innerText = description

	sunUp.innerText = `Sunrise:  ${sunrise.getHours()}:${sunrise.getMinutes()}:${sunrise.getSeconds()} AM`
	sunDown.innerText = `Sunset:  ${sunset.getHours()}:${sunset.getMinutes()}:${sunset.getSeconds()} PM`

	theSun.appendChild(sunUp).appendChild(sunDown)

	innerContainer.setAttribute('class', 'row')
	innerContainer.appendChild(currentDetail)
	innerContainer.appendChild(currentGeneral)

	currentDetail.setAttribute('class', 'col-12 col-sm-6 currentDetail')
	currentDetail.appendChild(tempInfo)
	currentDetail.appendChild(windSpeed)
	currentDetail.appendChild(humidInfo)
	currentDetail.appendChild(feel)

	currentGeneral.setAttribute('class', 'col-12 col-sm-6 currentGeneral')
	currentGeneral.appendChild(icons)
	currentGeneral.appendChild(descriptionInfo)
	currentGeneral.appendChild(theSun)

	cardInfo.appendChild(innerContainer)

	cards.appendChild(current)
	cards.appendChild(cardInfo)

	$('#today').html(cards)
}

function getCurrent(coords){
	$.get(`http://api.openweathermap.org/data/2.5/weather`, {
		APPID: OPEN_WEATHER_APPID,
		lat: coords.lat,
		lon: coords.lng,
		units: 'imperial'
	}).done(function (data){
		displayCurrent(data)
	})
}

function displayFiveDay (dayTime, loc){
	var date = dayTime.dt_txt
	var { main, weather, wind } = dayTime
	var { humidity, pressure } = main
	var temperature = main.temp
	var { icon, description } = weather[0]
	var { speed } = wind

	var cards = document.createElement('div')
	var dateInfo = document.createElement('p')
	var cardInfo = document.createElement('div')
	var tempInfo = document.createElement('p')
	var icons = document.createElement('img')
	var descriptionInfo = document.createElement('p')
	var humidInfo = document.createElement('p')
	var windSpeed = document.createElement('p')


	function convertToString (dayTime){
		var work = new Date(dayTime.dt * 1000)
		var weekday = ''
		var month = ''

		function setDay() {
			var day = work.getDay()
			if (day === 0) {
				weekday = 'Sunday, '
			} else if (day === 1) {
				weekday = 'Monday, '
			} else if (day === 2) {
				weekday = 'Tuesday, '
			} else if (day === 3) {
				weekday = 'Wednesday, '
			} else if (day === 4) {
				weekday = 'Thursday, '
			} else if (day === 5) {
				weekday = 'Friday, '
			} else {
				weekday = 'Saturday, '
			}
		}
		setDay()

		function setMonth() {
			var theMonth = work.getMonth()
			if (theMonth === 0) {
				month = 'January '
			} else if (theMonth === 1) {
				month = 'February '
			} else if (theMonth === 2) {
				month = 'March '
			} else if (theMonth === 3) {
				month = 'April '
			} else if (theMonth === 4) {
				month = 'May '
			} else if (theMonth === 5) {
				month = 'June '
			} else if (theMonth === 6) {
				month = 'July '
			} else if (theMonth === 7) {
				month = 'August '
			} else if (theMonth === 8) {
				month = 'September '
			} else if (theMonth === 9) {
				month = 'October '
			} else if (theMonth === 10) {
				month = 'November '
			} else {
				month = 'December '
			}
		}
		setMonth()

		var prep = date.replace('21:00:00', '')
		return weekday + month + prep.replace('2021-01-', '')
	}


	dateInfo.innerText = convertToString(dayTime)
	dateInfo.setAttribute('class', 'card-header')

	tempInfo.innerText = 'Temperature: ' + Math.floor(temperature) + ' F'
	icons.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
	descriptionInfo.innerText = 'Conditions: ' + description
	humidInfo.innerText = humidity + '% Humidity'
	windSpeed.innerText = 'Wind: ' + speed + ' MPH'

	cardInfo.setAttribute('class', 'card-body background')
	cardInfo.appendChild(tempInfo)
	cardInfo.appendChild(icons)
	cardInfo.appendChild(descriptionInfo)
	cardInfo.appendChild(humidInfo)
	cardInfo.appendChild(windSpeed)

	cards.setAttribute('class', 'card five-unit m-2')
	cards.appendChild(dateInfo)
	cards.appendChild(cardInfo)

	$('#data').append(cards)
}

function getFiveDay (coords){
	$('#data').html('')
	$.get(`http://api.openweathermap.org/data/2.5/forecast`, {
		appid: OPEN_WEATHER_APPID,
		lat: coords.lat,
		lon: coords.lng,
		units: 'imperial'
	}).done(function (data){
		for(var i = 0; i < 40; i++){
			if(data.list[i].dt_txt.includes('21:00:00')){
				displayFiveDay(data.list[i], data.city.name)
			}
		}
	})
}

function activate(){
	var markerLocation = marker.getLngLat()
	getFiveDay(markerLocation)
	getCurrent(markerLocation)
}

function fly() {
	geocode(searchValue.value, mapboxToken).then(function (result){
		var lng = result[0]
		var lat = result[1]
		map.flyTo({
			center: result,
			zoom: 14,
			speed: 0.5,
			curve: 1
		});
		marker.setLngLat([lng, lat]).addTo(map)
		activate()
	})
}

marker.on('dragend', activate)
getCurrent(startingLocation)
getFiveDay(startingLocation)


$('button').click(fly)