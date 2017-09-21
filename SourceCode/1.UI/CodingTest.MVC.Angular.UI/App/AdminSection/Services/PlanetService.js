var AdminSection;
(function (AdminSection) {
    var Services;
    (function (Services) {
        var PlanetService = (function () {
            function PlanetService(httpService) {
                this.httpService = httpService;
            }
            PlanetService.prototype.GetByPage = function (page) {
                var config = {
                    params: { page: page },
                    headers: { 'Accept': 'application/json' }
                };
                return this.httpService.get(Common.AppConstants.SWAPIUrl + '/planets/', config);
            };
            return PlanetService;
        }());
        PlanetService.$inject = ["$http"];
        PlanetService.GetInstance = function () {
            var instance = function ($http) { return new PlanetService($http); };
            return instance;
        };
        Services.PlanetService = PlanetService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.PlanetService", PlanetService.GetInstance);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=PlanetService.js.map