console.log('script.js connected!');


var ourAnimals = [
  'dog', 'sloth', 'platypus',
  'rat', 'dolphin', 'pitbull'
];


console.log('');
console.log('Animals');

ourAnimals.forEach(function (oneAnimal, index) {
    // var oneAnimal = 'dog';
    // 1. dog
    var humanNumber = index + 1;
    console.log(humanNumber + '. ' + oneAnimal);
});

// platform (xbox, pc, ps4, nintendo, etc.)
// genre (action, racing, rpg, etc.)
// title
// rating (teen, mature, etc.)

var videoGames = [
  {
    title: 'Mario Kart',
    platform: 'Nintendo',
    genre: 'Racing',
    rating: 'Everyone'
  },
  {
    title: 'Destiny 2',
    platform: 'Xbox',
    genre: 'MMORPG',
    rating: 'Mature'
  },
  {
    title: 'Grand Theft Auto V',
    platform: 'PC',
    genre: 'MMORPG',
    rating: 'Mature'
  },
  {
    title: 'Overwatch',
    platform: 'PS4',
    genre: 'Shooting',
    rating: 'Teen'
  },
];

console.log('');
console.log('Video Games');

videoGames.forEach(function (oneGame) {
    // var oneGame = {
    //   title: 'Overwatch',
    //   platform: 'PS4',
    //   genre: 'Shooting',
    //   rating: 'Teen'
    // };

    // - Overwatch (Shooting)
    console.log('- '+ oneGame.title +' ('+ oneGame.genre +')');
});




console.log('');
console.log('MAP ------------------------');

var array = [1, 2, 3];

console.log('Old Array');
console.log(array);

// The new array has the same elements of array
// BUT each element is mapped to the value*2
var newArray =
  array.map(function(number){
      return number * 2;
  });

console.log('New Array');
console.log(newArray);
// [ 2, 4, 6 ]




var newArray = [];

array.forEach(function(number){
    newArray.push(number * 2);
});

console.log(newArray);



console.log('');
console.log(' MAP exercise----------------------------');


var cities = ["miami", "barcelona", "madrid"];

var capsCities =
  cities.map(function (oneCity) {
      // var oneCity = 'barcelona';
      // oneCity[0]               -> 'b'
      // oneCity[0].toUpperCase() -> 'B'
      // oneCity.slice(1)         -> 'arcelona'
      return oneCity[0].toUpperCase() + oneCity.slice(1);
        //             'B'            +    'arcelona'
  });


console.log(capsCities);
// ["Miami", "Barcelona", "Madrid"]




console.log('');
console.log(' STUDENTS ---------------------');


var students = [
{
  name: "Tony Parker",
  firstProject: 80,
  secondProject: 75,
  finalExam: 90
},
{
  name: "Marc Barchini",
  firstProject: 84,
  secondProject: 65,
  finalExam: 65
},
{
  name: "Claudia Lopez",
  firstProject: 45,
  secondProject: 95,
  finalExam: 99
},
{
  name: "Alvaro Briattore",
  firstProject: 82,
  secondProject: 92,
  finalExam: 70
},
{
  name: "Isabel Ortega",
  firstProject: 90,
  secondProject: 32,
  finalExam: 85
},
{
  name: "Francisco Martinez",
  firstProject: 90,
  secondProject: 55,
  finalExam: 78
},
{
  name: "Jorge Carrillo",
  firstProject: 83,
  secondProject: 77,
  finalExam: 90
},
{
  name: "Miguel López",
  firstProject: 80,
  secondProject: 75,
  finalExam: 75
},
{
  name: "Carolina Perez",
  firstProject: 85,
  secondProject: 72,
  finalExam: 67
},
{
  name: "Ruben Pardo",
  firstProject: 89,
  secondProject: 72,
  finalExam: 65
}
];


var reportCards =
  students.map(function (oneStudent) {
      var projectAverage = (oneStudent.firstProject + oneStudent.secondProject) / 2;
      var finalGrade = (oneStudent.finalExam * 0.6) + (projectAverage * 0.4);

      return {
          name: oneStudent.name,
          finalGrade: Math.round(finalGrade)
      };
  });

console.log( reportCards );






console.log('');
console.log(' Reduce ----------------------------------');

var numbers = [2, 4, 6, 8];

var total =
  numbers.reduce(
    function (sum, oneNumber) {
      console.log(sum, oneNumber);
      return sum + oneNumber;
    },
    42
  ); // reduce()

console.log(total);


var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];

var ages = 0;

people.forEach(function (onePerson) {
    ages += onePerson.age;
});

console.log( ages / people.length );


var ages =
  people.reduce(
    function(sum, onePerson){
      return sum + onePerson.age;
    },
    0
  );

console.log( ages / people.length );
