import IMask from "imask";
import { enableValidation } from "../validate/validate";

//* IMask *//
const phoneElement = document.getElementById("phonenumber");
const maskOptions = { mask: "+{7}(000)000-00-00" };
const mask = IMask(phoneElement, maskOptions);

console.log('Маска раз', mask);

phoneElement.mask = mask;

console.log('Маска два', mask);

//* Валидация *//
const validationConfig = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".form__submit-button",
	activeButtonClass: "form__submit-button_valid",
	inactiveButtonClass: "form__submit-button_invalid",
	inputErrorClass: "form__input_type_error",
	errorClass: "form__input-error_visible",
};

enableValidation(validationConfig);

//* Отправка формы *//
const form = document.querySelector(".form");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phonenumber");
const cooperationInput = document.querySelector("#cooperation");

function handleSubmit(evt) {
	evt.preventDefault();

	console.log({
		username: userNameInput.value,
		email: emailInput.value,
		phonenumber: phoneNumberInput.value,
		cooperation: cooperationInput.value,
	});

	alert("Форма отправлена!");
}

form.addEventListener("submit", handleSubmit);
