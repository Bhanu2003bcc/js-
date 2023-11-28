function randomInRange(from, to) {
    var r = Math.random();
    return Math.floor(r * (to - from) + from);
}

var random = randomInRange(0, 100);
let i
while(i != random) {
    console.log("try again ")
i = prompt(" Enter a number ")
}

  console.log("Congratulation🎉, You Got the Number "); // 13
