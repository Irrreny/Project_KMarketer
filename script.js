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

//Home Work 2//

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
}
