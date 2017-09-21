var AdminSection;
(function (AdminSection) {
    var Services;
    (function (Services) {
        var StarshipService = (function () {
            function StarshipService(httpService, qService) {
                this.httpService = httpService;
                this.qService = qService;
            }
            StarshipService.prototype.GetByPage = function (page) {
                var config = {
                    params: { page: page },
                    headers: { 'Accept': 'application/json' }
                };
                return this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
            };
            StarshipService.prototype.GetAll = function () {
                var config = {
                    headers: { 'Accept': 'application/json' }
                };
                return this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
            };
            return StarshipService;
        }());
        StarshipService.$inject = ["$http", "$q"];
        StarshipService.GetInstance = function () {
            var instance = function (httpService, qService) { return new StarshipService(httpService, qService); };
            return instance;
        };
        Services.StarshipService = StarshipService;
        App.ModuleInitiator.GetModule("AdminSection").factory("AdminSection.Services.StarshipService", StarshipService.GetInstance);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=StarshipService.js.map