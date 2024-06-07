let arraySample=["hey","killer","raid","criminal","offense"];
//destructing
let[str1,str2]=arraySample;
console.log(str1,str2);
let[str3,str4,...theArgs]=arraySample;
console.log(str3);
console.log(str4);
console.log(theArgs);
let num1,num2;
[num1,num2]=[120,140];//num1 120,num2 140
console.log("num1",num1,"num2",num2);
[num1=50,num2=100]=[150];
console.log("num1",num1);
[num1=50,num2=100]=[150];
console.log("num2",num2);
