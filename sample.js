//Example for call by value
function changePrimitive(value) {
  console.log("value:", value);

  value = 200;
  console.log("value:", value);
}

let num = 5;
changePrimitive(num);

//Example for call by value
function changeObject(obj) {
  console.log("obj:", obj);

  obj.country = "India";
  console.log("obj:", obj);
  obj = 600;
  console.log("obj:", obj);
}

let person = { name: "Madhav", age: 20 };
console.log("person: ", person);

changeObject(person);
console.log("person: ", person);
