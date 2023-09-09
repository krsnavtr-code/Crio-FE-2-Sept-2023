// Activity -1 
// link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_TRYCATCHES6/
// Question -
// Try Catch in JavaScript
// When an error occurs, JavaScript will normally stop, and generate an error message. The try/catch/finally statement handles some or all of the errors that may occur in a block of code, while still running code.
// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseen things. In the following video you will learn how to use try/catch & throw in action.

// Problem Description
// The getX(x) function returns its parameter x normally under all conditions but throws an error if x equals 5. This must error must be "caught" by the errorHandler() function.
// Complete the errorHandler() function such that:
// errorHandler() function should call the function getX()
// Input to getX() should be x ie. getX(x),
// Return the result obtained from getX() function, if error occurs catch and return the error.

// References
// JavaScript Errors - Throw and Try to Catch
// (MDN) JavaScript: try...catch

// Input
// You are given an integer named, x.

// Output
// Complete the errorHandler function as per the given statement

// Solution -
function errorHandler(x) {
    try{
    const result = getX(x);
      return result
    } catch (error){
      return error;
    }
  }
  
  function getX(x) {
    if (x == 5) {
      throw new Error("Error Occured");
    }
    return x;
  }
  
  module.exports = errorHandler;




//   Activity - 2
//   link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_THROWES6/
//   Question -
// Problem Description
// Given a character X you need to find whether X is an alphabet or not.
// If yes, return a string "Yes" or otherwise throw an error with the message "Not Alphabet".
// Please use the following code snippet to check if X is an alphabet or not.

// References
// (MDN) JavaScript: throw
// JavaScript String functions
// ASCII Table
// https://www.w3schools.com/js/js_comparisons.asp

// Input
// You are given character X.
// Output
// Return string "Yes" or throw the error as per problem statement.

// Sample input 1
// A
// Sample output 1
// Yes

// Sample input 2
// 0
// Sample output 2
// Function should throw an error with the message "Not Alphabet".

// Solution -
function isAlphabet(X) {
    const funCall = checkAlphabet(X);
    if (funCall){
          return "Yes"
    } else {
          const error = new Error("Not Alphabet");
          // return is not working
          throw error;
    }
};

function checkAlphabet(X) {
  let n = X.charCodeAt(0);
  let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);
// You can Google about what is ASCII code to know more about
  // why are we using numbers like 65, 91, 97 & 123
if (strStartsWithALetter) {
  // Yes, it starts with an alphabet
  return true;
} else {
  // No, it doesnt start with an alphabet
  return false;
} 
}

module.exports = isAlphabet;



// Activity - 3
// link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_FOREACHES6/
// Question - 
// ForEach in Javascript
// There are various ways to loop through an array in Javascript. The forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// Problem Description
// Write a method to replace all elements of an array by (i + 1) * arr[i], where i is the position of an element in the array.
// Note: We are following a 0 based indexing.

// References
// JavaScript: forEach method
// Manipulating Arrays using forEach

// Input -
// You are given an array arr.
// Output -
// Return the array after converting all the elements in the array

// Sample input 1 -
// [1, 2, 2, 3, 1, 2]
// Sample output 1 -
// [1, 4, 6, 12, 5, 12]

// Solution -
function convertArray(arr) {
    arr.forEach((item, index) => {
          arr[index] = (index + 1) * item;
    })
    return arr;
}

module.exports = convertArray;


// Activity - 4
// link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_MAPES6/
// Question -
// Problem Description
// Given an array of strings, use the JavaScript map() function to return an array containing length of string at each index. The input array can be of length 0.

// Note
// Return 0 if the string is null or undefined
// References
// JavaScript: map

// Input -
// You are given an array named, arr.
// Output -
// Return the array containing the length of string at each index.

// Sample input 1 -
// ["hello","world"]
// Sample output 1 -
// [5, 5]

// Solution -
function findLength(arr) {
    arr = arr.map((str) => {
          if(str){
                return str.length;
          } else {
                return 0;
          }
    })
    return arr;
}

module.exports = findLength;



// Activity - 5
// link - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_FILTERES6/
// Question -
// Filters in Javascript
// The filter() method basically outputs all the element object that pass a specific test or satisfies a specific function. The return type of the filter() method is an array that consists of all the element(s)/object(s) satisfying the specified function.

// Problem Description
// Given an array of objects having properties, name and city. Use JavaScript filter() function to return an array containing objects having either Bangalore or Hyderabad as their city property value.

// Note: City name can be in lower case too. ex - bangalore, gwalior.

// Tip:
// As input string can be Bangalore or bangalore or BangaLORE, it’s alway better to convert the input string into lowercase and match lowercase with lowercase.
// You can convert a string into lowercase using following Javascript code

// References
// JavaScript: filter

// Array methods

// Input -
// You are given an array named, array.

// Output -
// Return the array after filtering it.

// Sample input 1 -
// [
// {name: "John", city: "delhi" },
// {name: "Peter", city: "bangalore" },
// {name: "Mike", city: "Bangalore" },
// {name: "Rachel", city: "Hyderabad" }
// ]

// Sample output 1 -
// [
// {name: "Peter", city: "bangalore" },
// {name: "Mike", city: "Bangalore" },
// {name: "Rachel", city: "Hyderabad" }
// ]

// Solution 
function filterByCity(arr) {
    const filteredArr = arr.filter((ele)=>{
          let {city} = ele;
          city = city.toLowerCase();
          // let city = obj.city;
          if(city === "bangalore" || city === "hyderabad"){
                return true;
          } else {
                return false;
          }
    })
    return filteredArr;
}

module.exports = filterByCity;