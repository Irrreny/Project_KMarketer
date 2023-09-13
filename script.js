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

//Home Work 4//

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
months.sort()
console.log(months)

const result = months.filter((word) => word.length > 3)
console.log(result)