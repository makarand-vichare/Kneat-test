var Common;
(function (Common) {
    var Controllers;
    (function (Controllers) {
        var BaseController = (function () {
            function BaseController(injectorService) {
                this.injectorService = injectorService;
                this.ProcessInfo = { Message: "" };
                this.windowService = injectorService.get("$window");
                this.locationService = injectorService.get("$location");
            }
            BaseController.prototype.StartProcess = function () {
                var self = this;
                self.ProcessInfo = {
                    Message: "loading..",
                    Loading: true,
                    IsSucceed: false
                };
            };
            BaseController.prototype.EndProcess = function (message, isSucceed) {
                var self = this;
                self.ProcessInfo = {
                    Message: message,
                    Loading: false,
                    IsSucceed: isSucceed
                };
            };
            return BaseController;
        }());
        BaseController.$inject = ["$injector"];
        Controllers.BaseController = BaseController;
    })(Controllers = Common.Controllers || (Common.Controllers = {}));
})(Common || (Common = {}));
//# sourceMappingURL=BaseController.js.map