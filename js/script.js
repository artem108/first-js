//ДЗ часть 1
// function pow(x, n) {
//   var result = x;
//
//   for (var i = 1; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// var x = prompt("x?", '');
// var n = prompt("n?", '');
//
// if (n <= 1) {
//   alert('Степень ' + n +
//     'не поддерживается, введите целую степень, большую 1'
//   );
// } else {
//   console.log( pow(x, n) );
// }

//ДЗ часть два
var arr = [ name1, name2, name3, name4, name5];
var name1 = prompt('Введите имя 1');
var name2 = prompt('Введите имя 2');
var name3 = prompt('Введите имя 3');
var name4 = prompt('Введите имя 4');
var name5 = prompt('Введите имя 5');
var name=prompt("Введите имя");
var i=0;
for ( ; i<name.length; ++i) if (name[i]==name) {
  alert("Привет!"+name); break;
}
if (i==name.length) alert("Имя не верно");
