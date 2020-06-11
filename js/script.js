let navbar = document.querySelector(".navbar");

window.onscroll = function(){
	if(window.pageYOffset >= navbar.offsetHeight){
		navbar.classList.add("sticky");
		header.style.paddingTop = "36vh";
	} else {
		navbar.classList.remove("sticky");
		header.style.paddingTop = "30vh";
	}
};

