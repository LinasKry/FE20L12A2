var persNames = [
  "Jon Snow",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Theon Greyjoy",
  "Tyrion Lannister",
  "Arya Stark",
];
console.log(persNames[1]);
console.log(persNames[persNames.length - 1]);
document.write(persNames[1] + "<br>" + persNames[persNames.length - 1]);
var eilNr = prompt(
  "Kelintą asmenį atspausdinti?" + "\n" + "galimos reikšmės(1-6)"
);
if (eilNr > 6) {
  alert("Tokio asmens nėra");
  throw new Error("Nereik rašinėt nesamonių :)");
} else {
  var eilNr = eilNr - 1;
  console.log("Jūsų asmuo yra:");
  console.log(persNames[eilNr]);
  document.write("<br>" + "<br>" + "Jūsų asmuo yra:   " + persNames[eilNr]);
}
