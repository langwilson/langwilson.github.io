function toBack() {
		const pages = document.getElementsByClassName("page");
		for (let x = 0; x < pages.length; x++) {
			pages[x].style.zIndex = Number(getComputedStyle(pages[x]).zIndex) + 1;
			if(getComputedStyle(pages[x]).zIndex > pages.length) {
				pages[x].classList.add("slideIn");
				pages[x].addEventListener("animationend", function() {
					pages[x].classList.remove("slideIn");
					pages[x].classList.add("slideOut");
					pages[x].style.zIndex = 1;
					pages[x].addEventListener("animationend", function() {pages[x].classList.remove("slideOut")}, {once: true});
				}, {once: true});
			}
	}
}
but.onclick = toBack;
