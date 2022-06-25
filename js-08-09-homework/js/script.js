// №1

// let cars = [
//     { model: "Jeep", price: 50000, carMileage: 40000 },
//     { model: "Audi", price: 46000, carMileage: 80000 },
//     { model: "BMW", price: 32000, carMileage: 340000 },
//     { model: "Kia", price: 67500, carMileage: 70000 },
//     { model: "Geely", price: 22000, carMileage: 49000 },
// ]



// function sortCars(arr) {
//     let sortCars = [];
//     let carsName = [];
//     sortCars = arr.filter(item => {
//         return item.carMileage < 50000;
//     });
//     console.log(sortCars);
//     let value = sortCars.reduce((acc, item) => {
//         return acc += item.price / sortCars.length;
//     }, 0);
//     console.log(`Cредняя цена автомобилей с пробегом < 50000:`, value);
//     sortCars.forEach(item => carsName.push(item.model));
//     console.log(carsName);
// }
// sortCars(cars);



// №2

// const student = {
//     name: "Your name",
//     age: "Your age",
//     id: 1,
// }

// console.log(Object.entries(student));
// const newCollection = new Map(Object.entries(student));


// newCollection.set(7, "число");
// newCollection.set(true, { descr: "boolean", value: false });
// console.log(newCollection);
// console.log(newCollection.get('name'));



// // // №3 
// for (let key of newCollection.keys()) {
//     console.log(key);
// }
// for (let value of newCollection.values()) {
//     console.log(value);
// }
// for (let entry of newCollection.entries()) {
//     console.log(entry);
// }



// №4 

// let amount = {
//     apple: 440,
//     burger: 316,
//     juice: 1120,
// }
// let ourProducts = Object.fromEntries(
//     Object.entries(amount).map(([key, value]) => {
//         return [key, value / 2]
//     })
// );
// console.log(ourProducts);




// // №5 

// function getSummProducts(obj) {
//     let sum = 0;
//     for (let products of Object.values(obj)) {
//         sum += products;
//     }
//     return sum;
// }
// console.log(getSummProducts(amount));




// №6
// let numbers = [1, 2, 3, 4, 22, 5, 17, 4, 5, 2, 6, 6, 9, 7, 2, 9, 5];

// function unigueNum(arr) {
//     return [...new Set(arr)]
// };
// console.log(unigueNum(numbers));



// №7 

// const weather = {
//     "coord": {
//         "lon": -122.08,
//         "lat": 37.39
//     },
//     "weather": [{
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//     }],
//     "base": "stations",
//     "main": {
//         "temp": 282.55,
//         "feels_like": 281.86,
//         "temp_min": 280.37,
//         "temp_max": 284.26,
//         "pressure": 1023,
//         "humidity": 100
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.5,
//         "deg": 350
//     },
//     "clouds": {
//         "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//         "type": 1,
//         "id": 5122,
//         "message": 0.0139,
//         "country": "US",
//         "sunrise": 1560343627,
//         "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
// }

// let copyObject = JSON.parse(JSON.stringify(weather));


// console.log(copyObject);