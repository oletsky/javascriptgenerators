"use strict";

function* sequence() {
    for (let k=1; k<=10; k++) {
        yield k;
    }
    //return 11;
}

let seq=sequence();
let iter={};
do {
    iter=seq.next();
    console.log(iter);
} while (!iter.done)