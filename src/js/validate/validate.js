function showInputError(formElement, inputElement, config) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

	errorElement.classList.add(config.errorClass);
	errorElement.textContent = inputElement.validationMessage;
	inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

	errorElement.classList.remove(config.errorClass);
	errorElement.textContent = "";
	inputElement.classList.remove(config.inputErrorClass);
}

function checkInputValidity(formElement, inputElement, config) {
	if (inputElement.validity.valid) {
		hideInputError(formElement, inputElement, config);
	} else {
		showInputError(formElement, inputElement, config);
	}
}

function hasInvalidInput(inputList) {
	return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, buttonElement, config) {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.remove(config.activeButtonClass);
		buttonElement.classList.add(config.inactiveButtonClass);
		buttonElement.disabled = true;
	} else {
		buttonElement.classList.add(config.activeButtonClass);
		buttonElement.classList.remove(config.inactiveButtonClass);
		buttonElement.disabled = false;
	}
}

function setEventListeners(formElement, config) {
	const inputList = Array.from(
		formElement.querySelectorAll(config.inputSelector)
	);
	const buttonElement = formElement.querySelector(config.submitButtonSelector);

	toggleButtonState(inputList, buttonElement, config);

	// formElement.addEventListener('input', (evt) => {
	//   const inputElement = evt.target;
	//   checkInputValidity(formElement, inputElement, config);
	//   toggleButtonState(inputList, buttonElement, config);
	// })

	inputList.forEach((inputElement) => {
		inputElement.addEventListener("input", () => {
			checkInputValidity(formElement, inputElement, config);
			toggleButtonState(inputList, buttonElement, config);
		});
	});
}

export function enableValidation({ formSelector, ...restConfig }) {
	const formList = Array.from(document.querySelectorAll(formSelector));

	formList.forEach((formElement) => {
		setEventListeners(formElement, restConfig);
	});
}
