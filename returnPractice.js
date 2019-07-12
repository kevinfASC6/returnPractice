//by default all JS functions return a value 
//if the return value is not specified, it will return undefined
function someFunc() {   
//return syntax 
return "Hello world";  
//return 5; 
console.log("will this code print"); //this will not print because it is after "return" 
} 

const result = someFunc(); 

console.log(result); 