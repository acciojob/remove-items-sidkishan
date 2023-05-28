//your JS code here. If required.
function removeColor(){
	let col = document.getElementById("colorSelect").value;
	let arr = document.getElementById("colorSelect").children;
	for(let opt of arr){
		if(opt.innerText == col){
			opt.remove();
		}
	}
}