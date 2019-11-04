import {name,age} from "./js/info";//es6的规范
import {add,mul} from "./js/mathUtils"//commonjs规范

console.log(name)
console.log(age);
console.log(add(10, 20));
console.log(mul(10, 4));

require('./css/normal.css')
require('./css/special.less')

document.writeln("<h2>随便写写</h2>")