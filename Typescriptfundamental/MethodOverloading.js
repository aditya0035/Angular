var Pointer = /** @class */ (function () {
    function Pointer(x, y) {
        var _this = this;
        this.Draw = function () {
            console.log(_this.x, _this.y);
        };
        this.GetDistance = function (p) {
            if (p) {
                console.log((p.x - _this.x));
                console.log((p.y - _this.y));
            }
            else {
                console.log(_this.x);
                console.log(_this.y);
            }
        };
        this.x = x;
        this.y = y;
    }
    return Pointer;
}());
var pointer = new Pointer(10, 30);
pointer.GetDistance();
pointer.GetDistance(new Pointer(30, 40));
