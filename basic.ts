function add(num1: number, num2: number, resStatus: boolean, phrase: string) {
    let result = num1+num2;
    if (resStatus) {
        return phrase + result
    }
}
const n1 = 3;
const n2 = 6;
const resStatus = true;
const phrase = "Result is: "

const result = add(n1,n2,resStatus, phrase)
console.log(result);
