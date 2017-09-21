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
var AdminSection;
(function (AdminSection) {
    var Controllers;
    (function (Controllers) {
        var AdminHomeController = (function (_super) {
            __extends(AdminHomeController, _super);
            function AdminHomeController() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AdminHomeController;
        }(Common.Controllers.BaseController));
        Controllers.AdminHomeController = AdminHomeController;
        App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.AdminHomeController", AdminHomeController);
    })(Controllers = AdminSection.Controllers || (AdminSection.Controllers = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=AdminHomeController.js.map