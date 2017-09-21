module Common.Controllers
{
    export class BaseController
    {
        protected locationService: ng.ILocationService;
        protected windowService: ng.IWindowService;
        static $inject = ["$injector"];

        constructor(private injectorService: ng.auto.IInjectorService )
        {
            this.windowService = injectorService.get<ng.IWindowService>("$window");
            this.locationService = injectorService.get<ng.ILocationService>( "$location" );
        }

        ProcessInfo = { Message: "" } as Common.ViewModels.IMessageVM;

        StartProcess()
        {
            var self = this;
            self.ProcessInfo = {
                Message: "loading..",
                Loading: true,
                IsSucceed:false
            }
        }

        EndProcess(message: string, isSucceed: boolean)
        {
            var self = this;
            self.ProcessInfo = {
                Message: message,
                Loading: false,
                IsSucceed: isSucceed
            }
        }
    }
}