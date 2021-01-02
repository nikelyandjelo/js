'use strict';
const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log("the end");
        clearInterval(timer);
        return;
    }
    console.dir({ counter });
    counter++;
};
console.log("begin");
timer = setInterval(event, INTERVAL);
