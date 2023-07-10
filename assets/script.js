async function forecast(lat, lon, apiKey) {
	let request = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
	let response = await request.json();
	console.log(response);
	response.list.forEach((item) => {
		let date = new Date(item.dt * 1000);
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let hour = date.getHours();
		let temp = Math.round(item.main.temp - 273.15);
		let weather = item.weather[0].main;
		let weatherIcon = item.weather[0].icon
		let weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
		let weatherIconHtml = `<img src="${weatherIconUrl}" alt="${weather}">`;
		$('body').append(weatherIconHtml);
	});
}
forecast(41.8500300, -87.6500500, 'be6f3d3b53d9af669a52512f5c200cc0');