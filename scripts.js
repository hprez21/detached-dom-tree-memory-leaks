
//DEMO 1

var detachedTree;

function create() {
  var ul = document.createElement("ul");
  for (var i = 0; i < 10; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
  }
  detachedTree = ul;
  alert("Created");
}

document.getElementById("demo1").addEventListener("click", create);







//DEMO 2

var x = [];

function grow() {
  x.push(new Array(1000000).join("x"));
  alert("Created");
}

document.getElementById("demo2").addEventListener("click", grow);


//DEMO 3

var x2 = [];

function grow2() {
  console.log("Starting test");
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement("div"));
  }
  x2.push(new Array(1000000).join("x"));
  doSomething();
  doSomething2();
  doSomething3();
  console.log("Ending test");
}

function doSomething(){
    for (var i = 0; i < 100; i++) {
        document.body.appendChild(document.createElement("div"));
      }
      x2.push(new Array(1000000).join("x"));
}

function doSomething2(){
    for (var i = 0; i < 5000; i++) {
        document.body.appendChild(document.createElement("div"));
      }
      x2.push(new Array(1000000).join("x"));
}

function doSomething3(){
    for (var i = 0; i < 50000; i++) {
        document.body.appendChild(document.createElement("div"));
      }
      x2.push(new Array(1000000).join("x"));
}

document.getElementById("demo3").addEventListener("click", grow2);