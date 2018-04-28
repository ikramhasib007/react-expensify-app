// const person = {
//     name: 'Ikram',
//     age: 27,
//     location: {
//         city: 'dhaka',
//         temp: 34
//     }
// };
// const { country = 'Bangladesh', name } = person;

// console.log(`Country is ${country}.`);

const address = ['Road# 3', 'Badda', 'Dhaka', '1212'];

const [street, city, state, zip] = address;

console.log(`Street is ${street}, city is ${city}`);