const currentYear = new Date().getFullYear();

document.querySelector("#experience-years").textContent = currentYear - 2022;
document.querySelector("#study-years").textContent = currentYear - 2019;
document.querySelector("#copyright-year").textContent = currentYear;
