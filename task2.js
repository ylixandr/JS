let movies = ['Openheimer', 'Home Alone', 'Iron Man'];
for (let index = 0; index < movies.length; index++) {
    console.log(movies[index]);
    
}


console.log('\n');
let carManufacturers = ["Toyota", "Honda", "Ford", "BMW", "Mercedes-Benz"];

// Convert array to a string
let carManufacturersString = carManufacturers.join(',');
console.log(carManufacturersString); // Output: "Toyota,Honda,Ford,BMW,Mercedes-Benz"

// Convert string back to an array
let carManufacturersArray = carManufacturersString.split(',');
console.log(carManufacturersArray); // Output: ["Toyota", "Honda", "Ford", "BMW", "Mercedes-Benz"]
console.log('\n');


let friends = ['Nikita', 'Oleg', 'Ivan', 'Kostya'];
let world = ' Hello';
for (let index = 0; index < friends.length; index++) {
   friends[index] = friends[index] + world;
    
}

console.log(friends);
console.log('\n');


let to_Boolean = [1,0,2,1,1,0];
for (let index = 0; index < to_Boolean.length; index++) { 
     to_Boolean[index] = Boolean(to_Boolean[index]);
}

console.log(to_Boolean);
console.log('\n');

const numbers =  [1,6,7,8,3,4,5,6] ;
console.log(numbers.sort((a,b) => b-a));
console.log('\n');


console.log(numbers.filter(function(value){
    return value>3;
}));
console.log('\n');



let a = 0;
while(a<10){
    console.log(a++);
}
console.log('\n');


for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break; 
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
console.log('\n');


for(let i = 0; i<30;i++){
    if (i%2 ==0){
        console.log(i)
    }
}
