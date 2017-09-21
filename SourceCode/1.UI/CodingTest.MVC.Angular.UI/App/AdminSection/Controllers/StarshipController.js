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
        var StarshipController = (function (_super) {
            __extends(StarshipController, _super);
            function StarshipController(_injectorService, starshipService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.starshipService = starshipService;
                _this.GetStarShips = function (page) {
                    var self = _this;
                    self.StartProcess();
                    self.starshipService.GetByPage(page)
                        .then(function (response) {
                        self.starships = response.data.viewModels;
                        self.ProcessInfo.IsSucceed = true;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                return _this;
            }
            return StarshipController;
        }(Common.Controllers.BaseController));
        StarshipController.$inject = ["$injector", "AdminSection.Services.StarshipService"];
        Controllers.StarshipController = StarshipController;
        App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.StarshipController", StarshipController);
    })(Controllers = AdminSection.Controllers || (AdminSection.Controllers = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=StarshipController.js.map