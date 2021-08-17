"use strict";
console.log("hhhhh");
const cars = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});
promise.then((data) => {
    console.log(data.toLowerCase().trim().toUpperCase());
});
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: "Vika" }, { age: 37 });
const merged2 = mergeObject({ work: true }, { children: null });
console.log(merged.age);
console.log(merged2.work);
function withCount(value) {
    return {
        value,
        count: `in this object ${value.length} literals`,
    };
}
console.log(withCount("hello typescript"));
console.log(withCount(["i", "am", "array"]));
function getObjValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Vika",
    age: 23,
};
console.log(getObjValue(person, "name"));
console.log(getObjValue(person, "age"));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(["i", "am", "string"]);
strings.add("!");
strings.remove("am");
console.log(strings.items);
const numbers = new Collection([1, 4, 7, 77, 766]);
numbers.add(456);
numbers.remove(7);
console.log(numbers.items);
const objs = new Collection([{ a: 1 }, { b: 4 }]);
objs.remove({ a: 1 });
console.log(objs.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const coolCars = ["Ford", "Audi"];
const ford = {
    model: "Ford",
    year: 3034,
};
//# sourceMappingURL=generic.js.map