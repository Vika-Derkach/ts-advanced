"use strict";
var IForm;
(function (IForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = "inline";
            this.state = "active";
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    IForm.myForm = new MyForm("v@gmail.com");
    console.log(IForm.myForm);
})(IForm || (IForm = {}));
console.log(IForm.myForm);
//# sourceMappingURL=namespaces.js.map