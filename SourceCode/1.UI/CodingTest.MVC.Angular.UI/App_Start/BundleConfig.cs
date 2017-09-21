using System.Web.Optimization;

namespace CodingChallange.MVC.Angular.UI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = false;

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
            "~/Scripts/angular.js",
             "~/Scripts/angular-cookies.js",
           "~/Scripts/angular-route.js",
            "~/Scripts/angular-local-storage.js",
            "~/Scripts/loading-bar.js",
            "~/Scripts/angular-messages.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
            "~/Content/bootstrap.css",
            "~/Content/site.css",
            "~/Content/loading-bar.css",
            "~/Content/app.css"
            ));
      
            #region "common module Section"

            bundles.Add(new ScriptBundle("~/bundles/common-modules").Include(
                "~/App/ModuleInitiator.js",
                "~/App/Common/AppConstants.js",
                "~/App/Common/BaseController.js",
                "~/App/Common/AuthenticationInterceptor.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/common-directives").Include(
                "~/App/Common/Directives/AntiForgeryTokenDirective.js"
            ));

            #endregion

            #region "Home module section"

            bundles.Add(new ScriptBundle("~/bundles/home-modules").Include(
                "~/App/HomeSection/HomeSectionRoutes.js",
                "~/App/HomeSection/HomeSectionApp.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/home-services").Include(
                "~/App/HomeSection/Services/TestApiService.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/home-controllers").Include(
                "~/App/HomeSection/Controllers/HomeController.js"
            ));

            #endregion

            #region "Admin module Section"

            bundles.Add(new ScriptBundle("~/bundles/adminsection-modules").Include(
            "~/App/AdminSection/AdminSectionRoutes.js",
            "~/App/AdminSection/AdminSectionApp.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/adminsection-services").Include(
            "~/App/AdminSection/Services/AuthService.js",
            "~/App/AdminSection/Services/PlanetService.js",
            "~/App/AdminSection/Services/StarshipService.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/adminsection-controllers").Include(
                "~/App/AdminSection/Controllers/AdminHomeController.js",
                "~/App/AdminSection/Controllers/PlanetController.js",
                "~/App/AdminSection/Controllers/StarshipController.js",
                "~/App/AdminSection/Controllers/LoginController.js"
            ));

            #endregion

            #region "User module Section"

            bundles.Add(new ScriptBundle("~/bundles/userssection-modules").Include(
            "~/App/UsersSection/UsersSectionRoutes.js",
            "~/App/UsersSection/UsersSectionApp.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/userssection-services").Include(
            "~/App/UsersSection/Services/StarshipTravelService.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/userssection-controllers").Include(
                "~/App/UsersSection/Controllers/StarshipTravelController.js"
            ));

            #endregion

        }
    }
}
