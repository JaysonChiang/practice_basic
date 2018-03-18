
angular.module("voicetube", ["ngRoute"])
.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'view/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })
        .otherwise({
            template : "<h1>None</h1><p>Nothing has been selected</p>"
        });

    }]);