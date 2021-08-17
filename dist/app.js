"use strict";
console.log("app.ts!");
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person("Maxym");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("Btn clicked");
});
let anyFlag;
const globVar = "Message";
function logInfo(data, a) {
    const message = "string";
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo("I'm log string");
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return;
}
//# sourceMappingURL=app.js.map