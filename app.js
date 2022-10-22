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
// enum Acess {Admin, ReadOnly ,Author}; //enum
// const person :{
//     name : string;
//     age : number
//     hobbies : string[]
//     role : [number, string, boolean] // tuple
//     acess : number                   // enum
// } = {
//     'name':'Ibrahim',
//     'age' : 20,
//     'hobbies': ['gaming','bodybuilding','coding'],
//     'role' : [1, 'author',true], // tuple
//     'acess': Acess.Admin        // enum
// }
// console.log(person.role);            // tuple
// // person.role.push("hero")          // tuple
// person.role = [3,'csgo',false]       // typle
// console.log(person.role);            // tuple
// console.log(person)                  // tuple
// // -----------------
// let fpsGames: string[];
// fpsGames = ['csgo','valorant','overwatch']
// for (const hobby of person.hobbies){
//     console.log(hobby.toLocaleUpperCase());
// }
//----------------------------
// Enum
var Acess;
(function (Acess) {
    Acess[Acess["Admin"] = 4] = "Admin";
    Acess["ReadOnly"] = "read";
    Acess[Acess["Author"] = 7] = "Author";
})(Acess || (Acess = {}));
;
var person = {
    'name': 'Ibrahim',
    'age': 20,
    'hobbies': ['gaming', 'bodybuilding', 'coding'],
    'role': [1, 'author', true],
    'acess': Acess.Author
};
// ----------------
// any
var employee = [1, "bran", true];
console.log(employee[2]);
console.log(employee[1]);
var data;
data = {
    'id': 1,
    'name': 2,
    'tasks': [1, 2, 4, "gg"]
};
console.log(data.id);
console.log(data.tasks[3]);
