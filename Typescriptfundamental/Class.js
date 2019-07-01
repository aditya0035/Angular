var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.Draw = function () {
            console.log(_this.x, _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var p = new Point(10, 20);
p.Draw();
