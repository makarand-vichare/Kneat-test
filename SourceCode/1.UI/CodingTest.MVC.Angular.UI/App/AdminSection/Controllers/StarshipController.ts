
module AdminSection.Controllers
{
    export class StarshipController extends Common.Controllers.BaseController
    {
        static $inject = ["$injector", "AdminSection.Services.StarshipService"];
        constructor(_injectorService: ng.auto.IInjectorService, private starshipService: AdminSection.Interfaces.IStarshipService)
        {
            super( _injectorService );
        }

        starships: Array<AdminSection.ViewModels.IStarshipVM>;

        GetStarShips = (page: number) =>
        {
            var self = this;
            self.StartProcess();

            self.starshipService.GetByPage(page)
                .then( function ( response: any )
                {
                    self.starships = response.data.viewModels;
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
    App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.StarshipController", StarshipController );
} 