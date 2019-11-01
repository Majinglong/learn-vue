let flag =true;
function sum(n1,n2){
  return n1+n2;
}
//1.导出 export定义的对象
export {flag,sum}
//2.直接导出参数 函数 对象
export let num0 = 10;
export function mul(number) {
   return number * number;
}
export class Person {
  run(){
    console.log("我是对象的方法");
  }
}

const  address = "china";
//export  default  address;//只能有一个default导出的， 引用的时候可以任意命名
export  default function (arg) {
  console.log(arg);
}