console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

//exercise 3 while loop I WAS NOT SURE IF YOU WANTED ME TO REPLACE THE CODE OR NOT SO I JUST COMMENTED IT OUT
console.log("EXERCISE 3 for while:\n==========\n");
let i = 1;
while (i <= 100) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

//Exercise 3 do/while
console.log("EXERCISE 3 for do/while:\n==========\n");
i = 1;
do {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    }
}
//Exercise 3 while
console.log("EXERCISE 3 for 2 WHILE:\n==========\n");
i = 1;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    i++;
}
//exercise 3 do/while
console.log("EXERCISE 3 for 2 DO/WHILE:\n==========\n");
i = 1; 
do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    i++;
} while (i <= 100);
//exercise 5 bonus
/*console.log("EXERCISE 5 BONUS for 2 Custom:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

console.log(`Using fizzDivisor: ${fizzDivisor}, buzzDivisor: ${buzzDivisor}`);
console.log(`Loop starts at: ${start}, ends at: ${end}`);
//loop from start to end
for (let i = start; i <= end; i++) {
    if (i % fizzDivisor == 0) {
        console.log("FIZZBUZZ");
    } else if (i % fizzDivisor == 0) {
        console.log("FIZZ");
    } else if (i % buzzDivisor == 0) {
        console.log("BUZZ");
    }
}*/

// exercise 4
console.log("EXERCISE 4: \n=========\n");
let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;
for (let i = 0; i <=n; i++) {
    if (i == value) {
        console.log("Found value!");
        found = true;
        break;
    }
}
if (!found) {
    console.log("DId not find value.");
}
//exercise 5 bonus
console.log("EXERCISE 5 BONUS for 2 Custom:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

console.log(`Using fizzDivisor: ${fizzDivisor}, buzzDivisor: ${buzzDivisor}`);
console.log(`Loop starts at: ${start}, ends at: ${end}`);
//loop from start to end
for (let i = start; i <= end; i++) {
    if (i % fizzDivisor == 0) {
        console.log("FIZZBUZZ");
    } else if (i % fizzDivisor == 0) {
        console.log("FIZZ");
    } else if (i % buzzDivisor == 0) {
        console.log("BUZZ");
    }
}
