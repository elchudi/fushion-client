angular.module('fushionApp').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            views: {
                "navbar": { templateUrl: "partial/navbar/navbar.html" },
                "content": { templateUrl: "modules/home/home.html" }
            }
        })
    ;
});
