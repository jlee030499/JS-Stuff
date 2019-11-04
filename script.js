/* exercise 1 */
var string1 = "Hello";
var string2 = "Hello1r";
var space = " ";

var n1 = string1.length;
var n2 = string2.length;

if(n1 == n2){
  alert("Same Length!!!")
} else{
  alert("Not the Same Length :+")
}

/*exercise 2*/
var num1 = 1;
var num2 = 4;

if (num1 == num2){
  alert("They are equal!")
}else if(num1>num2){
  alert(num1 + " is bigger than " + num2)
}else if(num1 <= num2){
  alert(num2 +" is greater than or equal to " +num1)
}else if(num1 >= num2){
  alert(num1 +" is greater than or equal to " +num2)
}else{
  alert(num2 +" is bigger than "+ num1)
}


/*exercise 3 */

stringA("hi"," ","me")

function stringA(a,b,c){
  console.log(a+b+c);
}

/*exercise 4*/

console.log(length1("HELLOOOOO"))

function length1(num){
  if (num.length <= 3){
    return "Short Word"
  }else if(num.length <= 7 ){
    return "Medium Word"
  }else if(num.length >= 8){
    return "Long Word"
  }
}

/*exercise 5 */

var someArray = ["hello", "my", "name", "is", "Jason", "yo"];
var hello = Math.floor(Math.random()*someArray.length);
var hi =Math.floor(Math.random()*someArray.length);
var ho =Math.floor(Math.random()*someArray.length);
console.log(someArray[hello]+ " "+ someArray[hi]+ " "+someArray[ho])
