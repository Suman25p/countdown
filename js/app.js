
const endDate = "30 March 2024 10:00 PM"


document.getElementById("end-date").innerText = endDate;
const inputs= document.querySelectorAll("input")




function clock() {
	const end= new Date(endDate);
	const now = new Date();
	const diff = (end- now)/1000;
	console.log(diff);

	if(diff<0) return;
	//days
	inputs[0].value = Math.floor(diff / 3600 / 24 );
	//hours
	inputs[1].value = Math.floor(diff / 3600 ) % 24;
	//convert into days
	//sec
	inputs[2].value =Math.floor(diff / 60)%  60;
	inputs[3].value =Math.floor(diff ) %60;

}
//function call
clock()
/**
 1 day = 24hrs
 1 hr = 60 mins
 60 mins = 3600 sec;
 **/
 setInterval(
 	() => {
 		clock()
 	},
 	1000
 )