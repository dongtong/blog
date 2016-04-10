//****************************************************************
// set element is unique
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。

let x = new Set([1, 2, 3, 4, 4, 4, 5]);

x.add(6);
x.delete(2);

console.log('The set contains', x.size, 'elements.');
console.log('The set has 1:', x.has(1));
console.log('The set has 8:', x.has(8));

//values and keys are the same in a set
x.forEach((value, key, set) => console.log(value, key, set));

//iterable
for (let value of x) {
  console.log(value);
}

//iterable values
for (let value of x.values()) {
  console.log(value);
}

//iterable keys
for (let value of x.keys()) {
  console.log(value);
}

//iterable entries (key, value)
for (let value of x.entries()) {
  console.log(value);
}

//****************************************************************
// add and remove repeat element

let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(3);

for( let i of set) {
  console.log(i)
}

//****************************************************************
// init set with array
let set = new Set([1,2,3,4]);
console.log([...set])
// => [1, 2, 3, 4]

//****************************************************************
// “Same-value equality” 
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);

for (let i of set) {
  console.log(i)
}

// 1 != "1"
