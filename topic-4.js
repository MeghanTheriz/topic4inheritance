class animal{

    //Private Fields
    #Animal_name;
    #sound;
    #ability;

    constructor(Animal_name, sound, ability){
        this.#Animal_name = Animal_name;
        this.#sound = sound;
        this.#ability = ability;
    }

    //Getters
    get Animal_name(){
        return this.#Animal_name;
    }

    get sound(){
        return this.#sound;
    }

    get ability(){
        return this.#ability;
    }

    // Method to display animal information in the console
    displayInfo() {
        console.log("Animal_name: " + this.Animal_name);
        console.log("sound: " + this.sound);
        console.log("ability: " + this.ability);
    }

    // Method to display animal information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Animal_name:</strong> ${this.Animal_name}<br>
            <strong>sound:</strong> ${this.sound}<br>
            <strong>ability:</strong> ${this.ability}
        `;
    }
}

class Dog extends animal {
    constructor(Animal_name, sound, ability, Color) {
        super(Animal_name, sound, ability);
        this.Color = Color;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Color: " + this.Color);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Color:</strong> ${this.Color}`;
    }
}

// Creating an instance of the Dog class
const AnimalOne = new Dog('Cliff', 'Aw aw' , 'Bite', 'Brown');

// Calling methods
AnimalOne.displayInfo();