let x = true;
type = typeof x;
console.log(type)
switch (type) {
  case 'number':
    console.log(x + ' - число');
    break;
  case 'string':
    console.log(x + ' - строка');
    break;
  case 'boolean':
    console.log(x + ' - логический');
    break;
  default:
    console.log('Тип x не определён')
}