var triangle1Area = getTriangleArea(10, 15),
  triangle2Area = getTriangleArea(0, 5),
  triangle3Area = getTriangleArea(10, 0);

function getTriangleArea(a, h) {

  if ( (a > 0) && (h > 0)) {
    var triangleArea = a*h/2
  } else {
    var triangleArea = 'Nieprawidłowe dane'
  }

  return triangleArea;

}

//4.
console.log(getTriangleArea(10, 6));

//5.
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);