/*Home Work 1
let country = `United Kingdom`;
console.log(country);
let continent = `Europe`;
console.log(continent);
let population = 68;
console.log(population);
let isIsland = true;
console.log(isIsland);
let countryDescription = `The ${country} is located in ${continent}, ${population} million people live there.`;
console.log(countryDescription); */

/*Home Work 2

let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.89;

let sarahBMI = weightSarah / heightSarah ** 2;
console.log(sarahBMI);
if (sarahBMI < 18.5) { 
        console.log(`Sarah is underweight.`)
}
else if ( sarahBMI >= 18.5 && sarahBMI <= 25); {
    console.log(`Sarah's weight is normal.`)
}

let bobBMI = weightBob / heightBob ** 2;
console.log(bobBMI);
if (bobBMI < 18.5 || bobBMI > 25) {
    console.log(`Bob is underweight or overweight.`)
}
else {
    console.log(`Bob's weight is normal.`)
}*/

/*Home Work 3

let number = 8;
console.log(number % 2 ? `odd` : `even`)

let isLoggedIn = true;
console.log(isLoggedIn ? `Hello again 🙃` : `Who are you?`)

let iphone = 1000;
let numberIphone = 25;
let isAvailable = true;
console.log(isAvailable ? `${iphone * numberIphone} euros`: `Sorry, this item is out of stock`)

let year = 2023;
console.log(year % 4==0 ? `2023 is a Leap Year` : `2023 is not a Leap Year`)

let country = `is`;
switch (country) {
    case `md`:
        console.log(`Republic of Moldova`)
        break
    case `ua`:
        console.log(`Ukraine`)
        break
    case `uk`:
        console.log(`United Kingdom`)
        break
    case `de`:
        console.log(`Germany`)
        break
    case `is`:
        console.log(`Iceland`)
        break
    default:
        console.log(`This country code doesn't exist`)
}

let grade = 45;
switch (true) {
    case grade >=97 && grade <=100 : 
        console.log(`Congrats, you have an A+`)
        break
    case grade >=90 : 
        console.log(`You have an A`)
        break
    case grade >=80 : 
        console.log(`You have a B`)
        break
    case grade >=70 : 
        console.log(`You have a C`)
        break
    case grade >=60 : 
        console.log(`You have a D`)
        break
    case grade >=20 : 
        console.log(`You Failed the exam`)
        break
    default:
    console.log (`you didn't score a single point!`)
}

function tellFortune (n, z, y, x) {
console.log(`You will be ${x} in ${y}, and will get married to ${z} with ${n} kids`)
}
tellFortune (1, `Dmitri`, `New York`, `a CTO`)
tellFortune (2, `John`, `Lisbon`, `an Artist`)
tellFortune (3, `Ryan`, `London`, `a Photographer`)

function calculatedDogAge (age) {
    let dogAge = age * 7;
    console.log(`Your dog is ${dogAge} years old in Dog Years.`)
}
calculatedDogAge (1)
calculatedDogAge (6)
calculatedDogAge (12)

const calculationSupply = (age, foodKg, maxYears=100) => {
    const result = (maxYears-age)*foodKg*365
console.log(`You will need ${result} kg of food to survive till you're ${maxYears} years old.` )
}
calculationSupply (35, 1, 90)
calculationSupply (25, 2, 80)
calculationSupply (30, 1.5) */

/*Home Work 4

const fruits = []
fruits.push(`apple`, `banana`, `orange`)
console.log(fruits.length)
console.log(fruits)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.shift ()
console.log(numbers)

const colors = [`red`, `green`, `blue`, `yellow`]
console.log(colors)
console.log(colors.indexOf(`green`))
console.log(colors.includes(`orange`))

const names = [`John`, `Jane`, `Mike`, `Jennifer`]
names.unshift(`David`)
console.log(names.indexOf(`Mike`))
console.log(names)

const figures = [2, 4, 6, 8, 10]
console.log(figures.includes(5))
figures.push(12)
console.log(figures)

const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]
console.log(months.slice(6, -1))
const monthsLastTask = months.filter((word) => word.length > 5)
console.log(monthsLastTask)
console.log(monthsLastTask.join(`-`))

months.sort()
console.log(months)

const result = months.filter((word) => word.length > 3)
console.log(result) */

/*Home Work 5
//----------1----------//
const fruits = [`apple`, `banana`, `orange`]
for (let i = 0; i <= 2; i++) {
    console.log(fruits[i])
}
//----------2----------//

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)

//----------3----------//

const names = [`John`, `Jane`, `Mikhael`, `Jennifer`, `Bobby`]
let nameLength = []
for (let i = 0; i < names.length; i++) {
    nameLength.push(names[i].length);
}
console.log(nameLength);

//----------4----------//

const departments = [
[`Legal`, `John`, `Laura`, `Martin`],
[`Finance`, `Elisa`, `Guy`, `Alice`],
[`IT`, `Dave`, `Jason`, `Irene`],
[`Sales`, `Silvia`, `Jack`, `Nicole`]
]
console.log(departments)
for (var i = 0; i < departments.length; i++) {
    for (var j = 1; j < departments[i].length; j++) {
      console.log(departments[i][j]);
    }
  }
  let employeeNames = []
    for (let i = 0; i < departments.length; i++) {
        for (let j = 1; j < departments[i].length; j++)
        employeeNames.push(departments[i][j]);
    }
    employeeNames.sort ();
    console.log(employeeNames);

    //----------5----------//

const person = {
    firstName: `John`,
    lastName: `Doe`,
    age: 30,
    profession: `Developer`
}
function countProperties (person) {
    let properties = Object.keys(person);
    return properties.length;
}
let numberProperties = countProperties(person);
console.log(numberProperties);

//----------6----------//

const numbersN = [];
for (let i = 1; i <= 5; i++) {
    numbersN.push(i);
};
console.log(numbersN);

//----------7----------//

const numbersBiggest = [5, 8, 2, 10, 3]

  function largestElement(numbers) {
    let theBiggestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > theBiggestNumber) {
            theBiggestNumber = numbers[i];
        }
    }
    return theBiggestNumber;
}
  
const result = largestElement(numbersBiggest);

console.log(result);

//----------8----------//

const subjects = { 
    math: 8, 
    literature: 7, 
    history: 9,
    english: 10
}
const grades = Object.values(subjects);
console.log(grades)

    let summ = 0; 
    for (let i = 0; i < grades.length; i++) {
        summ += grades[i]
    }
    let average = summ / grades.length

console.log(average)

//----------9----------//

const dog = new Object();
dog.name = `Java`;
dog.age = 2;
dog.color = `black`;
  
  function addPuppies(dog, numberPuppies) {
      dog.puppies = [];
      for (let i = 1; i <= numberPuppies; i++){
          dog.puppies.push(`"Puppie_${i}"`);
      }
  }
  
  addPuppies(dog, 5);
  console.log(dog);*/

//Home Work 6//

//--------1--------//

const person = {
    name: `John`,
    age: 30,
    city: `New-York`
}
Object.getOwnPropertyNames(person).forEach((val, idx, array) => {
    console.log(`${val} : ${person[val]}`);
})
//--------2--------//

for(let key in person) {
    if(person[key] === 'John');
    (person[key] === 30);
    (person[key] === 'New-York')
    {
      console.log(true);
    }
  }
 
  //--------3--------//

const greet = {
    prop1: `Hello`,
    prop2: `World`,
    prop3: `!`
}
function combineValues(greet) {
    let combinedValue = ``;
    let keys = Object.keys(greet);
    let i = 0;
   
    do {
       combinedValue += greet[keys[i]];
       i++;
    } while (i < keys.length);
   
    return combinedValue;
    
   }
   console.log(combineValues(greet))

   //--------4--------//

let text = (`Hello world, my name is Albert`);
let textLower = text.toLowerCase()

function vowels(textLower) {
    let sentence = textLower.split(``)
    let vowelsList = [`a`, `e`, `i`, `o`, `u`, `y`];
    let vowelsCount = 0;
    let i = 0;
    while (i < sentence.length) {
        i++
        if(vowelsList.indexOf(sentence[i]) !== -1) {
        vowelsCount +=1;
        }
    }
    return vowelsCount
} 
console.log(vowels(textLower))

//--------5--------//

let grades = {
    John: [8, 7, 9], 
    Mary: [9, 9, 10], 
    Alex: [6, 8, 7]
}
let resultGrades = Object.assign({}, grades);

const averageCount = (grades) => {
    for (element in grades) {
        let gradeValue = grades[element];
        let i = 0;
        let sum = 0;
        let arrayLength = gradeValue.length;

        while (i < arrayLength) {
            sum += gradeValue[i];
            i++;
        }
        let medium = sum / arrayLength;
        resultGrades[element] = `medium: ${medium}`;
    }
    return resultGrades
}
console.log(averageCount(grades))

//--------6--------//

let greeting = `Hello, World!`
const reversedGreeting = (greeting) => {
    const greetingArray = greeting.split(``)

    let resultGreeting = []
    let i = greetingArray.length -1
    do {
        resultGreeting.push(greetingArray[i])
        i--;
    }
    while (i >= 0);
    let reversedWords = resultGreeting.join(``)
return reversedWords
}
console.log(reversedGreeting(greeting))

//--------7--------//

let word = `level`


const palindrom = (word) => {
    let wordArray = word.split(``).reverse().join(``)
    let i = 0;
    while (i < wordArray.length) {
        if (word !== wordArray) {
            return false
        }
    i++;
    }
    return true
} 
console.log(palindrom(word))


//Home Work 7//
//--------1--------//

const studentGrades = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Cristian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
  ]
  const average = studentGrades.reduce(function (sum, grade) {
    return sum + grade.note / studentGrades.length
  },
  0)
  console.log(average)

  //--------2--------//

  const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
  ]

  const items = products
  .filter(item => item.isAvailable)
  .map(product => product.name)
  console.log(items)
  
 //--------3--------//

 const figures = [10, 5, 8, 15, 3, 20] 
 const maxDigit = figures.reduce(function (largest, digit){
    return (largest > digit) ? largest : digit
 }
 )
 console.log(maxDigit)

 //--------4--------//

 const studentEvaluation = [
    {John: [8, 7, 9]}, 
    {Mary: [9, 9, 10]}, 
    {Alex: [6, 8, 7]}
];
const averageEvaluation = studentEvaluation.reduce((acc,student) => {
    let key = Object.keys(student)[0];
    let value = student[key];
    
    let total = value.reduce((acc, score) => acc + score, 0);
    
    acc[key] = total / value.length;
    return acc;
},{});

console.log(averageEvaluation);
