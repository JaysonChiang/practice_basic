angular.module('voicetube')
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'view/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm'
                })
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }])