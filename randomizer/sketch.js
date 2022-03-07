var personas = ["Koby1","Koby2","Koby3","Koby4"]

function setup() {
  createCanvas(600, 600);
  background(220);

  console.log("initial array is")
  console.log(personas);

  personas.shift();
  console.log("array after shift");
  console.log(personas);

  personas.unshift("Koby5");
  console.log("array after unshift")
  console.log(personas);
}

function draw() {

}
