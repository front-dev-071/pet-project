class Animal {
	constructor(animal, name, voice) {
		this.animal = animal;
		this.name = name;
		this.voice = voice;
	}

	speak(name) {
		return `${this.animal} по имени ${name} говорит «${this.voice}»`;
	}
}

export class Dog extends Animal {
	constructor(name) {
		super(name);
		this.animal = "Собака";
		this.voice = "Гав";
	}
}

export class Cat extends Animal {
	constructor(name) {
		super(name);
		this.animal = "Кошка";
		this.voice = "Мяу";
	}
}

export class Cow extends Animal {
	constructor(name) {
		super(name);
		this.animal = "Корова";
		this.voice = "Му";
	}
}

export class Developer extends Animal {
	constructor(name) {
		super(name);
		this.animal = "Разработчик";
		this.voice = "И так сойдёт";
	}
}
