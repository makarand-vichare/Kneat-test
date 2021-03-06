﻿module UsersSection
{
    export class UsersSectionRoutes
    {
        static $inject = ["$routeProvider"];
        static configureRoutes( $routeProvider: ng.route.IRouteProvider )
        {
            $routeProvider
                    .when( "/",
                            {
                                controller: "UsersSection.Controllers.StarshipTravelController",
                                templateUrl: "/App/UsersSection/Views/starshipstravel.html",
                                controllerAs: "starshiptravelCtrl"
                            }
                   );
            $routeProvider.otherwise( { redirectTo: "/" });
        }
    }
}