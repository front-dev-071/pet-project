import { Dog, Cat, Cow, Developer } from "./animal/Animal.js";

const dog = new Dog();
const cat = new Cat();
const cow = new Cow();
const developer = new Developer();

const buttons = document.querySelector(".animals__buttons");

const dogButton = buttons.querySelector("#dogButton");
const catButton = buttons.querySelector("#catButton");
const cowButton = buttons.querySelector("#cowButton");
const devButton = buttons.querySelector("#devButton");

const voiceContainer = document.getElementById("voiceContainer");

function showAnimalVoice(animal, name) {
	voiceContainer.textContent = animal.speak(name);
}

dogButton.addEventListener("click", () => {
	showAnimalVoice(dog, "Шарик");
});
catButton.addEventListener("click", () => {
	showAnimalVoice(cat, "Мурка");
});
cowButton.addEventListener("click", () => {
	showAnimalVoice(cow, "Бурёнка");
});
devButton.addEventListener("click", () => {
	showAnimalVoice(developer, "Вовочка");
});
