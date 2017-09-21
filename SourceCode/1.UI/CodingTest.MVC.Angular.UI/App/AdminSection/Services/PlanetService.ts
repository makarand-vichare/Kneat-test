
module AdminSection.Services
{
    export class PlanetService implements AdminSection.Interfaces.IPlanetService
    {
        static $inject = ["$http"];
        constructor( private httpService: ng.IHttpService)
        {
        }

        GetByPage(page: number): ng.IPromise<any> 
        {
            var config = {
                params: { page: page  },
                headers: { 'Accept': 'application/json' }
            } as ng.IRequestShortcutConfig;

            return this.httpService.get(Common.AppConstants.SWAPIUrl + '/planets/', config );
        }
        static GetInstance = () =>
        {
            var instance = ($http: ng.IHttpService) => new PlanetService( $http );
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.PlanetService", PlanetService.GetInstance );
} 