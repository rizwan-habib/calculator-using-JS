let clearflag = 0;
function myfunc(param) {
  if (clearflag == 1) {
    clearfunc();
    clearflag = 0;
  }
  let x = param.innerHTML;
  let y = document.getElementById("screen").value;
  if (y != 0) {
    document.getElementById("screen").value += x;
  } else {
    document.getElementById("screen").value = x;
  }
}

function equalFunc() {
  let str = document.getElementById("screen").value;
  let res = math.evaluate(str);
  document.getElementById("screen").value = res;
  clearflag = 1;
}
function clearfunc() {
  document.getElementById("screen").value = 0;
}
