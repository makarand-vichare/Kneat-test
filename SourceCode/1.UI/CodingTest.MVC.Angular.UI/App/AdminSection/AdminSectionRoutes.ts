﻿module AdminSection {
    export class AdminSectionRoutes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/",
                {
                    controller: "AdminSection.Controllers.AdminHomeController",
                    templateUrl: "/App/AdminSection/Views/home.html",
                    controllerAs: "adminHomeCtrl"
                }
            )
                .when("/adminHome",
                {
                    controller: "AdminSection.Controllers.AdminHomeController",
                    templateUrl: "/App/AdminSection/Views/home.html",
                    controllerAs: "adminHomeCtrl"
                }
                )
                .when("/starships",
                {
                    controller: "AdminSection.Controllers.StarshipController",
                    templateUrl: "/App/AdminSection/Views/starships.html",
                    controllerAs: "starshipCtrl"
                }
                )
                .when("/planets",
                {
                    controller: "AdminSection.Controllers.PlanetController",
                    templateUrl: "/App/AdminSection/Views/planets.html",
                    controllerAs: "planetCtrl"
                }
                )
                .when("/login",
                {
                    controller: "AdminSection.Controllers.LoginController",
                    templateUrl: "/App/AdminSection/Views/login.html",
                    controllerAs: "loginCtrl"
                });
            $routeProvider.otherwise({ redirectTo: "/" });
        }
    }
}