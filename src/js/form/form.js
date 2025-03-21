import IMask from "imask";

const phoneElement = document.getElementById("phoneNumber");
const maskOptions = { mask: "+{7}(000)000-00-00" };
const mask = IMask(phoneElement, maskOptions);

document.getElementById("contactForm").addEventListener("submit", (event) => {
	event.preventDefault();
	alert("Форма отправлена!");
});
