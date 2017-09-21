
module UsersSection.Controllers
{
    export class StarshipTravelController extends Common.Controllers.BaseController
    {
        static $inject = ["$injector", "UsersSection.Services.StarshipTravelService", "AdminSection.Services.PlanetService"];
        constructor(_injectorService: ng.auto.IInjectorService, private starshipService: UsersSection.Interfaces.IStarshipTravelService, private planetService: AdminSection.Interfaces.IPlanetService )
        {
            super( _injectorService );
        }

        starships: Array<UsersSection.ViewModels.IStarshipTravelVM>;
        planets: AdminSection.ViewModels.IPlanetVM;

        GetShipsSupplyCount = (planetDistance: number) => {
            var self = this;
            self.StartProcess();

            self.starshipService.GetShipsSupplyCount(planetDistance)
                .then(function (response: any) {
                    self.starships = response.data.viewModels;
                    self.ProcessInfo.IsSucceed = true;
                    self.ProcessInfo.Message = response.data.message;
                })
                .catch(function (response: any) {
                    self.ProcessInfo.Message = response.data.message;
                })
                .finally(function () {
                    self.ProcessInfo.Loading = false;
                });
        }

        GetPlanets = (page:number) =>
        {
            var self = this;
            self.StartProcess();

            self.planetService.GetByPage(page)
                .then( function ( response: any )
                {
                    self.planets = response.data.viewModels;
                    self.ProcessInfo.Message = response.data.message;
                    self.ProcessInfo.IsSucceed = true;
                })
                .catch( function ( response: any )
                {
                    self.ProcessInfo.Message = response.data.message;
                })
                .finally( function ()
                {
                    self.ProcessInfo.Loading = false;
                });
        }

    }
    App.ModuleInitiator.GetModule("UsersSection").controller("UsersSection.Controllers.StarshipTravelController", StarshipTravelController );
} 