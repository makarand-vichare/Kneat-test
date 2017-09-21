
module AdminSection.Controllers
{
    export class LoginController extends Common.Controllers.BaseController
    {
        static $inject = ["$injector", "AdminSection.Services.AuthService"];

        constructor(_injectorService: ng.auto.IInjectorService, private authService: AdminSection.Interfaces.IAuthService)
        {
            super( _injectorService);
            this.Initialize();
        }

        loginVM: AdminSection.ViewModels.ILoginVM = {
            Email: "",
            Password: ""
        };

        authenticationVM: AdminSection.ViewModels.IAuthenticationVM ;

        Login(loginData: AdminSection.ViewModels.ILoginVM)
        {
            var self = this;
            self.authService.Login(loginData).then( function ( response: any )
            {
                if ( response.data != null )
                {
                    self.windowService.location.href = '/NewsLetter';
                }

            })
            .catch( function ( response: any )
            {
                self.ProcessInfo.Message = response.data;
            })
            .finally( function ()
            {
                self.ProcessInfo.Loading = false;
            });
        }

        LogOut()
        {
            var self = this;
            self.authService.LogOut();
            self.windowService.location.href = '/Home/#/home';
        }

        Initialize()
        {
            var self = this;
            self.authenticationVM = self.authService.authVM;
        }
    }

    App.ModuleInitiator.GetModule("AdminSection").controller( "AdminSection.Controllers.LoginController", LoginController );
} 