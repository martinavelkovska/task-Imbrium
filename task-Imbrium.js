//1 . polymorphism
class Song {
    print(a) {
        console.log(`Old MacDonald had a farm, E I E I O ${a}`);
    }
}

class Cow extends Song {
    print() {
        console.log("And on his farm, he had a cow, E I E I O.\nWith a moo moo here and a moo moo there, Here a moo, there a moo, everywhere a moo moo.");
    }
}

class Dog extends Song {
    print() {
        console.log("And on his farm, he had a dog, E I E I O.\nWith a woof woof here and a woof woof there, Here a woof, there a woof, everywhere a woof woof.");
    }
}

class Cat extends Song {
    print() {
        console.log("And on his farm, he had a cat, E I E I O.\nWith a meow meow here and a meow meow there, Here a meow, there a meow, everywhere a meow meow.");
    }
}

class Tiger extends Song {
    print() {
        console.log("And on his farm, he had a tiger, E I E I O.\nWith a roar roar here and a roar roar there, Here a roar, there a roar, everywhere a roar roar.");
    }
}

class Frog extends Song {
    print() {
        console.log("And on his farm, he had a frog, E I E I O.\nWith a croak croak here and a croak croak there, Here a croak, there a croak, everywhere a croak croak.");
    }
}


const song = new Song();
const cow = new Cow();
const dog = new Dog();
const cat = new Cat();
const tiger = new Tiger();
const frog = new Frog();
song.print("");
cow.print();
song.print(".");
song.print("");
dog.print();
song.print(".");
song.print("");
cat.print();
song.print(".");
song.print("");
tiger.print();
song.print(".");
song.print("");
frog.print();
song.print(".");

// 2. data-driven approach
function oldMacDonald() {
    const animals = [];

    const cow = {
        name: "cow",
        sound: "moo"
    };
    animals.push(cow);

    const dog = {
        name: "dog",
        sound: "woof"
    };
    animals.push(dog);

    const cat = {
        name: "cat",
        sound: "meow"
    };
    animals.push(cat);

    const tiger = {
        name: "tiger",
        sound: "roar"
    };
    animals.push(tiger);

    const frog = {
        name: "frog",
        sound: "croak"
    };
    animals.push(frog);

   
    animals.forEach(animal => {
        console.log("Old MacDonald had a farm, E I E I O,");
        console.log("And on his farm, he had a " + animal.name + ", E I E I O.");
        console.log("With a " + animal.sound + " " + animal.sound + " here and a " + animal.sound + " " + animal.sound + " there.");
        console.log("Here a " + animal.sound + ", there a " + animal.sound + ", everywhere a " + animal.sound + " " + animal.sound + ".");
        console.log("Old MacDonald had a farm, E I E I O.\n");
    });
}


oldMacDonald();

//2 Take a copy of one of your solutions and extend it to include another 10 animal

class Song {
    print(a) {
        console.log(`Old MacDonald had a farm, E I E I O ${a}`);
    }
}

class Cow extends Song {
    print() {
        console.log("And on his farm, he had a cow, E I E I O. With a moo moo here and a moo moo there, Here a moo, there a moo, everywhere a moo moo.");
    }
}

class Dog extends Song {
    print() {
        console.log("And on his farm, he had a dog, E I E I O.\nWith a woof woof here and a woof woof there, Here a woof, there a woof, everywhere a woof woof.");
    }
}

class Cat extends Song {
    print() {
        console.log("And on his farm, he had a cat, E I E I O.\nWith a meow meow here and a meow meow there, Here a meow, there a meow, everywhere a meow meow.");
    }
}

class Tiger extends Song {
    print() {
        console.log("And on his farm, he had a tiger, E I E I O.\nWith a roar roar here and a roar roar there, Here a roar, there a roar, everywhere a roar roar.");
    }
}

class Frog extends Song {
    print() {
        console.log("And on his farm, he had a frog, E I E I O.\nWith a croak croak here and a croak croak there, Here a croak, there a croak, everywhere a croak croak.");
    }
}

class Horse extends Song {
    print() {
        console.log("And on his farm, he had a horse, E I E I O.\nWith a neigh neigh here and a neigh neigh there, Here a neigh, there a neigh, everywhere a neigh neigh.");
    }
}

class Sheep extends Song {
    print() {
        console.log("And on his farm, he had a sheep, E I E I O.\nWith a baa baa here and a baa baa there, Here a baa, there a baa, everywhere a baa baa.");
    }
}

class Duck extends Song {
    print() {
        console.log("And on his farm, he had a duck, E I E I O.\nWith a quack quack here and a quack quack there, Here a quack, there a quack, everywhere a quack quack.");
    }
}

class Goat extends Song {
    print() {
        console.log("And on his farm, he had a goat, E I E I O.\nWith a maa maa here and a maa maa there, Here a maa, there a maa, everywhere a maa maa.");
    }
}

class Pig extends Song {
    print() {
        console.log("And on his farm, he had a pig, E I E I O.\nWith an oink oink here and an oink oink there, Here an oink, there an oink, everywhere an oink oink.");
    }
}

class Donkey extends Song {
    print() {
        console.log("And on his farm, he had a donkey, E I E I O.\nWith a hee haw here and a hee haw there,Here a hee, there a haw, everywhere a hee haw.");
    }
}

class Rooster extends Song {
    print() {
        console.log("And on his farm, he had a rooster, E I E I O.\nWith a crow crow here and a crow crow there,\nHere a crow, there a crow, everywhere a crow crow.");
    }
}

class Mouse extends Song {
    print() {
        console.log("And on his farm, he had a mouse, E I E I O.\nWith a squeak squeak here and a squeak squeak there,\nHere a squeak, there a squeak, everywhere a squeak squeak.");
    }
}

class Fish extends Song {
    print() {
        console.log("And on his farm, he had a fish, E I E I O.\nWith a blub blub here and a blub blub there,\nHere a blub, there a blub, everywhere a blub blub.");
    }
}

class Bee extends Song {
    print() {
        console.log("And on his farm, he had a bee, E I E I O.\nWith a buzz buzz here and a buzz buzz there, Here a buzz, there a buzz, everywhere a buzz buzz.");
    }
}


const song = new Song();
const animals = [
    new Cow(),
    new Dog(),
    new Cat(),
    new Tiger(),
    new Frog(),
    new Horse(),
    new Sheep(),
    new Duck(),
    new Goat(),
    new Pig(),
    new Donkey(),
    new Rooster(),
    new Mouse(),
    new Fish(),
    new Bee()
];

animals.forEach(animal => {
    song.print("");     
    animal.print();  
    song.print(".");    
});




//3
const prompt = require('prompt-sync')();


let animals = [];


let animalData = [
    { name: "cow", sound: "moo" },
    { name: "dog", sound: "woof" },
    { name: "cat", sound: "meow" },
    { name: "tiger", sound: "roar" },
    { name: "frog", sound: "croak" }
];


animalData.forEach(data => animals.push(data));
let numberOfAnimals = parseInt(prompt("How many animals do you want to add? "), 10);

for (let i = 0; i < numberOfAnimals; i++) {
    let name = prompt(`Enter the name of animal ${i + 1}: `);
    let sound = prompt(`Enter the sound of ${name}: `);

    animals.push({ name: name, sound: sound });
}

animals.forEach(animal => {
    console.log("Old MacDonald had a farm, E I E I O,");
    console.log(`And on his farm, he had a ${animal.name}, E I E I O.`);
    console.log(`With a ${animal.sound} ${animal.sound} here and a ${animal.sound} ${animal.sound} there.`);
    console.log(`Here a ${animal.sound}, there a ${animal.sound}, everywhere a ${animal.sound} ${animal.sound}.`);
    console.log("Old MacDonald had a farm, E I E I O.\n");
});
