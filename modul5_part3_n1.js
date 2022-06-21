let x = +prompt('Введите число')
console.log(x);
console.log(typeof x)
console.log(isNaN(x))
if (isNaN(x)) {
  console.log('Упс, кажется, вы ошиблись');
} 
else if (x%2==0) {
  console.log('чётное');
}
else {
  console.log('нечётное');
}
