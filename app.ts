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

enum Acess {Admin = 4 , ReadOnly = 'read', Author = 7};

const person  = {
    'name':'Ibrahim',
    'age' : 20,
    'hobbies': ['gaming','bodybuilding','coding'],
    'role' : [1, 'author',true], // tuple
    'acess': Acess.Author
}
