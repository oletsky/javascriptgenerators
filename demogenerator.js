"use strict";

function* sequence() {
    for (let k=1; k<=10; k++) {
        yield k;

    }

}

let seq=sequence();


for (let i of seq) {
    console.log(i);
}

