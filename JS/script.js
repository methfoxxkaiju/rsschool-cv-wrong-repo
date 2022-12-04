"use strict"
/*let filterRange = (arr, a, b) => {
    let newArr = [];
    for (let i of arr) {
        if (i >= a && i <=b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [5, 3, 8, 1]; 
alert(filterRange(arr, 1, 4));

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // удалить, если за пределами интервала
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  
  alert( arr ); */

/*const arr = [1, 2, 3, [4, 5, 6]];
function getOneArray(arr) {
  let arr2 = arr.pop()
  for (let i = 0; i < arr2.length; i++){
    arr.push(arr2[i]); 
  }
  return arr;
}

console.log(getOneArray(arr)); */

/*function copySorted(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr.sort()
}

let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr)); */

/*function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
} */

/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((item) => item.name)

alert(names); */

/*Итерируемый объект
let range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++}
      } else return {done: true};
    }
  };
};

for (let num of range) {
  alert(num);
} */

/*Принимаем массив и возвращаем уникальные значения
function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); */

/*Фильтрация анаграмм
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); */