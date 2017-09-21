var HomeModule;
(function (HomeModule) {
    var HomeModuleRoutes = (function () {
        function HomeModuleRoutes() {
        }
        HomeModuleRoutes.ConfigureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "AdminSection.Controllers.SignupController",
                templateUrl: "/MiniSpas/AdminSection/Views/signup.html",
                controllerAs: "signupCtrl"
            })
                .when("/home", {
                controller: "HomeModule.Controllers.HomeController",
                templateUrl: "/MiniSpas/HomeModule/Views/home.html",
                controllerAs: "homeCtrl"
            })
                .when("/login", {
                controller: "AdminSection.Controllers.LoginController",
                templateUrl: "/MiniSpas/AdminSection/Views/login.html",
                controllerAs: "loginCtrl"
            })
                .when("/signup", {
                controller: "AdminSection.Controllers.SignupController",
                templateUrl: "/MiniSpas/AdminSection/Views/signup.html",
                controllerAs: "signupCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return HomeModuleRoutes;
    }());
    HomeModuleRoutes.$inject = ["$routeProvider"];
    HomeModule.HomeModuleRoutes = HomeModuleRoutes;
})(HomeModule || (HomeModule = {}));
//# sourceMappingURL=HomeModuleRoutes.js.map