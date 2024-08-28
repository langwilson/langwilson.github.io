pages = document.getElementsByClassName("page");
shift = 0;

function toBack(pageNum) {
	for(let x = 0; x < pages.length; x++) {
		pages[x].style.zIndex = Number(getComputedStyle(pages[x]).zIndex) + 1;
	}
	pages[pageNum].classList.add("slideIn");  //add the slidein animation to the current page
	pages[pageNum].addEventListener("animationend", function() {  //add event listener to be called when the animation ends
		pages[pageNum].classList.remove("slideIn");  //remove the slidein animation
		pages[pageNum].classList.add("slideOut");  //add the slideout animation
		pages[pageNum].style.zIndex = 1;
		pages[pageNum].addEventListener("animationend", function() {pages[pageNum].classList.remove("slideOut")}, {once: true}); //add event listener to remove the animation once it ends
	}, {once: true});
}

for (let x = 0; x < pages.length; x++) {
	pages[x].style.zIndex = x+1;

	pages[x].addEventListener('click', function() {
		toBack(x);
	});
}