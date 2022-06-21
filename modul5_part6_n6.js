let arr = [1, 1, 1, 1, 1, 5];
let otvet = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[0] != arr[i]){
    otvet = false;
    break;
  }
}
console.log(otvet);