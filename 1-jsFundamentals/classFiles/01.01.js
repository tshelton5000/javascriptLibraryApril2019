/*
Challenge 1:
Make 3 variables.  Your first variable should be a string.  Your second variable should be an array, which
has a string inside.  Your final variable should be an object, which has a property which is a string.

Write 3 console.log messages which show the string from each type of variable.
*/
let str = 'eleven fifty';
let arr = ['1150', 1150];
//index #:   0       1
let obj = {string: '1150 academy'};

console.log(str);
console.log(arr[0], arr[1]);
console.log(obj.string);

/*
Challenge 2:
Make 7 variables: one is a string, one a number, one a boolean, one is undefined, one null, one
an array, and one an object.  Write a console.log message showing the type of each variable.  What
surprises you about this?

hint: typeof
*/
let str = '1150';
let num = 1150;
let bool = true;
let undef = undefined;
let nullVar = null;
let arr = [1, 2, 3, 4, 5];
let obj = {keyA: 'Zach', keyB: 'Scott'};

console.log(typeof str,typeof num,typeof bool,typeof undef,typeof nullVar,typeof arr,typeof obj);

/*
Challenge 3:
Make 2 variables.  The first is an array, the second is an object.  Inside each variable, store a string,
a number, a boolean, an undefined, a null, an array, and an object.
Once you've defined each variable, use console.log messages to output every value within your array and
your object.
*/
let newArr = ['holly', 1150, true, undefined, null, [1,2,3], {key: 'Zach', key2: 'Brie'}];
let newObj = {str: 'holly', num: 1150, bool: true, undef: undefined, nu: null, arr: [1,2,3], obj: {key: 'Zach', key2: 'Brie'}};

console.log(newArr[0], newArr[1], newArr[2], newArr[3], newArr[4], newArr[5], newArr[6]);
console.log(newObj.str, newObj.num, newObj.bool, newObj.undef, newObj.nu, newObj.arr, newObj.obj);