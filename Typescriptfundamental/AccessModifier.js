var Points = /** @class */ (function () {
    function Points(x, y) {
        var _this = this;
        this.ShowCoordinates = function () {
            console.log(_this.x, _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return Points;
}());
var p = new Points(10, 23);
p.ShowCoordinates();
