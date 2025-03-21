import { Animal, Dog, Cat, Cow, Developer } from "./AnimalClass";

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
const countContainer = document.getElementById("countContainer");

function showAnimalVoice(animal) {
	voiceContainer.textContent = animal.speak();
}

function updateAnimalCount() {
	countContainer.textContent = `Количество животных: ${Animal.countAnimals()}`;
}

updateAnimalCount();

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