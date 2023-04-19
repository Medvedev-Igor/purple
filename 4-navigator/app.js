const addressLat = 20;
const addressLong = 30;
const positionLat = 10;
const positionLong = 40;
const latProjection = addressLat - positionLat;
const longProjection = addressLong - positionLong;
const distance = Math.round(Math.sqrt(latProjection ** 2 + longProjection ** 2));
console.log(`Растояние до точки ${distance} метров`);

// 2й метод
const distanceMethod = (x0,y0, x1,y1)=> Math.hypot (x1-x0, y1-y0);
console.log (distanceMethod (20,30,10,40));
const result = 14.1421;
console.log(`Растояние до точки ${result} метров`);