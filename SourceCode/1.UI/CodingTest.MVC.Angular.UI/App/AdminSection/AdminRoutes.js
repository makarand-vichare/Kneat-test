var AdminFeature;
(function (AdminFeature) {
    var AdminRoutes = (function () {
        function AdminRoutes() {
        }
        AdminRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "AdminFeature.Controllers.AdminHomeController",
                templateUrl: "/App/AdminFeature/Views/home.html",
                controllerAs: "adminhomectrl"
            })
                .when("/starships", {
                controller: "AdminFeature.Controllers.StarshipController",
                templateUrl: "/App/AdminFeature/Views/starships.html",
                controllerAs: "starshipctrl"
            })
                .when("/planets", {
                controller: "AdminFeature.Controllers.PlanetController",
                templateUrl: "/App/AdminFeature/Views/planets.html",
                controllerAs: "planetctrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return AdminRoutes;
    }());
    AdminRoutes.$inject = ["$routeProvider"];
    AdminFeature.AdminRoutes = AdminRoutes;
})(AdminFeature || (AdminFeature = {}));
//# sourceMappingURL=AdminRoutes.js.map