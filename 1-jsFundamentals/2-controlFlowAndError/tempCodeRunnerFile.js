let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
  case (true):
    console.log('yep is a string or a boolean');
    // break;
  default:
    console.log('yep is not a string or a number');
}