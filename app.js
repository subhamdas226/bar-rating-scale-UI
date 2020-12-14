
let r1 = document.querySelector(".r1");
let r2 = document.querySelector(".r2");
let r3 = document.querySelector(".r3");
let r4 = document.querySelector(".r4");
let r5 = document.querySelector(".r5");

let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");

let tr1 = document.querySelector(".tr1");
let tr2 = document.querySelector(".tr2");
let tr3 = document.querySelector(".tr3");
let tr4 = document.querySelector(".tr4");
let tr5 = document.querySelector(".tr5");

let csr1 = document.querySelector(".csr1");
let csr2 = document.querySelector(".csr2");
let csr3 = document.querySelector(".csr3");
let csr4 = document.querySelector(".csr4");
let csr5 = document.querySelector(".csr5");

var responsiveness = "";
var Competency = "";
var Trustworthiness = "";
var customer = "";

/********************** Responsiveness rating backgroung ****************************/
r5.onclick = function () {
  console.log("5");

  responsiveness = "Extremely Good";
  r1.style.backgroundColor = "#006400";
  r2.style.backgroundColor = "#006400";
  r3.style.backgroundColor = "#006400";
  r4.style.backgroundColor = "#006400";
  r5.style.backgroundColor = "#006400";
};
r4.onclick = function () {
  console.log("4");

  responsiveness = "Good";
  r1.style.backgroundColor = "#32CD32";
  r2.style.backgroundColor = "#32CD32";
  r3.style.backgroundColor = "#32CD32";
  r4.style.backgroundColor = "#32CD32";
  r5.style.backgroundColor = "#ccbebe";
};
r3.onclick = function () {
  console.log("3");

  responsiveness = "Neutral";
  r1.style.backgroundColor = "#FFA500";
  r2.style.backgroundColor = "#FFA500";
  r3.style.backgroundColor = "#FFA500";
  r4.style.backgroundColor = "#ccbebe";
  r5.style.backgroundColor = "#ccbebe";
};
r2.onclick = function () {
  console.log("2");

  responsiveness = "Bad";
  r1.style.backgroundColor = "#EE5A24";
  r2.style.backgroundColor = "#EE5A24";
  r3.style.backgroundColor = "#ccbebe";
  r4.style.backgroundColor = "#ccbebe";
  r5.style.backgroundColor = "#ccbebe";
};
r1.onclick = function () {
  console.log("1");
  responsiveness = "Extremely Bad";
  r1.style.backgroundColor = "#EA2027";
  r2.style.backgroundColor = "#ccbebe";
  r3.style.backgroundColor = "#ccbebe";
  r4.style.backgroundColor = "#ccbebe";
  r5.style.backgroundColor = "#ccbebe";
};
/********************** Competency rating backgroung ****************************/
c5.onclick = function () {
  console.log("5");

  Competency = "Extremely Good";
  c1.style.backgroundColor = "#006400";
  c2.style.backgroundColor = "#006400";
  c3.style.backgroundColor = "#006400";
  c4.style.backgroundColor = "#006400";
  c5.style.backgroundColor = "#006400";
};
c4.onclick = function () {
  console.log("4");

  Competency = "Good";
  c1.style.backgroundColor = "#32CD32";
  c2.style.backgroundColor = "#32CD32";
  c3.style.backgroundColor = "#32CD32";
  c4.style.backgroundColor = "#32CD32";
  c5.style.backgroundColor = "#ccbebe";
};
c3.onclick = function () {
  console.log("3");

  Competency = "Neutral";
  c1.style.backgroundColor = "#FFA500";
  c2.style.backgroundColor = "#FFA500";
  c3.style.backgroundColor = "#FFA500";
  c4.style.backgroundColor = "#ccbebe";
  c5.style.backgroundColor = "#ccbebe";
};
c2.onclick = function () {
  console.log("2");

  Competency = "Bad";
  c1.style.backgroundColor = "#EE5A24";
  c2.style.backgroundColor = "#EE5A24";
  c3.style.backgroundColor = "#ccbebe";
  c4.style.backgroundColor = "#ccbebe";
  c5.style.backgroundColor = "#ccbebe";
};
c1.onclick = function () {
  console.log("1");
  Competency = "Extremely Bad";
  c1.style.backgroundColor = "#EA2027";
  c2.style.backgroundColor = "#ccbebe";
  c3.style.backgroundColor = "#ccbebe";
  c4.style.backgroundColor = "#ccbebe";
  c5.style.backgroundColor = "#ccbebe";
};

//   Trustworthiness
/********************** Trustworthiness rating backgroung ****************************/
tr5.onclick = function () {
  console.log("5");

  Trustworthiness = "Extremely Good";
  tr1.style.backgroundColor = "#006400";
  tr2.style.backgroundColor = "#006400";
  tr3.style.backgroundColor = "#006400";
  tr4.style.backgroundColor = "#006400";
  tr5.style.backgroundColor = "#006400";
};
tr4.onclick = function () {
  console.log("4");

  Trustworthiness = "Good";
  tr1.style.backgroundColor = "#32CD32";
  tr2.style.backgroundColor = "#32CD32";
  tr3.style.backgroundColor = "#32CD32";
  tr4.style.backgroundColor = "#32CD32";
  tr5.style.backgroundColor = "#ccbebe";
};
tr3.onclick = function () {
  console.log("3");

  Trustworthiness = "Neutral";
  tr1.style.backgroundColor = "#FFA500";
  tr2.style.backgroundColor = "#FFA500";
  tr3.style.backgroundColor = "#FFA500";
  tr4.style.backgroundColor = "#ccbebe";
  tr5.style.backgroundColor = "#ccbebe";
};
tr2.onclick = function () {
  console.log("2");

  Trustworthiness = "Bad";
  tr1.style.backgroundColor = "#EE5A24";
  tr2.style.backgroundColor = "#EE5A24";
  tr3.style.backgroundColor = "#ccbebe";
  tr4.style.backgroundColor = "#ccbebe";
  tr5.style.backgroundColor = "#ccbebe";
};
tr1.onclick = function () {
  console.log("1");
  Trustworthiness = "Extremely Bad";
  tr1.style.backgroundColor = "#EA2027";
  tr2.style.backgroundColor = "#ccbebe";
  tr3.style.backgroundColor = "#ccbebe";
  tr4.style.backgroundColor = "#ccbebe";
  tr5.style.backgroundColor = "#ccbebe";
};
/****************************  Customer support and service ******************/

csr5.onclick = function () {
  console.log("5");

  customer = "Extremely Good";
  csr1.style.backgroundColor = "#006400";
  csr2.style.backgroundColor = "#006400";
  csr3.style.backgroundColor = "#006400";
  csr4.style.backgroundColor = "#006400";
  csr5.style.backgroundColor = "#006400";
};
csr4.onclick = function () {
  console.log("4");

  customer = "Good";
  csr1.style.backgroundColor = "#32CD32";
  csr2.style.backgroundColor = "#32CD32";
  csr3.style.backgroundColor = "#32CD32";
  csr4.style.backgroundColor = "#32CD32";
  csr5.style.backgroundColor = "#ccbebe";
};
csr3.onclick = function () {
  console.log("3");

  customer = "Neutral";
  csr1.style.backgroundColor = "#FFA500";
  csr2.style.backgroundColor = "#FFA500";
  csr3.style.backgroundColor = "#FFA500";
  csr4.style.backgroundColor = "#ccbebe";
  csr5.style.backgroundColor = "#ccbebe";
};
csr2.onclick = function () {
  console.log("2");

  customer = "Bad";
  csr1.style.backgroundColor = "#EE5A24";
  csr2.style.backgroundColor = "#EE5A24";
  csr3.style.backgroundColor = "#ccbebe";
  csr4.style.backgroundColor = "#ccbebe";
  csr5.style.backgroundColor = "#ccbebe";
};
csr1.onclick = function () {
  console.log("1");
  customer = "Extremely Bad";
  csr1.style.backgroundColor = "#EA2027";
  csr2.style.backgroundColor = "#ccbebe";
  csr3.style.backgroundColor = "#ccbebe";
  csr4.style.backgroundColor = "#ccbebe";
  csr5.style.backgroundColor = "#ccbebe";
};

//   r1.addEventListener(
//     "mouseover", function () {

//     r1.style.background ='#e2a';
// })
// r1.addEventListener(
//     "mouseleave", function () {

//     r1.style.background =' #ccbebe';
// })
function valuePrint() {
  console.log("responsiveness: ", responsiveness);
  console.log("Competency : ", Competency);
  console.log("Trustworthiness: ", Trustworthiness);
  console.log("customer service & support: ", customer);
}

