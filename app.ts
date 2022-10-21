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


const person :{
    name : string;
    age : number
    hobbies : string[]
    role : [number, string, boolean] // tuple
} = {
    'name':'Ibrahim',
    'age' : 20,
    'hobbies': ['gaming','bodybuilding','coding'],
    'role' : [1, 'author',true] // tuple
}
console.log(person.role);

// person.role.push("hero")
person.role = [3,'csgo',false]

console.log(person.role);
console.log(person)

// -----------------
let fpsGames: string[];
fpsGames = ['csgo','valorant','overwatch']

for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
    
}