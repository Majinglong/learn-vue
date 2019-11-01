import {flag,sum} from "./aaa.js";
import {num0} from "./aaa.js";
import {mul} from "./aaa.js";
import {Person} from "./aaa.js";
import add from "./aaa.js";//使用默认导出的可以自己命名
//统一全部导入
import * as aaa from "./aaa.js"

if (flag){
  console.log("成功打印了");
}

console.log(sum(10, 20));
console.log(mul(num0));
const p = new Person();
p.run();
add("导入一个默认的函数")
console.log(aaa.flag);