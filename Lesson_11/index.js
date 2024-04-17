let x = 5;
const arrA = ["a","b","x"];
console.log(arrA);
const objA = {
    param1:"a",
    param2:"b",
    param3: "x"
}
console.log(objA)

const carBMW741998 = {
    doors: 4,
    wheels: 4,

}
const footballPlayerJohn = {
    heigt: 170,
    weight: 80,
    result: 7.5,
    goal: function(){
        console.log("I made goal")
    },
    number: function(){
        return 5;
    }
}
console.log(footballPlayerJohn.result);
console.log(footballPlayerJohn["heigt"]);

footballPlayerJohn.goal()