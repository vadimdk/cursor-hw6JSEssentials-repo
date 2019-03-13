       //  Завдання 1 A function which prints str after n seconds.


//setTimeout(function() { console.log('hello') }, 10000);

      //Завдання 2 A function which returns sum of all numbers from 1 to n using recursion

//function sumAll(n) { 
//if (n == 1) return 1;
//  return n + sumAll(n - 1);
//}


//console.log(sumAll(2)); // 3
//console.log(sumAll(4)); // 10


      // Завдання 3     A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

//function bombTimer(str,time) {
//  let i = time;
//  var timerId = setTimeout(function go() {
//    console.log(i);
//    if (i > 0) setTimeout(go, 1000);
//    i--;
//  }, 1000);
//    var printStr = setTimeout(function print() {
//        console.log('Boooom')},1600*time);  
//    
//}
//
//bombTimer('Boooom', 3);


     // Завдання 4  A function which returns factorial of number using recursion 

//function factorial(n) {
//  if(n != 1){
//    return n * factorial(n - 1); 
//  }   
//    else {
//        return 1;
//    }
//}
//
//console.log( factorial(5) );
//console.log( factorial(3) );

