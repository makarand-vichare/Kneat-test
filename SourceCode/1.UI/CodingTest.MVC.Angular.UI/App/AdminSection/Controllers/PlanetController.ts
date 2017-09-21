
module AdminSection.Controllers
{
    export class PlanetController extends Common.Controllers.BaseController
    {
        static $inject = ["$injector", "AdminSection.Services.PlanetService"];
        constructor(_injectorService: ng.auto.IInjectorService, private planetService: AdminSection.Interfaces.IPlanetService)
        {
            super( _injectorService );
        }

        planets: Array<AdminSection.ViewModels.IPlanetVM>;

        GetPlanets = (page: number) =>
        {
            var self = this;
            self.StartProcess();

            self.planetService.GetByPage(page)
                .then( function ( response: any )
                {
                    self.planets = response.data.viewModels;
                    self.ProcessInfo.IsSucceed = true;
                    self.ProcessInfo.Message = response.data.message;
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
    App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.PlanetController", PlanetController );
} 