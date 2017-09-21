var UsersSection;
(function (UsersSection) {
    var Services;
    (function (Services) {
        var StarshipTravelService = (function () {
            function StarshipTravelService(httpService, qService) {
                this.httpService = httpService;
                this.qService = qService;
            }
            StarshipTravelService.prototype.GetShipsSupplyCount = function (planetDistance) {
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
            StarshipTravelService.prototype.CalculateReSupplyCount = function (starShips, planetDistance) {
                starShips.forEach(function (starship) {
                    starship.ReSupplyCount = planetDistance / starship.MGLT * starship.Consumables;
                });
                return starShips;
            };
            return StarshipTravelService;
        }());
        StarshipTravelService.$inject = ["$http", "$q"];
        StarshipTravelService.GetInstance = function () {
            var instance = function (httpService, qService) { return new StarshipTravelService(httpService, qService); };
            return instance;
        };
        Services.StarshipTravelService = StarshipTravelService;
        App.ModuleInitiator.GetModule("UsersSection").factory("UsersSection.Services.StarshipTravelService", StarshipTravelService.GetInstance);
    })(Services = UsersSection.Services || (UsersSection.Services = {}));
})(UsersSection || (UsersSection = {}));
//# sourceMappingURL=StarshipTravelService.js.map