//your JS code here. If required.
function removeColor(){
	let selectedColor = document.getElementById("colorSelect").value;
	let optionsArr = document.getElementById("colorSelect").children;
	for(let opt of optionsArr){
		if(opt.innerText == selectedColor){
			opt.remove();
		}
	}
}