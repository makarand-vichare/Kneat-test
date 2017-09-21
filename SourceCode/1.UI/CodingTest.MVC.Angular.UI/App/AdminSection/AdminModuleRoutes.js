var AdminModule;
(function (AdminModule) {
    var AdminModuleRoutes = (function () {
        function AdminModuleRoutes() {
        }
        AdminModuleRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "AdminModule.Controllers.AdminHomeController",
                templateUrl: "/AngularModules/AdminModule/Views/home.html",
                controllerAs: "adminhomectrl"
            })
                .when("/starships", {
                controller: "AdminModule.Controllers.StarshipController",
                templateUrl: "/AngularModules/AdminModule/Views/starships.html",
                controllerAs: "starshipctrl"
            })
                .when("/planets", {
                controller: "AdminModule.Controllers.PlanetController",
                templateUrl: "/AngularModules/AdminModule/Views/planets.html",
                controllerAs: "planetctrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return AdminModuleRoutes;
    }());
    AdminModuleRoutes.$inject = ["$routeProvider"];
    AdminModule.AdminModuleRoutes = AdminModuleRoutes;
})(AdminModule || (AdminModule = {}));
//# sourceMappingURL=AdminModuleRoutes.js.map