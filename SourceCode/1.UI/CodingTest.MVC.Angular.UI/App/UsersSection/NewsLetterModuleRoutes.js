var NewsLetterModule;
(function (NewsLetterModule) {
    var NewsLetterModuleRoutes = (function () {
        function NewsLetterModuleRoutes() {
        }
        NewsLetterModuleRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "NewsLetterModule.Controllers.NewsLetterController",
                templateUrl: "/MiniSpas/NewsLetterModule/Views/newsLetters.html",
                controllerAs: "newsLetterCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return NewsLetterModuleRoutes;
    }());
    NewsLetterModuleRoutes.$inject = ["$routeProvider"];
    NewsLetterModule.NewsLetterModuleRoutes = NewsLetterModuleRoutes;
})(NewsLetterModule || (NewsLetterModule = {}));
//# sourceMappingURL=NewsLetterModuleRoutes.js.map