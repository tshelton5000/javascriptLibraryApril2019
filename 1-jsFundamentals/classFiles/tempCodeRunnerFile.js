function func1(input){ //'input' refers to 'func2' from line 100
  return input(7);
}
function func2(num){
  return num + ':i am a number';
}

console.log(func1(func2));