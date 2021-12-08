const addNumber = (total, number) => {
  total += number;
  return total;
}

function addNumberName(total, number) {
  total += number;
  return total;
}


function somefunction(arg, callback) {
  callback(arg);
}

somefunction("foobar", (arg) => {console.log(`${arg}`, arg)});
somefunction("foobar", function(arg){console.log(`${arg}`, arg)});