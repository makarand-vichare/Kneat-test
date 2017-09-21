var StarshipModule;
(function (StarshipModule) {
    var StarshipModuleRoutes = (function () {
        function StarshipModuleRoutes() {
        }
        StarshipModuleRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "StarshipModule.Controllers.StarshipController",
                templateUrl: "/App/StarshipModule/Views/starships.html",
                controllerAs: "starshipctrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return StarshipModuleRoutes;
    }());
    StarshipModuleRoutes.$inject = ["$routeProvider"];
    StarshipModule.StarshipModuleRoutes = StarshipModuleRoutes;
})(StarshipModule || (StarshipModule = {}));
//# sourceMappingURL=StarshipModuleRoutes.js.map