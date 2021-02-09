function areaOfTriangle(a, b, c) {
    let periphery = a+b+c;
    let s = periphery/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log('Area is'+ area.toFixed(3));
}
areaOfTriangle(5, 6, 7)