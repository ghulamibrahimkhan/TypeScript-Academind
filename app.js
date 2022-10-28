function add(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
    return result;
}
console.log(add(2, 3));
console.log(add(1, "Ibrahim"));
console.log(add("Ghulam", "Ibrahim"));
