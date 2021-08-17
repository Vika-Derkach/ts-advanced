console.log("hhhhh");
const cars: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});
promise.then((data) => {
  console.log(data.toLowerCase().trim().toUpperCase());
});

//======================
function mergeObject<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged = mergeObject({ name: "Vika" }, { age: 37 });
const merged2 = mergeObject({ work: true }, { children: null });
console.log(merged.age);
console.log(merged2.work);

///const merged3 = mergeObject('aaaaaaaa', "fghghv");
//Argument of type 'string' is not assignable to parameter of type 'object'.
///console.log("merged3", merged3);

//without T extends object, R extends object
// {0: "f", 1: "g", 2: "h", 3: "g", 4: "h", 5: "v"}
// 0: "f"
// 1: "g"
// 2: "h"
// 3: "g"
// 4: "h"
// 5: "v"
//const merged4 = mergeObject({ a: "ffff" }, "fghghv");

///=========

interface ILength {
  length: number;
}
function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `in this object ${value.length} literals`,
  };
}
console.log(withCount("hello typescript"));
//{value: "hello typescript", count: "in this object 16 literals"}
console.log(withCount(["i", "am", "array"]));
//{value: Array(3), count: "in this object 3 literals"}

//console.log(withCount(20));
//Argument of type 'number' is not assignable to parameter of type 'ILength'

//=========
function getObjValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}
const person = {
  name: "Vika",
  age: 23,
};
console.log(getObjValue(person, "name"));
console.log(getObjValue(person, "age"));
//console.log(getObjValue(person, "job"));
//Argument of type '"job"' is not assignable to parameter of type '"name" | "age"'.

///=======
class Collection<T> {
  //   private _items: T[] = [];
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }
  remove(item: T) {
    this._items = this._items.filter((i) => i !== item);
  }
  get items(): T[] {
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
//Type '{ a: number; }' is not assignable to type 'string | number | boolean'.
// Type '{ a: number; }' is not assignable to type 'true'.ts(2322)
// objs.add({ f: 1 });
objs.remove({ a: 1 });
console.log(objs.items);

///========
interface Car {
  model: string;
  year: number;
}
function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};
  if (model.length > 3) {
    car.model = model;
  }
  if (year > 2000) {
    car.year = year;
  }
  return car as Car;
}
// ========
const coolCars: Readonly<Array<string>> = ["Ford", "Audi"];
//coolCars.shift()
//Property 'shift' does not exist on type 'readonly string[]

const ford: Readonly<Car> = {
  model: "Ford",
  year: 3034,
};
//ford.model = "Ferrari";
//Cannot assign to 'model' because it is a read-only property.
