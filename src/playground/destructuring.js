///
/// Object Destructuring
///

// const person = {
//     name: 'Something Else',
//     age: 26,
//     location: {
//         city: 'New Orleans',
//         temp: 92
//     }
// }


// const { name: firstName = 'Logan', age} = person
// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Dune',
//     author: 'JK Rowling',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// 

// console.log(publisherName) // Penguin - Self-Published

///
/// Array Destructuring 
///

const address = ['800 Behrman', 'Metairie', 'Louisiana'];

const [street, city, state, zip = '70001'] = address

console.log(`You are in ${city} ${state} ${zip}`)

const item = ['Java Chip', '$2.00', '$4.50', '$2.75']

const [drink, , m] = item

console.log(`A medium ${drink} costs ${m}`)