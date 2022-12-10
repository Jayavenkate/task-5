//a. odd num 
//Anonymous function
var arr=[1,2,3,4,5];
var result=[];
var odd = function(arr){
    for(var i=0;i<arr.length; i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));
//IIFE
(function odd(arr){
    var result=[];
    for(var i=0;i<arr.length; i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
console.log(result);
}
)([1,2,3,4,5])
//arrow funcion
var odd = (arr)=>{
    var result=[];
    for(var i=0;i<arr.length; i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }}
        return result
        }
        var arr=[1,2,3,4,5];
        console.log(odd(arr));

//c.sum of all numbers in an array
//anonymous
var sum = function (arr){
var arr = [1,2,3,4,];
var sum = 0;
      for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        }
    
       return sum ; 
}
console.log(sum([1,2,3,4]));
//IIFE
 (function sum (arr){
    var sum = 0;
        for(var i = 0; i < arr.length; i++){
          sum = sum + arr[i];
          }
      
          console.log(sum);
  }
 )([1,2,3,4]);
 //arrow function

 var sum = (arr) =>{
  var arr = [1,2,3,4,];
  var sum = 0;
        for(var i = 0; i < arr.length; i++){
          sum = sum + arr[i];
          }
      
         return sum ; 
  }
  console.log(sum([1,2,3,4]));

//b.Convert all the strings to title caps in a string array

//anonymous function
var titleCase = function(str){
   var str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(titleCase("i am software engineer"));
// IIFE
(function titleCase(str){
  var str = str.toLowerCase().split(' ');
 for (var i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 }

 console.log(str.join(' '))
}
)("i am software engineer");
//arrow function
var titleCase = (str) =>{
  var str = str.toLowerCase().split(' ');
 for (var i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 }
 return str.join(' ');
}
console.log(titleCase("i am software engineer"));

//d.Return all the prime numbers in an array

//arrow function
var arr = [1,2,3,4];
var Prime = arr.filter(num =>{
   for(var i=2 ; i<=num; i++){
       if(num % i ===0){
           return true;
       }
       
   }
});
console.log(Prime);

//e. Return all the palindromes in an array
//anonymous function
function returnpalindrome(str) {
var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(returnpalindrome(111,11,33));
//f. Return median of two sorted arrays of the same size.
//anonymous function
var a = [0,2,3,5,9];
  var b = [1,4];
 var median = function(a1, a2) {
    var x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    var len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  console.log(median(a,b));

//g.remove duplicate an array
//anonymous function
var arr = ["scale", "happy", "strength",
"peace", "happy", "happy"];
 var removeDuplicates = function(arr){
    var unique =[];
    for(var i = 0;i<arr.length; i++){
        if(unique.indexOf(arr[i])=== -1){
            unique.push(arr[i]);
        }
    }
    return unique;
 }
 console.log(removeDuplicates(arr));
  
//h. Rotate an array by k times
var arr = [1,2,3,4,5];
var k = 3;
var rotate =function(arr,k){
    for(var i =0;i<k ;i++){
        arr.unshift(arr.pop());
    }
            return arr;
        }
console.log(rotate([1,2,3,4,5],3));


