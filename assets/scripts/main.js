const pageNavEl = document.querySelector("#page-nav");

new IntersectionObserver(
	([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
	{ threshold: [1] }
).observe(pageNavEl);

document.querySelector("#experience-years").textContent = new Date().getFullYear() - 2022;
document.querySelector("#study-years").textContent = new Date().getFullYear() - 2019;
