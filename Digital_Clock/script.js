const clock = document.querySelector("#clock");
console.log(clock);

setInterval(function () {
	let date = new Date();
	let time = date.toLocaleTimeString('en-IN');
    clock.innerHTML = time;
}, 1000);
