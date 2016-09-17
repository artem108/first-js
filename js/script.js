//ДЗ часть 1
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  console.log( pow(x, n) );
}

//ДЗ часть два
var arr=['вася','богуслав','миша','артём', 'гриша'];
var name=prompt("Введите имя");
var i=0;
for ( ;i<arr.length; ++i) if (arr[i]==name) {
  alert("Привет!"+name); break;
}
if (i==arr.length) alert("Имя не верно");
