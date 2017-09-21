var StarshipModule;
(function (StarshipModule) {
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
            StarshipService.prototype.GetShipsSupplyCount = function (planetDistance) {
                var config = {
                    headers: { 'Accept': 'application/json' }
                };
                var defer = this.qService.defer();
                this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config)
                    .then(function (response) {
                    var starships = this.CalculateReSupplyCount(response.data.viewModels, planetDistance);
                    defer.resolve(starships);
                })
                    .catch(function (error) {
                    defer.reject(error);
                });
                return defer.promise;
            };
            StarshipService.prototype.CalculateReSupplyCount = function (starShips, planetDistance) {
                starShips.forEach(function (starship) {
                    starship.ReSupplyCount = planetDistance / starship.MGLT * starship.Consumables;
                });
                return starShips;
            };
            return StarshipService;
        }());
        StarshipService.$inject = ["$http", "$q"];
        StarshipService.GetInstance = function () {
            var instance = function (httpService, qService) { return new StarshipService(httpService, qService); };
            return instance;
        };
        Services.StarshipService = StarshipService;
        MiniSpas.ModuleInitiator.GetModule("StarshipModule").service("StarshipModule.Services.StarshipService", StarshipService);
    })(Services = StarshipModule.Services || (StarshipModule.Services = {}));
})(StarshipModule || (StarshipModule = {}));
//# sourceMappingURL=StarshipService.js.map