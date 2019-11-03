window.onload = function() {
	/*////////////////// Переключатель слонов ///////////////////////////////// */
	var buttons = document.getElementsByTagName("button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", myFunction);
		buttons[i].addEventListener("mouseup", myFunction1);
	}
	function myFunction() {
		var press = document.getElementsByClassName("pref");
		for (var i = 0; i < press.length; i++) {
			if (buttons[i] === event.target) {
				press[i].style.backgroundImage = "url(./img/elefant.jpg)";
				press[i].style.backgroundSize = "cover";
			}
		}
	}
	function myFunction1() {
		var press = document.getElementsByClassName("pref");
		for (var i = 0; i < press.length; i++) {
			press[i].style.backgroundImage = "none";				
		}	
	}
	var reload = document.getElementById("reload");
	reload.addEventListener("mousedown", myFunction2);
	reload.addEventListener("mouseup", myFunction3);
		function myFunction2() {
			reload.style.width = "190px";
			reload.style.height = "45px";
		}
		function myFunction3() {
			reload.style.width = "200px";
			reload.style.height = "50px";
			var press = document.getElementsByClassName("pref");
				for (var i = 0; i < press.length; i++) {
			press[i].style.backgroundImage = "none";
		}	
	}
	/* //////////////// Переключатель слонов ///////////////////////// */	
	/*///////////////////////// AJAX ////////////////////////////////// */

	var elem = document.getElementById("tg"); 
	elem.addEventListener("click", change);
	function change() { 
		elem.classList.toggle("change");
	}

	var ajax = document.getElementById("sub");
	ajax.addEventListener("click", copy);
	function copy() {
		var suf = document.getElementById("tg");
		if ( suf.classList.contains("change") === true ) {	
			var text = document.getElementById("text");
			document.getElementById("out").innerHTML = text.value;
		}
	}
	
	var text = document.getElementById("text").oninput = function(){
		var der = document.getElementById("tg");
		if ( der.classList.contains("change") === false ) {
			var text = document.getElementById("text");
			document.getElementById("out").innerHTML = text.value;
		}
	}

/*///////////////////////// AJAX ////////////////////////////////// */	
/*///////////////////////// MENU ////////////////////////////////// */
var menu = document.getElementById("contacts");
menu.addEventListener("click", cont);
function cont() {
	menu.classList.toggle("contacts");
	var block = document.getElementById("novisible");
	block.style.width = "600px";
	block.style.fontSize = "2rem";
	block.style.transition = "0.5s linear";
	block.setAttribute("visible", "");
	if (menu.classList.contains("contacts") === false) {
		block.style.transition = "0.2s linear";
		block.style.width = "20px";
		block.style.fontSize = "0";
		}
	}
}













	

