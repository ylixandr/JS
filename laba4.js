/*Задание 3. Наследование
Create 2 objects: animal and cat, add move property to animal object, cat object
must inherit move property from object animal. */

class Animal{
    move(){
        console.log('animal moved');
    }
}

class Cat extends Animal{

}

let animal = new Animal();
animal.move();
let cat = new Cat();
console.log('cat method');
cat.move();