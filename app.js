function add(num1, num2, resStatus, phrase) {
    var result = num1 + num2;
    if (resStatus) {
        return phrase + result;
    }
}
var n1 = 3;
var n2 = 6;
var resStatus = true;
var phrase = "Result is: ";
var result = add(n1, n2, resStatus, phrase);
console.log(result);
