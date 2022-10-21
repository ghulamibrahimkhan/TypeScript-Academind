// const person = {
//     'name':'Ibrahim',
//     'age' : 20
// }
// console.log(person);
// // by this we can't acess object values
// const person :object = {
//     'name':'Ibrahim',
//     'age' : 20
// }
// console.log(person);
var person = {
    'name': 'Ibrahim',
    'age': 20,
    'hobbies': ['gaming', 'bodybuilding', 'coding']
};
// console.log(person.name);
// console.log(person.age);
var fpsGames;
fpsGames = ['csgo', 'valorant', 'overwatch'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
