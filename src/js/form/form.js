import IMask from "imask";
import phoneMask from "../../constants/phoneMask.js";
import { enableValidation } from "../validate/validate";
import {
	MAIL_SUCCESSED,
	MAIL_SUBMISSION_ERROR,
	SENDING,
} from "../../utils/informMessages.js";

//* IMask *//
const phoneElement = document.getElementById("phonenumber");
const maskOptions = { mask: phoneMask };
const mask = IMask(phoneElement, maskOptions);

// console.log('Маска раз', mask);

phoneElement.mask = mask;

// console.log('Маска два', mask);

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
const form = document.querySelector("#contactForm");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phonenumber");
const cooperationInput = document.querySelector("#cooperation");

const sendingButton = document.querySelector(".form__submit-button");

async function handleSubmit(event) {
	event.preventDefault();

	const formData = {
		username: userNameInput.value,
		email: emailInput.value,
		phonenumber: phoneNumberInput.value,
		cooperation: cooperationInput.value,
	};

	console.log(formData);

	try {
		// вставим моковый api с сайта https://pipedream.com/
		const response = await fetch("https://eo17i872cejmyn0.m.pipedream.net", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			throw new Error("Ошибка сети или сервера");
		}

		const result = await response.json();

		alert(MAIL_SUCCESSED);

	} catch (error) {
		alert(MAIL_SUBMISSION_ERROR);
	}

	form.reset();

	enableValidation(validationConfig);
}

form.addEventListener("submit", handleSubmit);
