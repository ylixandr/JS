function terminal(yourName){
    name = 'Ilya';
    if (yourName == name)
    {
        console.log(`Hello, ${name}`)
    }

    else{
        console.log('No name');
    }
}

terminal('Ilya');
terminal('afafs');
console.log('\n');

function calcType(smth){
    console.log(typeof(smth));
}

calcType('string');
calcType(1);
calcType(true);
console.log('\n');

function isPrime(number) {
    if (number < 2) {
    return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

// Example usage:
console.log(isPrime(11)); 
console.log(isPrime(25)); 
