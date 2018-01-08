"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var edmunds_1 = require("edmunds");
var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get Index
     * @param {object} params
     * @param {NextFunction} next
     */
    HomeController.prototype.getIndex = function (params, next) {
        this.response.json({
            message: 'Hello World!',
            app: this.edmunds.config.get('app')
        });
    };
    return HomeController;
}(edmunds_1.Controller));
exports.HomeController = HomeController;
