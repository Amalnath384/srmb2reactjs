let weakmap=new WeakMap();
let val1={value:"some data"};
let key1={key:1};
val1=null;
weakmap.set(key1,val1);
console.log(weakmap.get(key1));