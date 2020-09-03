"use strict";
function* sequence1() {
    for (let i = 1; i <= 5; i++) yield i;
}
function* sequence2() {
    for (let i = 6; i <= 10; i++) yield i;
}

function* sequence() {
    yield* sequence1();
    yield* sequence2();
}

for (let i of sequence()) {
    console.log(i);
}
