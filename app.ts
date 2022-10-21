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
} = {
    'name':'Ibrahim',
    'age' : 20,
    'hobbies': ['gaming','bodybuilding','coding']
}
// console.log(person.name);
// console.log(person.age);

let fpsGames: string[];
fpsGames = ['csgo','valorant','overwatch']

for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
    
}