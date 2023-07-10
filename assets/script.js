async function forecast(lat, lon, apiKey) {
	let request = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
	let response = await request.json();
	console.log(response);
}