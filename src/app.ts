console.log("app.ts!");
class Person {
  constructor(private name: string) {}
}
const max = new Person("Maxym");
const btn = document.querySelector("#btn")!;
//demio
btn.addEventListener("click", () => {
  console.log("Btn clicked");
});
let anyFlag;
const globVar = "Message";
function logInfo(data: string, a?: number) {
  const message = "string";
  console.log(data);
  anyFlag = true;
  console.log(anyFlag);
}
logInfo("I'm log string");
function multiple(a: number, b: number) {
  if (a && b) {
    return a * b;
  }
  return;
}
