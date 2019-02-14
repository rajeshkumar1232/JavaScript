const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//For
//  for (let i = 0; i < companies.length; i++) {
//      console.log(companies[i]);
//  }

//foreach
//  companies.forEach(function (comp){ 
//      console.log(comp.name);
//  });

//Filter
//let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]); 
//     }
// }

// const candrink = ages.filter(function(age){
//     if (age >= 21){
//         return true
//     }
// });

//ES6 convention 
// const candrink = ages.filter(age => age >= 21);
// console.log(candrink);

//Filter retail company
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

//ES6 convention
// const retailCompany = companies.filter(retailComp => retailComp.category === 'Retail')
// console.log(retailCompany);

//Map
// const companyName = companies.map(function company(company) {
//     return company.name;
// });
// console.log(companyName);

// const compMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(compMap);

//const agesSquare = ages.map(age => Math.sqrt(age))
// const agesSquare = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(agesSquare);

//SORT
// const sortedCompany = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });

//ES6 convention
//const sortedCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// const ageSort = ages.sort((a, b) => a - b);
// console.log(ageSort);

//Reduce

// let ageSum = 0;
// for(let i = 0 ; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);