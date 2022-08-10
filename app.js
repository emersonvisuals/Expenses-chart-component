// toggle graph clicks

const mondayDiagram = document.querySelector('.mondayDiagram');
const tuesdayDiagram = document.querySelector('.tuesdayDiagram');
const wednesdayDiagram = document.querySelector('.wednesdayDiagram');
const thursdayDiagram = document.querySelector('.thursdayDiagram');
const fridayDiagram = document.querySelector('.fridayDiagram');
const saturdayDiagram = document.querySelector('.saturdayDiagram');
const sundayDiagram = document.querySelector('.sundayDiagram');

mondayDiagram.addEventListener('click', () => {
    mondayDiagram.classList.toggle('active');

    function checkClicks() {
        if (tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
    
});

tuesdayDiagram.addEventListener('click', () => {
    tuesdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

wednesdayDiagram.addEventListener('click', () => {
    wednesdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

thursdayDiagram.addEventListener('click', () => {
    thursdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

fridayDiagram.addEventListener('click', () => {
    fridayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

saturdayDiagram.addEventListener('click', () => {
    saturdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

sundayDiagram.addEventListener('click', () => {
    sundayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});


// Fetch request (AJAX does not work locally, therefore use fetch)

// const test = fetch('data.json');

// console.log(test);








// regular function sequence (top to bottom no control over what logs)

// function displayText(item) {
//     document.querySelector('.test').innerHTML = item;
// }

// function myFirst() {
//     displayText('hello');
// }

// function mySecond() {
//     displayText('goodbye');
// }

// myFirst();
// mySecond();


// function sequence 

// function myDisplayer(item) {
//     document.querySelector('.test').innerHTML = item;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(10, 5);
//   myDisplayer(result);


// Javascript Callback Examples:
// function myDisplayer(item) {
//      document.querySelector('.test').innerHTML = item;
//    }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(10, 5, myDisplayer);




// function greeting(name) {
//     console.log('hello ' + name);
// }

// function myName(callback) {
//     let name = 'Thomas';
//     callback(name);
// }

// myName(greeting);

// callback function passed into another function. 
// simple example
// the callback function is what is being passed through as an argument





// function displayNumber(item) {
//     console.log(item + ' callback activated');
// }


// function calculateNumber(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);

// }

// calculateNumber(2,2,displayNumber);


// this is a callback function for example: toggle 
// this is a function being called for example: toggle(); first to be called!

// this is a callback function: toggle = () => {}
// this is a functon being called: toggle() WHICH DOES NOT EQUAL () => {}

// callback goes through once the function being called has completed. 

// function firstAction(callback, message) {
//     console.log(message);
//     setTimeout(callback, 2000);
// }

// function secondAction(message) {
//     console.log(message);
// }

// setTimeout(
//     () => firstAction(() => secondAction('i am the second action'), 'i am the first action') , 5000);





// const list = ['apples', 'oranges', 'apples', 'bananas', 'melons', 'apples', 'sdasdasdasdasdas'];
// let count = 0;


// function runList(arr, item) {
//     arr.forEach(item => {
//         if (item === 'oranges') {
//             count++;
//         } else {
//             return;
//         }
//     });
//     console.log(`${count} ${item}`);
// }

// runList(list, 'oranges');

// let longest = '';

// function longestWord(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) longest = arr[i];
//     }
//     console.log(`${longest} ${longest.length}`);
// }

// longestWord(list);


// function firstFunction(words) {
//     console.log(`i am the first response ${words}`);
// } 

// function secondFunction() {
//     console.log('i am the second response');
// }


// setTimeout(secondFunction, 5000);

// setTimeout(() => firstFunction('hello world'), 3000);


// function display(sdsd) { 
//     console.log(sdsd);
// }

// function calculate(num1, num2, callback) {
//     let sum = num1 + num2;
//     let count = 10; 
//     callback(count); // this function SWITCHES with display(sdsd); - variables overide. 
// }

// calculate(1,2,display);




const data = ['hello', 'hello', 'apple', 'carrot', 'cigar', 'rabbit', 'rabbit', 'rabbit'];
let count = 0;

// function howMany(arr, item) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             count++;
//         } else {
//             return;
//         }
//         console.log(`${item} ${count}`);
//     }

// } 

// howMany(data, 'hello');


// function howMany(arr, item) {
//     arr.forEach(item => {
//         if (item === 'hello') count++;
//     });
//     console.log(`${item} ${count}`);
// }

// howMany(data, 'hello');

// let longest = ' ';

// function longestWord(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) longest = arr[i];
//     }
//     console.log(`${longest} ${longest.length}`);
// }

// longestWord(data);


// const str = 'the big brown fox';


// let newArray = str.split(' ');
// let longest = ' ';


// function runLoop(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) longest = arr[i];
//     }
//     console.log(`${longest} ${longest.length}`)
// }

// runLoop(newArray);
