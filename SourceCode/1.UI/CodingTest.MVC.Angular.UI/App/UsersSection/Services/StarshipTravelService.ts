
module UsersSection.Services
{
    export class StarshipTravelService implements UsersSection.Interfaces.IStarshipTravelService
    {
        static $inject = ["$http","$q"];
        constructor( private httpService: ng.IHttpService, private qService:ng.IQService) {}

        GetShipsSupplyCount(planetDistance: number): ng.IPromise<any> {
            var config = {
                headers: { 'Accept': 'application/json' }
            } as ng.IRequestShortcutConfig;

            var defer = this.qService.defer();
            this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config)
                .then(function (response: any) {
                    var starships = this.CalculateReSupplyCount(response.data.viewModels, planetDistance);
                    defer.resolve(starships);
                })
                .catch(function (error: any) {
                    defer.reject(error);
                });
            return defer.promise;
        }

        private CalculateReSupplyCount(starShips: Array<UsersSection.ViewModels.IStarshipTravelVM>, planetDistance: number): Array<UsersSection.ViewModels.IStarshipTravelVM>
        {
            starShips.forEach((starship) => {
                starship.ReSupplyCount = planetDistance / starship.MGLT * starship.Consumables;
            });
            return starShips;
        }

        static GetInstance = () =>
        {
            var instance = (httpService: ng.IHttpService, qService: ng.IQService) => new StarshipTravelService(httpService, qService );
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("UsersSection").factory("UsersSection.Services.StarshipTravelService", StarshipTravelService.GetInstance );
} 