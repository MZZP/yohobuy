// 创建路由
var app = angular.module("myApp", ['ngRoute', 'angularCSS']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './home/html/home.html',
      controller: 'homeCtrl'
   })
   .when('/shoppingCart', {
      templateUrl: './shoppingCart/html/shoppingCart.html',
      controller: 'shoppingCartCtrl'
   })
   .otherwise('/', {
      redirectTo: '/'
   })

}]);
