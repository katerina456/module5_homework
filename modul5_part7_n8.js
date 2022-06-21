let myMap = new Map([
  [1, 'one'],
  [false, 0],
  ['string', 'massiv']
]);

for (let name of myMap.keys()) {
  console.log(`Ключ — ${name}, значение — ${myMap.get(name)}`);
}