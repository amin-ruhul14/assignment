// feetToMile

function feetToMile(feet) {

    var mile = feet / 5280; //[1 mile = 5280 feet]

    return mile;

}
var result = feetToMile(25000);
console.log("Total Mile = ", result);




// woodCalculator

function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;

    var total = chairCount + tableCount + bedCount;
    return total;
}
var result = woodCalculator(5, 3, 2);
console.log("Total Cubic feet wood = " + result);




//brickCalculator
function brickCalculator(numOfFloors) {
    if (numOfFloors <= 0) {
        console.log("Number of floors can't be 0 or less")
        return;
    }

    else if (numOfFloors <= 10)
        return numOfFloors * 15 * 1000;
    else if (numOfFloors <= 20)
        return 150000 + ((numOfFloors - 10)) * 1000 * 12;
    else
        return 270000 + ((numOfFloors - 20) * 1000 * 10);
}
var result = brickCalculator(17);
console.log("Total Brick = ", result);


//tinyFriend

function tinyFriend(name) {
    var short = name[0];
    for (var i = 1; i < name.length; i++) {
        if (name[i].length < short.length)
            short = name[i];
    }
    return short;
}
var result = tinyFriend(['shila', 'hridoy', 'yeasfi', 'amin', 'rabbi', 'pabel']);
console.log("Tiny Friends = ", result);

