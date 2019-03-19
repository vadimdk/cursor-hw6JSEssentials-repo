       //  Завдання 1 A function which prints str after n seconds.


const strHello = setTimeout(function() { console.log('hello') }, 10000);

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


