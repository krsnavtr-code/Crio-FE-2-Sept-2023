// Activity - 1  
// Link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARRAYSIMPLEES6/
// Question -
//            Problem Description
//            Write a method which returns an array without the listed values
//            References
//            Arrays
//            (MDN) JavaScript: Array
//            Nesting For Loops in JavaScript
//            Time complexity in JavaScript (Optional)
//            ArraInput -
//            arr: The given array
//            without: A list of elements which are to be removed from arr.
//            Output -
//            Return the array after removing the listed values.
//            Sample input 1 -
//            arr: [1, 2, 2, 3, 1, 2]
//            without: [2, 3]
//            Sample output 1 -
//            [1, 1]
// Solution -
function removeListedValues(arr, without) {
    let newArr = arr.filter((item) => {
        if (without.includes(item)) {
            return false;
        } else {
            return true;
        }
    });
    return newArr;
}
module.exports = removeListedValues;



// Activity - 2
// Link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_OBJECTES6/
//Question -
//              Problem Description
//              The personDetails() function is called with two parameters, a and b. These represent the first name and last name of a person.
//              Complete the function personDetail() such that it returns an object modelling a person that has the following properties:
//              firstName: this value is equal to parameter a.
//              lastName: this value is equal to parameter b.
//              fullName: this value is equal to concatenation of a and b separated by a space.
//              References
//              JavaScript Objects

//              Input
//              You are given two parameters a, b. These represent the first name and last name of a person.
//              Output
//              Return the object as per the problem statement.

//              Sample input 1
//              a = John, b = Smith
//              Sample output 1
//              {
//                  "firstName": "John",
//                  "lastName": "Smith",
//                  "fullName": "John Smith"
//              }

// Solution -
function personDetail(a, b) {
    let persionList = {
        firstName: a,
        lastName: b,
        fullName: a + " " + b
    }
    return persionList;
}
module.exports = personDetail;



// Activity - 3
// Link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_DATEES6/
// Question -
//              Problem Description
//              You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.
//              Today's day is the date when the program is executed.

//              Note
//              Sample I/O considers today's date as 28/08/2020
//              You may assume all the dates in the input are correct and in the given format
//              The given date is in the past as compared to today
//              JavaScript new Date() constructor takes in date in the "MM/DD/YYYY" format
//              Use let todaysDate = new Date() to get today’s date
//              Use Split() function to split the input date string 10/08/2020 where you can pass "/" as a deluminator. You can check the reference link given below to know how to use Split() function.
//              Keep in mind, input strings format is "DD/MM/YYYY" and the JavaScript new Date() constructor take date in the “MM/DD/YYYY” format.
//              References
//              JavaScript: Date
//              Date methods
//              JavaScript: String.split()

//              Input
//              You are given a string containing the date in the given format
//              Output
//              Return the number of days between today and the given date.

//              Sample input 1
//              10/08/2020
//              Sample output 1
//              18

// Solution -
function getNumberOfDays(date) {
    const dateArr = date.split("/");
    const newDateString = dateArr[1] + "/" + dateArr[0] + "/" + dateArr[2];
    let givenDate = new Date(newDateString).setUTCHours(0, 0, 0, 0); // given date milliseconds
    const todayStartDate = new Date().setUTCHours(0, 0, 0, 0); // milli seconds of today date
    const timeDifference = todayStartDate - givenDate;
    const days = timeDifference / (1000 * 60 * 60 * 24);
    return days;
}

module.exports = getNumberOfDays;



// Activity - 4
// Link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARROWES6/
// Question -
//              Problem Description
//              Create an arrow function named modify() which takes an integer array as input and modify the array as follows -
//              If an element of the array is prime, then add one to the element
//              If an element of the array is not prime, then multiply the element by 2.

//              Return the modified array.
//              References
//              Arrow functions
//              Checking primality of an integer

//              Input -
//              You are given an array named, array.
//              Output -
//              Return the array after modifying it.

//              Sample input 1 -
//              [1, 2, 3, 4, 5]
//              Sample output 1 -
//              [2, 3, 4, 8, 6]
// Solution -
let modify = (array) => {
    return array.map(item => {
        if (isPrime(item)) {
            return item + 1;
        } else {
            return item * 2;
        }
    });
}

function isPrime(n) {
    if (n == 0 || n == 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

module.exports = modify;