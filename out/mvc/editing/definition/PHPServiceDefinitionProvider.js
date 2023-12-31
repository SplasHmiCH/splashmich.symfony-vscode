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
var AbstractServiceDefinitionProvider_1 = require("./AbstractServiceDefinitionProvider");
var PHPServiceDefinitionProvider = /** @class */ (function (_super) {
    __extends(PHPServiceDefinitionProvider, _super);
    function PHPServiceDefinitionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PHPServiceDefinitionProvider.prototype.acceptServiceDefinition = function (hoveredWord, serviceDefinition) {
        if (serviceDefinition.isServiceIdAClassName()) {
            return false;
        }
        else {
            return hoveredWord === serviceDefinition.id;
        }
    };
    return PHPServiceDefinitionProvider;
}(AbstractServiceDefinitionProvider_1.AbstractServiceDefinitionProvider));
exports.PHPServiceDefinitionProvider = PHPServiceDefinitionProvider;
