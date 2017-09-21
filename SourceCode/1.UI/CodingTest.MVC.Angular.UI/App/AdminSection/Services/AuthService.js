var AdminSection;
(function (AdminSection) {
    var Services;
    (function (Services) {
        var AuthService = (function () {
            function AuthService($http, _localStorageService) {
                var _this = this;
                this.isAuth = false;
                this.authVM = {
                    IsAuth: this.isAuth,
                    Email: "",
                    Id: 0
                };
                this.Login = function (loginData) {
                    var self = _this;
                    var data = "grant_type=password&username=" + loginData.Email + "&password=" + loginData.Password;
                    return self.httpService.post(Common.AppConstants.AuthAPIUrl + '/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                        .then(function (response) {
                        self.localStorageService.set('authorizationData', {
                            Token: response.data.access_token,
                            Email: loginData.Email,
                            Id: response.data.id
                        });
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.Email = loginData.Email;
                        self.authVM.Id = response.data.id;
                        return response;
                    }).catch(function (response) {
                        self.LogOut();
                        return response;
                    });
                };
                this.LogOut = function () {
                    var self = _this;
                    self.localStorageService.remove('authorizationData');
                    self.authVM.IsAuth = self.isAuth;
                    self.authVM.Id = 0;
                    self.authVM.Email = "";
                };
                this.GetAuthData = function () {
                    var self = _this;
                    var authData = self.localStorageService.get('authorizationData');
                    if (authData != null) {
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.Email = authData.Email;
                        self.authVM.Id = authData.Id;
                    }
                };
                this.GetAntiForgeryToken = function () {
                    var self = _this;
                    return self.httpService.get(Common.AppConstants.AuthAPIUrl + '/api/Antiforgerytoken/GetAntiForgeryToken')
                        .then(function (response) {
                        return response;
                    })
                        .catch(function (response) {
                        return response;
                    });
                };
                this.httpService = $http;
                this.localStorageService = _localStorageService;
            }
            AuthService.getInstance = function () {
                var instance = function ($http, _localStorageService) { return new AuthService($http, _localStorageService); };
                return instance;
            };
            return AuthService;
        }());
        AuthService.$inject = ["$http", "localStorageService"];
        Services.AuthService = AuthService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.AuthService", AuthService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=AuthService.js.map