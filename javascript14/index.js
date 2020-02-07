console.log("test index js");
//interpolation
console.log("Hello I am %s string","test");
//styled
console.log("%c Great Text","font-size:50px;color:blue;");
//warning
console.warn("warn here");
//error
console.error("this is error");
//info
console.info("this is info console");
//assert
const p=false;
console.assert(p,"p is false");
//clearing
console.clear();
//Dom elements
h1=document.querySelector("h1")
console.dir(h1);
//grouping together
console.groupCollapsed("Test");
console.log("test index js");
console.log("test index js");
console.log("test index js");
console.groupEnd("Test");
//count
console.count("Rahul");
console.count("Rahul");
console.count("Rohit");
console.count("Rahul");
//timing
console.time("run loop");
for(i=0;i<19000;i++){
   if(i%9==0){
       console.log(i);
   }
}
console.timeEnd("run loop");
//table
console.table();