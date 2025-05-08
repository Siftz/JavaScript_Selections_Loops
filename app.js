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
