       //  Завдання 1 A function which prints str after n seconds.


//const strHello = setTimeout(function() { console.log('hello') }, 10000);

      //Завдання 2 A function which returns sum of all numbers from 1 to n using recursion

function sumAll(n) { 
if (n == 1) return 1;
  return n + sumAll(n - 1);
}


//console.log(sumAll(2)); // 3
//console.log(sumAll(4)); // 10


      // Завдання 3     A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

const bombTimer = function(str,time) {
  let i = time;
  let timerId = setTimeout(function go() {
    console.log(i);
    if (i > 0) setTimeout(go, 1000);
    i--;
  }, 1000);
    let printStr = setTimeout(function print() {
        console.log('')},1600*time);  
    
}









     // Завдання 4  A function which returns factorial of number using recursion 

const factorial = function(n) {
  if(n != 1){
    return n * factorial(n - 1); 
  }   
    else {
        return 1;
    }
}



//    Завдання 6. A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.


const filterNumbers = function (arr, maxNumber) { 
 
    const newArr = arr.filter(chekingFunction);

   function chekingFunction(value) {
       return value < maxNumber;
   }
return newArr;
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]


//    Завдання 7 A function that returns object with min and max numbers from array of numbers.
const arr = [1, 4, 8, 2, 20];
const minMax = function (arr) { 
let minMaxObj = new Object();   
    let getMaxOfArray = function (arr) {
  return Math.max.apply(null, arr);
};                 
   let getMinOfArray = function (arr) {
  return Math.min.apply(null, arr);
};                                      
    minMaxObj.max = getMaxOfArray (arr);
    minMaxObj.min = getMinOfArray (arr);    

return minMaxObj;
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }


// Завдання 10.A function accepts array of users and returns object of users where key is user id and value user data.
const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' },
];


  function usersToObject(users) {  
  const usersObject = {};
    users.forEach((user) =>{
        usersObject[user.id] = user;
    })
      
      
   return usersObject;     
 }
 

usersToObject(users);
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };

    //9. A function which concats all first-nested arrays in one array (use reduce):

const arr1 = [[0, 1], [2, 3], [4, 5]];

function concatFirstNestedArrays(arr1) {
    
let concated = arr1.reduce(function(a, b) {
  return a.concat(b);
});
    return concated;

}

concatFirstNestedArrays(arr1);

//concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]





















