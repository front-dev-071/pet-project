import { Dog, Cat, Cow, Developer } from "./animal/Animal.js";

const dog = new Dog("Шарик");
const cat = new Cat("Мурка");
const cow = new Cow("Бурёнка");
const developer = new Developer("Вовочка");

const buttons = document.querySelector(".animals__buttons");

const dogButton = buttons.querySelector("#dogButton");
const catButton = buttons.querySelector("#catButton");
const cowButton = buttons.querySelector("#cowButton");
const devButton = buttons.querySelector("#devButton");

const voiceContainer = document.getElementById("voiceContainer");

function showAnimalVoice(animal) {
	voiceContainer.textContent = animal.speak();
}

dogButton.addEventListener("click", () => {
	showAnimalVoice(dog);
});
catButton.addEventListener("click", () => {
	showAnimalVoice(cat);
});
cowButton.addEventListener("click", () => {
	showAnimalVoice(cow);
});
devButton.addEventListener("click", () => {
	showAnimalVoice(developer);
});
