
module AdminSection.Controllers
{
    export class AdminHomeController extends Common.Controllers.BaseController
    {

    }
    App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.AdminHomeController", AdminHomeController );
} 