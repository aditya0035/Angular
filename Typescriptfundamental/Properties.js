var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Object.defineProperty(Dog.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
var lms = new Dog("Jimmy");
console.log(lms.Name);
lms.Name = "Jack";
console.log(lms.Name);
