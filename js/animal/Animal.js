class Animal {
	static count = 0;

	constructor(name = "Jonh Doe", voice) {
		this.name = name;
		this.voice = voice;

		Animal.count++;
	}

	speak() {
		return `${this.name} говорит «${this.voice}»`;
	}

	get getName() {
		return this.name;
	}

	set setName(newName) {
		this.name = newName;
	}
}

export class Dog extends Animal {
	constructor(name) {
		super(name, "Гав");
	}

	speak() {
		return `Собака ${this.getName} говорит «${this.voice}»`;
	}
}

export class Cat extends Animal {
	constructor(name) {
		super(name, "Мяу");
	}

	speak() {
		return `Кошка ${this.getName} говорит «${this.voice}»`;
	}
}

export class Cow extends Animal {
	constructor(name) {
		super(name, "Му");
	}

	speak() {
		return `Корова ${this.getName} говорит «${this.voice}»`;
	}
}

export class Developer extends Animal {
	constructor(name) {
		super(name, "И так сойдёт");
	}

	speak() {
		return `Разработчик ${this.getName} говорит «${this.voice}»`;
	}
}
