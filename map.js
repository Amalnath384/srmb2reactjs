let keyes=new WeakMap();
let key1={id:10};
let key2={id:20};
let key3={id:30};
key3=null;

//setting the values
keyes.set(key1,"amal");
keyes.set(key2,"arun");
keyes.set(key3,"abul");

//for each for iterating

keyes.forEach((val,key)=>{
console.log(val +" "+key);

});