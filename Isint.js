function isNumeric(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) &&
           !isNaN(parseFloat(str)) 
  }
 var result=isNumeric("123");
 if(result==true){
     console.log("it is an integer");
 }
 else{
     console.log("it is not an integer");
 }
 