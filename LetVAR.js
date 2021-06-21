 // calling a after definition 
 var a = 8;
 //console.log(a); //8

 // calling b after definition 
 let b = 7;
 //console.log(b); //7

 // calling var c before definition 
 //console.log(c); //will return undefined
// var c = 14;

 // calling let d before definition 
// console.log(d); //will give error
// let d = 22;

 function process(){
     var a=325;
     let b=427;
    
     console.log(b);
{
    let z=457;
    console.log(z);
}
console.log(a);
 }
 process();


